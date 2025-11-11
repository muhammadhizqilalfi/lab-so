## SSH (Secure Shell)
___

SSH adalah protokol yang digunakan untuk melakukan remote login dan administrasi server secara aman.
Komunikasi antara client dan server dienkripsi, sehingga lebih aman dibanding Telnet atau FTP biasa.

SSH umumnya digunakan oleh administrator server untuk:

- Login ke server dari jarak jauh

- Menjalankan perintah terminal

- Transfer file (dengan SCP / SFTP)

- Mengelola konfigurasi server

#### Konfigurasi SSH Server
---

1. Instalasi OpenSSH Server

    Install package dengan:
    
    ```
    sudo apt update
    sudo apt install openssh-server -y
    ```

    Setelah instalasi, aktifkan service ssh:

    ```
    sudo systemctl enable ssh

    ```
    > Perintah ini akan memastikan ssh tetap aktif bahkan setelah reboot


    ```
    sudo systemctl start ssh
    
    ```

    > Perintah ini hanya akan mengaktifkan ssh ketika server aktif dan akan mati ketika reboot

    Cek apakah service sudah aktif:

    ```
    sudo systemctl status ssh

    ```

---

2. Konfigurasi SSH

    Edit konfigurasi SSH di ``/etc/ssh/``

    Edit file:

    ```
    sudo nano /etc/ssh/sshd_config

    ```

    Parameter penting yang umum digunakan:

    |Parameter|Fungsi|
    |----|----|
    |Port 22|Mengubah port SSH
    |PermitRootLogin no|Melarang login langsung sebagai root
    |PasswordAuthentication yes/no|Izinkan login dengan password atau tidak. Jika yes maka login akan menggunakan password. Jika no maka login hanya membutuhkan user dan IP|
    |PubkeyAuthentication yes| Izinkan login menggunakan SSH key

    Setelah mengubah konfigurasi:

    ```
    sudo systemctl restart ssh

    ```

---

3. Menggunakan Port Custom

    Ubah parameter **Port** pada konfigurasi SSH ``/etc/ssh/sshd_config``:

    Ubah dari ``Port 22`` menjadi ``Port [22_AkhirNPM]``

    Restart service

    ```
    sudo systemctl restart ssh

    ```

    Edit juga file socket SSH:

    ```
    sudo nano /lib/systemd/system/ssh.socket

    ```

    Cari baris:

    ```
    ListenStream=22

    ```

    Ubah menjadi:

    ```
    ListenStream=[22Akhir_NPM]

    ```

    Reload daemon dan socket

    ```
    sudo systemctl daemon-reload
    sudo systemctl restart ssh.socket

    ```

    Berikan akses ke port SSH custom:

    ```
    sudo ufw allow [Port]/tcp
    sudo ufw reload
    ```

    Cek dengan:

    ```
    sudo ufw status

    ```

    Jika port custom sudah muncul maka konfigurasi berhasil




#### Akses SSH dari Client
---

Buka terminal atau Command Prompt dan akses SSH dengan:

```
ssh [user_VM]@[IP_VM] -p [Port]

```

Jika diminta password, maka isi dengan password VM

Akses SSH juga bisa dilakukan menggunakan PuTTY