FROM java:openjdk-8-jdk

MAINTAINER haipq7641@gmail.com

RUN mkdir -p /opt/android
RUN mkdir -p /opt/android/sdk

RUN apt-get update

# Installs i386 architecture required for running 32 bit Android tools
RUN dpkg --add-architecture i386 && \
    apt-get update -y && \
    apt-get install -y libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get autoremove -y && \
    apt-get clean

# Update Android licenses
COPY licenses /opt/android/sdk/licenses

# Install Android SDK
ENV ANDROID_HOME /opt/android/sdk
ENV REPO_OS_OVERRIDE linux
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools

RUN cd /opt/android/sdk && \
    wget -q https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip && \
    unzip sdk-tools-linux-3859397.zip && \
    rm sdk-tools-linux-3859397.zip

# Update Android SDK
RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "tools" "platform-tools" "extras;android;m2repository" "extras;google;google_play_services" "extras;google;m2repository" "extras;google;instantapps" "platforms;android-23" "platforms;android-24" "platforms;android-25" "platforms;android-26" "build-tools;23.0.0" "build-tools;23.0.1" "build-tools;23.0.2" "build-tools;23.0.3" "build-tools;24.0.1" "build-tools;24.0.2" "build-tools;24.0.3" "build-tools;25.0.0" "build-tools;25.0.1" "build-tools;25.0.2" "build-tools;25.0.3" "build-tools;26.0.0" "build-tools;26.0.1"


# Install Gradle
ENV GRADLE_HOME /usr/bin/gradle
ENV PATH $PATH:$GRADLE_HOME/bin

RUN cd /usr/bin && \
    wget -q https://services.gradle.org/distributions/gradle-4.0-all.zip && \
    unzip gradle-4.0-all.zip && \
    ln -s gradle-4.0 gradle && \
    rm gradle-4.0-all.zip

# Framgia CI Tools
RUN wget -O /usr/bin/framgia-ci https://raw.githubusercontent.com/framgia/ci-report-tool/master/dist/framgia-ci && chmod +x /usr/bin/framgia-ci

# Cleaning
RUN apt-get clean
