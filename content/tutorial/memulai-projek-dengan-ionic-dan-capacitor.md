---
title: 'Memulai Projek dengan Ionic dan Capacitor'
description: 'Bagaimana menggunakan Ionic dan Capacitor untuk membuat aplikasi native Android dan iOS'
published: true
publishedAt: 2021-02-20T05:10:00.000Z
updatedAt: 2021-02-20T05:10:00.000Z
tags:
  - Angular
  - Ionic Framework
  - CapacitorJS
keywords:
  - iOS
  - Android
authors:
  - Mirza Ilhami
---

[Ionic Framework](https://ionicframework.com) merupakan framework mobile app open-source untuk pengembangan aplikasi mobile menggunakan teknologi web dan progressive web app sedangkan [Capacitor](https://capacitorjs.com/) adalah cross-platform mobile native runtime yang memungkinkan untuk menkonversi web dapat berjalan secara native di Android dan iOS.

Dulunya dikenal dengan istilah Hybrid App, namun saat ini lebih dikenal dengan istilah Web Native Apps. Capacitor ini menyediakan native container untuk dapat mengakses native SDK menggunakan sejumlah plugin open-source yang dapat berjalan di Android, iOS dan Web.

## Instal Ionic CLI
Pertama sekali, pastikan [Node.js](https://nodejs.org/en/download) telah terinstal. Kemudian, install Ionic CLI dengan NPM seperti berikut:
```
npm install -g @ionic/cli
```

Jika sebelumnya Anda telah menginstal [Ionic](https://mirzailhami.com/tags/ionic-framework), silakan terlebih dahulu uninstall dan install kembali seperti berikut:
```
npm uninstall -g ionic
npm install -g @ionic/cli
```

*-g* di atas artinya global. Jika terjadi permission error, silakan lihat [Permission Error ](https://ionicframework.com/docs/developing/tips#resolving-permission-errors) lebih lanjut.

## Memulai Aplikasi (via CLI)
Cara paling mudah memulai Ionic adalah menggunakan template bawaannya. Ionic menyediakan 3 template yang dapat Anda gunakan sebagai starter template, yaitu: **blank**, **tabs** dan **sidemenu**. Menggunakan perintah berikut:
```
ionic start myApp tabs
```
- **ionic**: prefix dari Ionic CLI (Command Line Interface)
- **start**: untuk memulai projek dengan Ionic
- **myApp**: nama dari aplikasi Anda, boleh string apa saja tanpa spasi
- **tabs**: salah satu pilihan template starter

Perintah di atas akan menghasilkan berikut:
![Select JavaScript Framework](/assets/img/tutorial/memulai-projek-dengan-ionic-dan-capacitor/optimized/pilih-ionic-template.png)

Pilih salah satu framework JavaScript yang Anda kuasai, saya prefer [Angular](https://mirzailhami.com/tags/angular). Gunakan kursor atas-bawah di keyboard untuk memilih, lalu enter. Untuk bypass pilihan ini, Anda dapat memulai project dengan propery `--type`.
```
ionic start myApp tabs --type=angular
```

Gambaran template starter Ionic adalah seperti di bawah ini:
![Ionic Starter Template](https://ionicframework.com/docs/assets/img/installation/start-app-thumbnails.png)

Untuk melihat semua template Ionic yang tersedia, bisa dilihat dengan perintah berikut:
```
ionic start --list
```

## Menjalankan Aplikasi di Browser
Untuk dapat menjalankan aplikasi di browser menggunakan perintah berikut:
```
cd myApp
ionic serve
```
Anda akan melihat aplikasi tersebut berjalan di browser dengan alamat http://localhost:8100. Untuk menjalankan aplikasi Ionic di browser dengan tampilan Android & iOS sekaligus, Anda bisa menggunakan perintah:
```
ionic serve --lab
```

Nah, di atas tersebut adalah cara memulai aplikasi Ionic menggunakan CLI. Ionic juga menyediakan metode lain untuk memulai projek, yaitu dengan wizard.

## Memulai Aplikasi (via Wizard)
Untuk memulai aplikasi Ionic melalui wizard UI silakan [klik disini](https://ionicframework.com/start#basics). Dari wizard ini, Anda dapat menentukan nama aplikasi, icon, warna tema, pilih template dan pilih framework.
![Memulai Ionic via Wizard](/assets/img/tutorial/memulai-projek-dengan-ionic-dan-capacitor/optimized/memulai-ionic-via-wizard.png)

Langkah berikutnya adalah Anda dapat mengkoneksikan projek Ionic tersebut ke `Github/Gitlab/Bitbucket` dan menggunakan [Dashboard Ionic](https://dashboard.ionicframework.com) untuk build, deploy dan preview.

## Menggunakan Capacitor
Capacitor tidak hanya dapat digunakan dengan Ionic, namun juga dengan web app lainnya. Untuk menginstal [Capacitor](https://mirzailhami.com/tags/capacitorjs) dengan Ionic sebagai berikut:
### Projek Baru
Memulai projek Ionic beserta Capacitor adalah sebagai berikut:
```
ionic start myApp tabs --capacitor
cd myApp
```
### Existing Ionic Project
Sedangkan jika Anda sebelumnya telah memulai projek Ionic, lalu Capacitor dapat diinstall sebagai berikut:
```
cd myApp
ionic integrations enable capacitor
```
### Inisial Capacitor dengan Aplikasi
```
npx cap init [appName] [appId]
```
- **appName**: nama aplikasi
- **appId**: domain identifier dari aplikasi Anda (misal: `com.mirzailhami.app`)

### Build Aplikasi Ionic
Anda harus build aplikasi Ionic (minimal satu kali) untuk dapat menambahkan platform native Android atau iOS.
```
ionic build
```
Perintah diatas menghasilkan folder `www` sesuai konfigurasi `webDir` di file `capacitor.config.json`.

### Tambahkan Platform
Untuk menambahkan platform Android dan/atau iOS melalui perintah berikut:
```
npx cap add ios
npx cap add android
```
Perintah diatas akan menghasilkan folder Android dan iOS yang nantinya keduanya bisa Anda gunakan dengan Android Studio dan Xcode.

*Note: platform iOS hanya dapat dibuild menggunakan MacOS*

### Build, Run dan Deploy via IDE
Setelah menambahkan platform, berikutnya adalah menjalankan projek tersebut di emulator Android dan iOS via IDE menggunakan perintah:
```
npx cap open ios
npx cap open android
```
Perintah di atas akan menjalankan Android Studio dan Xcode dikomputer Anda. Tentu, pastikan Android Studio dan Xcode telah terinstal sebelumnya. Gunakan IDE tersebut untuk menjalankan aplikasi di emulator Android dan iOS.

### Sinkronisasi App dengan Capacitor
Setiap kali Anda membuat perubahan melalui perintah `ionic build` yang tentunya mengubah direktori web Anda (defaultnya **www**), Anda perlu melakukan copy folder tersebut ke projek native Android dan iOS:
```
npx cap copy
```
### Menggunakan Plugin Cordova dan Ionic Native
Anda dapat menggunakan plugin Cordova dan Ionic Native di Capacitor. Silakan cek [Cordova Plugins](https://capacitorjs.com/docs/cordova/using-cordova-plugins) untuk informasi lebih lanjut. Anda juga dapat menggunakan [Capacitor Plugins](https://capacitorjs.com/docs/plugins). Plugin-plugin native tersebut dapat Anda gunakan diaplikasi misalnya untuk mengakses Kamera, Haptics, Push Notification dan banyak lagi fitur-fitur native lainnnya.

Demikian untuk memulai projek Ionic dengan Capacitor.

