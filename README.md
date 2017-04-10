# Tạo Profile 

Thêm profile mới cho project tại `profiles.js`

Để biết tên package bạn gõ lệnh sau trên máy của bạn

```
...$./android_sdk/tools/bin/sdkmanager --list
```

Tiếp chạy lệnh `node app.js` để tạo Dockerfile cho Project

Thư mục `sources` nới lưu các Dockerfile được tạo ra

### Các profile hiện hành:
- fdplugins/android:latest (fdplugins/android:jdk-8)
- fdplugins/android:jdk-8
- fdplugins/android:jdk-8-ndk

### Profile hiện tại đang bao gồm:
- Sdk Version `r25.2.3`
- Api Levels `"android-23", "android-24", "android-25"`
- Build Tools `"23.0.0","23.0.1","23.0.2","23.0.3",,"24.0.1","24.0.2","24.0.3","25.0.0", "25.0.1", "25.0.2"`
- Android Support Libs Tại thời điểm `07/04/2017`
- Gradle Version 3.3