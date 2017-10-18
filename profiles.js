module.exports = [
    {
        name : "jdk-8",
        images : "java:openjdk-8-jdk",
        gradleVersion : "4.0",
        android : {
            sdkVersion: "3859397",
            packages: [ 
                // SDK Tools
                "tools", "platform-tools", 
                // Libs
                "extras;android;m2repository", "extras;google;google_play_services", "extras;google;m2repository", "extras;google;instantapps",
                // API Levels
                "platforms;android-23", "platforms;android-24", "platforms;android-25", "platforms;android-26",  
                // Build Tools
                "build-tools;23.0.0", "build-tools;23.0.1", "build-tools;23.0.2", "build-tools;23.0.3",
                "build-tools;24.0.1", "build-tools;24.0.2", "build-tools;24.0.3", 
                "build-tools;25.0.0", "build-tools;25.0.1", "build-tools;25.0.2", "build-tools;25.0.3",
                "build-tools;26.0.0", "build-tools;26.0.1"
            ]
        }
    },
    {
        name : "jdk-8-ndk",
        images : "java:openjdk-8-jdk",
        gradleVersion : "4.0",
        android : {
            sdkVersion: "3859397",
            packages: [ 
                // SDK Tools
                "tools", "platform-tools", 
                // Libs
                "extras;android;m2repository", "extras;google;google_play_services", "extras;google;m2repository", "extras;google;instantapps",
                // API Levels
                "platforms;android-23", "platforms;android-24", "platforms;android-25", "platforms;android-26", 
                // Build Tools
                "build-tools;23.0.0", "build-tools;23.0.1", "build-tools;23.0.2", "build-tools;23.0.3",
                "build-tools;24.0.1", "build-tools;24.0.2", "build-tools;24.0.3", 
                "build-tools;25.0.0", "build-tools;25.0.1", "build-tools;25.0.2", "build-tools;25.0.3",
                "build-tools;26.0.0", "build-tools;26.0.1"
                // NDK
                "ndk-bundle", "cmake;3.6.4111459", "lldb;2.3"
            ]
        }
    }
]