## Lanjutan : Network
___

Linux memiliki sistem jaringan yang sangat fleksibel dan dapat dikonfigurasi sepenuhnya melalui Command Line Interface (CLI).
Administrator sistem menggunakan perintah jaringan untuk:

- Mengecek konektivitas antar host.

- Mengatur alamat IP (statis/dinamis).

- Mengecek port dan service yang aktif.

- Melakukan remote management menggunakan SSH.

Beberapa utilitas utama:

- **ip**, **ifconfig** — konfigurasi IP dan interface.

- **ping**, **traceroute** — tes koneksi.

- **netstat**, **ss**, **lsof** — monitoring koneksi dan port.

- **scp**, **rsync**, **ssh** — transfer dan manajemen remote.


#### Command Network
---

1. Melihat & Mengonfigurasi Interface Jaringan

    - Melihat Interface (**ip**)

        ```
        ip a
        ```

        Opsi:

        **addr** Menampilkan alamat IP semua interface
        
        **link** Menampilkan status interface (UP/DOWN, MAC address)
        
        **route** - Menampilkan routing table

        Contoh:

        ```
        ip link show
        ip addr show eth0
        ```

    ---

    - Menetapkan IP Manual

        ```
        sudo ip addr add 192.168.1.10/24 dev eth0
        ```
        
        Menetaplan alamat IP **192.168.1.10** ke interface **eth0**

    ---

    - Menghapus IP

        ```
        sudo ip addr del 192.168.1.10/24 dev eth0
        ```

    ---

    - Mengaktifkan/Menonaktifkan Interface

        ```
        sudo ip link set eth0 up
        sudo ip link set eth0 down
        ```

    ---

    - Menambahkan Default Gateway

        ```
        sudo ip route add default via 192.168.1.1
        ```

        Mengatur route/gateway utama sistem.

---

3. Mengecek Konektivitas dan DNS

    - Test konektivitas ke host lain (**ping**)

        ```
        ping 8.8.8.8
        ping google.com
        ```

        Opsi:

        **-c 4** - Kirim hanya 4 paket

        **-i 2** - Interval 2 detik antar paket

        **-s 1000** - Ukuran paket 1000 byte

        Contoh:

        ```
        ping -c 4 google.com
        ```

    ---

    - Menelusuri jalur paket dari komputer ke tujuan (**traceroute**)

        ```
        traceroute google.com
        ```

        Menunjukkan setiap hop yang dilalui paket

    ---

    - Cek DNS record domain (**nslookup** atau **dig**)

        ```
        nslookup google.com
        dig google.com +short
        ```

        **dig** lebih lengkap, bisa menampilkan A,MX,TXT,dsb.

---

4. Mengecek Port & Service

    - Menampilkan statistik jaringan (**netstat**)

        ```
        netstat -tuln
        ```

    ---

    - **ss** - Modern replacement untuk netstat

        ```
        ss -tuln
        ```

        Opsi: 

        **-t** - TCP connections
        
        **-u** - UDP connections
        
        **-l** - Listening sockets
        
        **-n** - Tampilkan port numerik (tanpa resolusi nama)
        
        **-p** - Tampilkan proses pemilik port

        Contoh:

        ```
        sudo ss -tulpn
        ```

        Menampilkan semua port aktif beserta nama service dan PID.

    ---

    - Melihat file/socket yang dibuka oleh proses (**lsof**)

        ```
        sudo lsof -i :22
        ```

        Menampilkan proses yang memakai port 22

---

5. Transfer File

    - Menyalin berkas antar komputer (**scp**)

        ```
        scp file.txt user@192.168.1.5:/home/user/
        ```

        Opsi:

        **-r** - Rekursif (untuk folder)
        
        **-P** - Tentukan port SSH
        
        **-C** - Kompresi data saat transfer
    
        Contoh:

        ```
        scp -r /var/www/ user@server:/backup/
        ```

    ---

    - Sinkronisasi File yang Efisien (**rsync**)

        ```
        rsync -avz /data/ user@192.168.1.5:/backup/
        ```

        Opsi:

        **-a** - Archive mode (izin, symlink, dll ikut disalin)
        
        **-v** - Verbose
        
        **-z** - Kompresi saat transfer
        
        **--delete** - Hapus file di tujuan yang sudah dihapus di sumber

        **rsync** jauh lebih efisien daripada **scp** untuk backup rutin.

---

6. SSH (Secure Shell)

    SSH memungkinkan login dan administrasi server dari jarak jauh secara aman (terenkripsi).

    - Mengakses Server

        ```
        ssh user@192.168.1.10
        ```

        Opsi: 

        **-p** - Port SSH selain default (22)
        
        **-v** - Verbose mode (debug koneksi)
        
        **-i** - Gunakan private key tertentu

        Contoh:

        ```
        ssh -p 2222 -i ~/.ssh/id_rsa user@server
        ```

    ---

    - Menjalankan Perintah Langsung

        ```
        ssh user@192.168.1.10 "uptime"
        ```

        Jalankan **uptime** di remote server tanpa login interaktif.

    ---

    - Menggunakan SSH Key (tanpa password)

        1. Buat key:
        
        ```
        ssh-keygen -t rsa -b 4096 -C "user@example.com"
        ```

        2. Salin ke server:

        ```
        ssh-copy-id user@192.168.1.10
        ```

        3. Uji koneksi:

        ```
        ssh user@192.168.1.10
        ```

    ---

    - Mengelola Service SSH

        Cek, aktifkan, matikan:

        ```
        sudo systemctl status ssh
        sudo systemctl start ssh
        sudo systemctl enable ssh
        ```

        Konfigurasi file: **/etc/ssh/sshd_config**


        Parameter:

        - **Port 22** - Ubah port SSH
        
        - **PermitRootLogin no** - Menonaktifkan login root langsung
        
        - **PasswordAuthentication no** - Wajib gunakan key, lebih aman

        Restart setelah mengubah config:

        ```
        sudo systemctl restart ssh
        ```

        