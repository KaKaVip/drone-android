module.exports = [
    {
        name : "jdk-8",
        images : "java:openjdk-8-jdk",
        gradleVersion : "3.3",
        android : {
            sdkVersion: "r25.2.3",
            packages: [ 
                // SDK Tools
                "tools", "platform-tools", 
                // Libs
                "extras;android;m2repository", "extras;google;google_play_services", "extras;google;m2repository", 
                // API Levels
                "platforms;android-23", "platforms;android-24", "platforms;android-25", 
                // Build Tools
                "build-tools;23.0.0", "build-tools;23.0.1", "build-tools;23.0.2", "build-tools;23.0.3",
                "build-tools;24.0.1", "build-tools;24.0.2", "build-tools;24.0.3", 
                "build-tools;25.0.0", "build-tools;25.0.1", "build-tools;25.0.2" 
            ]
        }
    },
    {
        name : "jdk-8-ndk",
        images : "java:openjdk-8-jdk",
        gradleVersion : "3.3",
        android : {
            sdkVersion: "r25.2.3",
            packages: [ 
                // SDK Tools
                "tools", "platform-tools", 
                // Libs
                "extras;android;m2repository", "extras;google;google_play_services", "extras;google;m2repository", 
                // API Levels
                "platforms;android-23", "platforms;android-24", "platforms;android-25", 
                // Build Tools
                "build-tools;23.0.0", "build-tools;23.0.1", "build-tools;23.0.2", "build-tools;23.0.3",
                "build-tools;24.0.1", "build-tools;24.0.2", "build-tools;24.0.3", 
                "build-tools;25.0.0", "build-tools;25.0.1", "build-tools;25.0.2",
                // NDK
                "ndk-bundle", "cmake;3.6.3155560", "lldb;2.3"
            ]
        }
    }
]