## Samba Server
____

Samba adalah layanan berbasis protokol SMB/CIFS yang memungkinkan sharing file dan printer antara Linux dan sistem lain seperti Windows.
Dengan Samba, Ubuntu Server dapat berfungsi sebagai:

- File server

- Folder sharing untuk jaringan LAN

- User-based sharing (private)

- Public sharing

#### Instalasi dan Konfigurasi
---

1. Instalasi Samba

    ```
    sudo apt update
    sudo apt install samba -y
    ```

    Setelah instalasi aktifkan service samba:

    ```
    sudo systemctl enable smbd
    sudo systemctl start smbd
    ```

2. Konfigurasi Folder Sharing (Public)

    Buat folder share

    ```
    sudo mkdir -p /srv/samba/public
    
    ```

    Atur permission

    ```
    sudo chmid -R 777 /srv/samba/public

    ```

    Edit konfigurasi samba di:

    ```
    /etc/samba/smb.conf

    ```

    Tambah konfigurasi di bagian bawah:

    ```
    [Public]
        path = /srv/samba/public
        browseable = yes
        writable = yes
        guest ok = yes
    ```

    Restart Samba:

    ``` 
    sudo systemctl restart smbd

    ```

    Test akses dari Windows

    Ketik **Win+R**

    ```
    \\IP_server

    ```

    Akan muncul folder **Public**, bisa langsung akses tanpa login.

---

3. Konfigurasi Folder Sharing (Private)

    Buat user di Linux

    ```
    sudo adduser usersmb

    ```

    Set password Samba user

    ```
    sudo smbpasswd -a usersmb

    ```

    Buat folder

    ```
    sudo mkdir -p /srv/samba/siswa
    sudo chown siswa:siswa /srv/samba/siswa
    sudo chmod 770 /srv/samba/siswa
    ```

    Edit smb.conf, Tambahkan:

    ```
    [Siswa]
        path = /srv/samba/siswa
        valid users = siswa
        read only = no
        browseable = yes
    ```

    Restart Samba:

    ```
    sudo systemctl restart smbd

    ```

    Lalu, akses dari Windows

    ```
    \\IP_server

    ```

4. Sharing Folder Home User di Samba

    Cari bagian ini (biasanya ada tetapi dalam kondisi commented ``#``):

    ```
    [homes]
        comment = Home Directories
        browseable = no
        read only = no
    ```

    Jika belum ada, tambahkan manual:

    ```
    [homes]
        comment = Home Directories
        browseable = no
        read only = no
        create mask = 0700
        directory mask = 0700
    ```

    |Parameter|Penjelasan|
    |----|----|
    |browseable=no|Share tidak muncul secara umum, hanya tampil saat user login
    |read only=no|User dapat upload/edit file
    |0700|Hanya owner yang memiliki akses penuh


    Simpan, lalu restart Samba:

    ```
    sudo systemctl restart smbd

    ```

    Gunakan username yang sama dengan username login Linux untuk samba, tetapi tambahkan password untuk samba nya:

    ```
    sudo smbpasswd -a [username]

    ```

    Untuk mengaktifkannya:

    ```
    sudo smbpasswd -e [username]
