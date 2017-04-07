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
    wget -q https://dl.google.com/android/repository/tools_r25.2.3-linux.zip && \
    unzip tools_r25.2.3-linux.zip && \
    rm tools_r25.2.3-linux.zip

# Update Android SDK
RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "tools" && \
    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "platform-tools" && \
    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "extras;android;m2repository" && \
    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "extras;google;google_play_services" && \
    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "extras;google;m2repository"


RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "platforms;android-23"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "platforms;android-24"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "platforms;android-25"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;23.0.0"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;23.0.1"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;23.0.2"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;23.0.3"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;24.0.1"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;24.0.2"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;24.0.3"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;25.0.0"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;25.0.1"

RUN ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager "build-tools;25.0.2"


# Install Gradle
ENV GRADLE_HOME /usr/bin/gradle
ENV PATH $PATH:$GRADLE_HOME/bin

RUN cd /usr/bin && \
    wget -q https://services.gradle.org/distributions/gradle-3.3-all.zip && \
    unzip gradle-3.3-all.zip && \
    ln -s gradle-3.3 gradle && \
    rm gradle-3.3-all.zip

# Cleaning
RUN apt-get clean
