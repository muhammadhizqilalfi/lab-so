## Lanjutan : User & Permission
---

Salah satu keunggulan utama Linux adalah manajemen user dan sistem hak akses (permission) yang kuat.
Semua file, folder, dan proses di Linux memiliki pemilik (owner), grup, dan aturan izin yang menentukan siapa yang boleh membaca, menulis, atau mengeksekusi.

Pemahaman tentang user, group, dan permission sangat penting untuk menjaga keamanan serta stabilitas sistem, terutama saat mengelola server multiuser.
___

#### Jenis User di Linux
---
1. Root (Superuser) - Pengguna dengan akses penuh ke seluruh sistem. Dapat mengubah, menghapus, dan membuat file apa pun. Username: root.

2. Regular User - Pengguna biasa yang hanya dapat mengakses file miliknya sendiri dan menjalankan perintah non-administratif.

3. System User - User yang dibuat oleh sistem atau aplikasi (misalnya ``mysql``, ``www-data``, ``daemon``). Biasanya tidak digunakan untuk login.