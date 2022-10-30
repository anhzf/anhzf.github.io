---
title: Cara Hosting Web dengan Github Page
description: Hosting Web Statis Gratis menggunakan Github Page
image: "/assets/img/blogs/2022-10-30_hosting-web-ghpage_cover.png"
tags: ["tutorial", "github", "github-page", "hosting"]
---

Setelah file HTML, CSS, JavaScript, Gambar, dan lain sebagainya telah siap bagaimana caranya agar orang-orang bisa melihatnya? Jawabannya adalah dengan cara hosting. Hosting adalah proses menyimpan file-file tersebut di server agar orang-orang bisa mengaksesnya melalui internet. Ada banyak cara untuk hosting, salah satunya adalah dengan menggunakan Github Page. Github Page adalah layanan gratis dari Github yang memungkinkan kita untuk hosting website dengan mudah. Dalam tutorial ini, kita akan belajar bagaimana cara hosting website dengan Github Page.


## Apa itu Github Page?
Pada dasarnya Github Page adalah layanan gratis dari Github yang memungkinkan kita untuk hosting website statis dengan mudah. Website statis adalah website yang tidak memiliki database dan hanya berisi file HTML, CSS, JavaScript, Gambar, dan lain sebagainya. Github Page juga memungkinkan kita untuk hosting website dinamis dengan menggunakan Jekyll. Jekyll adalah static site generator yang memungkinkan kita untuk membuat website dinamis dengan menggunakan bahasa pemrograman Ruby. Jika kita ingin menggunakan Jekyll, kita harus menginstall Ruby terlebih dahulu. Jika kita tidak ingin menggunakan Jekyll, kita bisa langsung membuat website statis tanpa harus menginstall Ruby.


## Apa keuntungan menggunakan Github Page?
Github Page memiliki beberapa keuntungan, diantaranya:
- Gratis
- Berbasis Git
- Menyediakan domain
- Telah menggunakan HTTPS


## Persiapan
Sebelum kita mulai, ada beberapa hal yang harus kita persiapkan terlebih dahulu, diantaranya:
- Akun [Github](https://github.com/).


## Langkah-langkah

### 1. Membuat Repository
Pertama-tama kita harus membuat repository di Github. Repository adalah tempat untuk menyimpan file-file yang kita buat. Untuk membuat repository, kita bisa mengikuti langkah-langkah berikut:
1. Buka website [Github](https://github.com)
2. Klik tombol `+` di pojok kanan atas
![Tombol +](/assets/img/blogs/2022-10-30_hosting-web-ghpage_membuat-repo_1.png)
3. Pada isian `Repository name`, masukkan nama repository dengan format seperti berikut: `<username>.github.io`. Jika kita menggunakan username `user`, maka nama repositorynya adalah `user.github.io`.
![Membuat repository](/assets/img/blogs/2022-10-30_hosting-web-ghpage_membuat-repo_2.png)
4. Setelah semua isian terisi, Create repository

### 2. Mengupload File
Pada dasarnya Github merupakan layanan Git. Git adalah sistem pengontrol versi yang memungkinkan kita untuk mengontrol perubahan pada file.

Dikarenakan kebutuhan kita saat ini adalah untuk hosting website statis, kita tidak perlu menggunakan Git. Namun, Github Page membutuhkan file-file yang kita buat berada di repository. Oleh karena itu, kita harus mengupload file-file tersebut ke repository. Untuk mengupload file, kita bisa mengikuti langkah-langkah berikut:
1. Buka repository yang sudah kita buat tadi
2. Pada repository baru/kosong kita akan mendapati tampilan berikut, klik tombol `Uploading an existing files`.
![Uploading an existing files](/assets/img/blogs/2022-10-30_hosting-web-ghpage_upload-file_1.png)
3. Pada halaman baru yang terbuka, kita bisa mengupload file-file yang kita buat tadi. Silakan seret file dari File Explorer agar lebih cepat. Setelah selesai mengupload file, klik tombol `Commit changes`.
![Upload process](/assets/img/blogs/2022-10-30_hosting-web-ghpage_upload-file_2.png)

### 3. Mengakses Website
Selamat! Website kita sudah bisa diakses. Untuk mengakses website, silakan ketikkan `<username>.github.io` di browser.


## Kesimpulan
Dalam tutorial ini, kita telah belajar bagaimana cara hosting website dengan Github Page. Saya harap tutorial ini bermanfaat bagi kalian. Silakan bagikan artikel ini jika kalian merasa bermanfaat. Akhir kata, Terima kasih 😁🙏.
