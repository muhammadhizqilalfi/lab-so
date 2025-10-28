## FTP
___

FTP (File Transfer Protocol) adalah protokol standar untuk mentransfer file antara komputer dalam jaringan TCP/IP.
Biasanya digunakan untuk:

- Upload dan download file ke server.

- Pertukaran data antar sistem.

- Manajemen file web server dari jarak jauh.

Linux menyediakan beberapa layanan FTP seperti:

- vsftpd (Very Secure FTP Daemon) → ringan & aman.

- proftpd → fleksibel dan modular.

- pure-ftpd → lebih sederhana untuk setup cepat.

#### Instalasi & Konfigurasi
---

1. Instalasi FTP Server

    ```
    sudo apt update
    sudo apt install vsftpd -y
    ```

    Setelah instalasi selesai, aktifkan layanan

    ```
    sudo systemctl enable vsftpd
    sudo systemctl start vsftpd
    sudo systemctl status vsftpd
    ```

    > Jika status active (running) → berarti FTO server sudah berjalan

---

2. Konfigurasi Dasar vsftpd

    Konfigurasi utama ada di file:

    ```
    /etc/vsftpd.conf

    ```

    Edit file dengan editor teks:

    ```
    sudo nano /etc/vsftpd.conf

    ```

    Beberapa parameter penting

    |Parameter|Fungsi|
    |----|----|
    |``listen=YES``|Aktifkan server standalone
    |``anonymous_enable=NO``|	Nonaktifkan akses anonim
    |``local_enable=YES``|	Izinkan login user lokal
    |``write_enable=YES``|	Izinkan upload / modifikasi file
    |``chroot_local_user=YES``|	Batasi user ke home folder masing-masing
    |``local_umask=022``|	Permission default saat upload

    Simpan dan keluar (``CTRL+X``, ``y``, ``ENTER``).

    Restart service:
    ```
    sudo systemctl restart vsftpd
    
    ```

---

3. Membuat User untuk FTP

    Buat akun user baru yang khusus digunakan untuk FTP:

    ```
    sudo adduser ftpuser
    sudo passwd ftpuser
    ```

    Pastikan user punya folder home dan hak akses:

    ```
    sudo mkdir -p /home/ftpuser/files
    sudo chown -R ftpuser:ftpuser /home/ftpuser
    ```

    Untuk keamanan, kamu juga bisa membatasi user hanya di direktori home:

    ```
    echo "ftpuser" | sudo tee -a /etc/vsftpd.user_list
    
    ```

    Lalu aktifkan daftar user yang diperbolehkan di ``/etc/vsftpd.conf``:

    ```
    userlist_enable=YES
    userlist_file=/etc/vsftpd.user_list
    userlist_deny=NO
    ```

    Restart lagi:

    ```
    sudo systemctl restart vsftpd
    
    ```


