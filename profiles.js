module.exports = [
    {
        name : "jdk-8",
        images : "java:openjdk-8-jdk",
        gradleVersion : "3.3",
        android : {
            sdkVersion: "r25.2.3",
            apiLevels: [ "android-23", "android-24", "android-25" ],
            buildTools: [ "23.0.0","23.0.1","23.0.2","23.0.3",,"24.0.1","24.0.2","24.0.3","25.0.0", "25.0.1", "25.0.2" ],
        }
    },
    {
        name : "jdk-8-ndk-r14b",
        images : "java:openjdk-8-jdk",
        gradleVersion : "3.3",
        android : {
            sdkVersion: "r25.2.3",
            apiLevels: [ "android-23", "android-24", "android-25" ],
            buildTools: [ "23.0.0","23.0.1","23.0.2","23.0.3",,"24.0.1","24.0.2","24.0.3","25.0.0", "25.0.1", "25.0.2" ],
            ndkVersion: "r14b"
        }
    },
    {
        name : "jdk-8-ndk-r12b",
        images : "java:openjdk-8-jdk",
        gradleVersion : "3.3",
        android : {
            sdkVersion: "r25.2.3",
            apiLevels: [ "android-23", "android-24", "android-25" ],
            buildTools: [ "23.0.0","23.0.1","23.0.2","23.0.3",,"24.0.1","24.0.2","24.0.3","25.0.0", "25.0.1", "25.0.2" ],
            ndkVersion: "r12b"
        }
    }
]