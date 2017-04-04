FROM java:openjdk-7-alpine

MAINTAINER haipq7641@gmail.com

VOLUME ["/opt/android"]

# Setup ENV
ENV ANDROID_HOME /opt/android/sdk
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools

# Install libstdc++
RUN apk update && apk add bash libstdc++ && rm -rf /var/cache/apk/*
