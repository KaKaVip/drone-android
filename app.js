const util = require('util');
const fs = require('fs-extra');
const StringBuilder = require("string-builder");
const PROFILES = require('./profiles.js');
const dirRoot = 'sources';


// Clear & create folder
if (!fs.existsSync(dirRoot)) {
    fs.mkdirSync(dirRoot);
} else {
    fs.emptyDirSync(dirRoot);  
}

PROFILES.forEach(function(profile) {
    console.log(" Profile: " + profile.name);
    // Make Dir
    var dir = dirRoot + "/" + profile.name
    // Clear & create folder
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    } 
    console.log("   mkdir: "+ dir);

    var dockerFile = new StringBuilder();
    dockerFile.append("FROM " + profile.images).appendLine();
    dockerFile.appendLine();

    dockerFile.append("MAINTAINER haipq7641@gmail.com").appendLine();
    dockerFile.appendLine();
    dockerFile.append("RUN mkdir -p /opt/android").appendLine();
    dockerFile.append("RUN mkdir -p /opt/android/sdk").appendLine();
    dockerFile.appendLine();

    // System Update
    dockerFile.append("RUN apt-get update").appendLine();
    dockerFile.appendLine();

    // Installs i386 architecture required for running 32 bit Android tools
    dockerFile.append("# Installs i386 architecture required for running 32 bit Android tools").appendLine();
    dockerFile.append("RUN dpkg --add-architecture i386 && \\").appendLine();
    dockerFile.append("    apt-get update -y && \\").appendLine();
    dockerFile.append("    apt-get install -y libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 && \\").appendLine();
    dockerFile.append("    rm -rf /var/lib/apt/lists/* && \\").appendLine();
    dockerFile.append("    apt-get autoremove -y && \\").appendLine();
    dockerFile.append("    apt-get clean").appendLine();
    dockerFile.appendLine();

    dockerFile.append("# Update Android licenses").appendLine();
    dockerFile.append("COPY licenses /opt/android/sdk/licenses").appendLine();
    dockerFile.appendLine();

    // Android SDK 
    dockerFile.append("# Install Android SDK").appendLine();
    dockerFile.append("ENV ANDROID_HOME /opt/android/sdk").appendLine();
    dockerFile.append("ENV REPO_OS_OVERRIDE linux").appendLine();
    dockerFile.append("ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools").appendLine();
    dockerFile.appendLine();
    dockerFile.append("RUN cd /opt/android/sdk && \\").appendLine()
    dockerFile.append("    wget -q https://dl.google.com/android/repository/tools_" + profile.android.sdkVersion + "-linux.zip && \\").appendLine();
    dockerFile.append("    unzip tools_" + profile.android.sdkVersion + "-linux.zip && \\").appendLine();
    dockerFile.append("    rm tools_" + profile.android.sdkVersion + "-linux.zip").appendLine();
    dockerFile.appendLine();

    dockerFile.append("# Update Android SDK").appendLine();
    dockerFile.append("RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager \"tools\" && \\").appendLine();
    dockerFile.append("    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager \"platform-tools\" && \\").appendLine();
    dockerFile.append("    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager \"extras;android;m2repository\" && \\").appendLine();
    dockerFile.append("    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager \"extras;google;google_play_services\" && \\").appendLine();
    dockerFile.append("    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager \"extras;google;m2repository\"").appendLine();

    dockerFile.appendLine();
   
    profile.android.apiLevels.forEach(function(apiLevel) {
        dockerFile.appendLine();
        dockerFile.append("RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager \"platforms;" + apiLevel + "\"").appendLine();
    });

    profile.android.buildTools.forEach(function(buildTool) {
        dockerFile.appendLine();
        dockerFile.append("RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager \"build-tools;" + buildTool + "\"").appendLine();
    });

    dockerFile.appendLine();
    dockerFile.appendLine();

    //Android NDK
    if (typeof profile.android.ndkVersion !== "undefined") {
        dockerFile.append("# Install Android NDK").appendLine();
        dockerFile.append("ENV ANDROID_NDK_HOME /opt/android/ndk-" + profile.android.ndkVersion).appendLine();
        dockerFile.append("ENV PATH ${PATH}:${ANDROID_NDK_HOME}").appendLine();
        dockerFile.appendLine();
        dockerFile.append("RUN cd /opt/android && \\").appendLine();
        dockerFile.append("    wget -q https://dl.google.com/android/repository/android-ndk-"+ profile.android.ndkVersion +"-linux-x86_64.zip && \\").appendLine();
        dockerFile.append("    unzip android-ndk-"+ profile.android.ndkVersion +"-linux-x86_64.zip && \\").appendLine();
        dockerFile.append("    mv android-ndk-"+ profile.android.ndkVersion +" ndk-"+ profile.android.ndkVersion+"  && \\").appendLine();
        dockerFile.append("    rm android-ndk-"+ profile.android.ndkVersion +"-linux-x86_64.zip").appendLine();
        dockerFile.appendLine();
    }
    

    dockerFile.append("# Install Gradle").appendLine();
    dockerFile.append("ENV GRADLE_HOME /usr/bin/gradle").appendLine();
    dockerFile.append("ENV PATH $PATH:$GRADLE_HOME/bin").appendLine().appendLine();
    dockerFile.append("RUN cd /usr/bin && \\").appendLine();
    dockerFile.append("    wget -q https://services.gradle.org/distributions/gradle-"+ profile.gradleVersion +"-all.zip && \\").appendLine();
    dockerFile.append("    unzip gradle-"+ profile.gradleVersion +"-all.zip && \\").appendLine();
    dockerFile.append("    ln -s gradle-"+ profile.gradleVersion +" gradle && \\").appendLine();
    dockerFile.append("    rm gradle-"+ profile.gradleVersion +"-all.zip").appendLine();
    dockerFile.appendLine();

    // Framgia CI Tools
    dockerFile.append("# Framgia CI Tools").appendLine();
    dockerFile.append("RUN wget -O /usr/bin/framgia-ci https://raw.githubusercontent.com/framgia/ci-report-tool/master/dist/framgia-ci && chmod +x /usr/bin/framgia-ci").appendLine();
    dockerFile.appendLine();
    
    dockerFile.append("# Cleaning").appendLine();
    dockerFile.append("RUN apt-get clean").appendLine();
    
    // Copy licenses
    fs.copySync("licenses",dir + "/licenses");
    console.log("   copy licenses");

    // Write Docker file
    fs.writeFileSync(dir + "/" + "Dockerfile", dockerFile.toString()); 
    console.log("   created Dockerfile");

});