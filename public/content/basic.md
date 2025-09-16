## Basic Command Linux
---

![basic](https://miro.medium.com/v2/resize:fit:711/0*wYX2Tiemr5JsW4PF.png)

Dalam sistem operasi berbasis Linux, interaksi utama dengan komputer sering dilakukan melalui Command Line Interface (CLI). Berbeda dengan antarmuka grafis (GUI), CLI memungkinkan pengguna mengetikkan perintah secara langsung untuk mengendalikan sistem. Penguasaan perintah dasar sangat penting karena hampir semua aktivitas, mulai dari navigasi direktori, pengelolaan file, hingga administrasi sistem, dapat dilakukan melalui terminal dengan cepat dan efisien.

Berikut command-command Linux yang sering digunakan:

---

1. Navigasi Direktori

    - pwd → Menampilkan lokasi direktori aktif.

    - ls → Menampilkan isi direktori.

    - ls -l → Menampilkan isi direktori dengan detail.
    
    - ls -a → Menampilkan isi direktori termasuk file tersembunyi.
    
    - cd <direktori> → Masuk ke direktori tertentu.

    - cd .. → Kembali satu tingkat ke direktori atas.

    - cd ~ → Kembali ke direktori home.

---

2. Manajemen File & Folder

    - touch file.txt → Membuat file kosong baru.
    
    - mkdir folder → Membuat folder baru.

    - rm file.txt → Menghapus file.

    - rm -r folder → Menghapus folder dan isinya.

    - cp file1.txt file2.txt → Menyalin file.

    - mv file.txt folder/ → Memindahkan file ke folder.

    - mv lama.txt baru.txt → Mengganti nama file.

---

3. Melihat Isi File

    - cat file.txt → Menampilkan isi file sekaligus.
    
    - less file.txt → Menampilkan isi file per halaman.
    
    - head -n 10 file.txt → Menampilkan 10 baris pertama.

    - tail -n 10 file.txt → Menampilkan 10 baris terakhir.

---

4. Informasi Sistem

    - date → Menampilkan tanggal & waktu.
    
    - whoami → Menampilkan nama user aktif.
    
    - uname -a → Informasi kernel & sistem.
    
    - df -h → Menampilkan informasi penggunaan disk.
    
    - free -h → Menampilkan informasi RAM.
    
    - uptime → Menampilkan lama sistem berjalan.

---

5. Manajemen Proses

    - ps → Menampilkan proses yang berjalan.

    - top → Menampilkan proses secara real-time.
    
    - kill <PID> → Menghentikan proses dengan PID.

---

6. Pencarian & Bantuan

    - find / -name file.txt → Mencari file berdasarkan nama.

    - grep "kata" file.txt` → Mencari teks dalam file.

    - man <command> → Dokumentasi lengkap sebuah command.

    - <command> --help → Bantuan singkat command.

---

7. Manajemen User & Permission (basic)

    - who → Melihat siapa saja user yang login.

    - id → Melihat informasi user.

    - chmod 755 file.sh → Mengubah izin akses file.

    - chown user:group file.txt → Mengubah pemilik file.

    - sudo <command> → Menjalankan command dengan hak admin.

---