## Lanjutan : Process & Service
___

Dalam sistem operasi Linux, proses (process) adalah program yang sedang berjalan.
Setiap perintah yang kamu jalankan — dari **ls** hingga **nginx** — sebenarnya adalah proses.

Sedangkan service (atau daemon) adalah proses yang berjalan di background dan biasanya dimulai secara otomatis saat sistem booting, misalnya:
- ``sshd`` - Untuk koneksi SSH

- ``nginx`` - Untuk web server

- ``cron`` - Untuk penjadwalan tugas

Manajemen process & service penting untuk:

- Mendeteksi proses berat yang membebani CPU atau RAM

- Menghentikan aplikasi yang crash

- Mengatur prioritas proses

- Mengelola startup service dengan ``systemctl``



#### Command Process & Service
---
1. Manajemen Process
    
    - Menampilkan Process yang Sedang Berjalan
        
        - **ps** (Process Status)
        
            Menampilkan daftar proses saat ini.

            ```
            ps aux
            ```

            Opsi :

            **a** - Menampilkan proses semua user

            **u** - Format user-oriented (menampilkan user pemilik proses)

            **x** - Termasuk proses tanpa terminal (daemon)

            Contoh lanjutan: 

            ```
            ps -eo pid,ppid,user,comm,%cpu,%mem --sort=-%cpu | head
            ``` 

            Menampilkan proses yang memakai CPU tertinggi

        ---

        - **top**

            Menampilkan proses secara real-time.

            ```
            top
            ```

            Navigasi:
            
            **q** - keluar
            
            **k** - hentikan process
            
            **P** - urut berdasarkan CPU
             
            **M** - urut berdasarkan Memory

            Alternatif:

            **htop** atau **bashtop** (Lebih interaktif)

            ```
            sudo apt install htop
            htop
            ```
            atau
            ```
            sudo apt install bashtop
            bashtop
            ```

    ---

    - Mencari Process Tertentu

        - **pgrep**

            ```
            pgrep nginx
            ```

            Menampilkan PID process bernama "nginx".

        - **pidof**

            ```
            pidof sshd
            ```

            Menampilkan PID dari service tertentu.

    ---

    - Menghentikan/Mengontrol Process

        - **kill**

            ```
            kill 1234
            ```

            Mengirim sinyal **SIGTERM** (default) ke process
            
            ```
            kill -9 1234
            ```

            Memaksa menghentikan process (SIGKILL) tanpa bisa ditolak.

            ```
            sudo killall firefox
            ```

            Menghentikan semua process bernama firefox.

    ---

    - Menjalankan Proses di Background

        - **&**

            ```
            ./script.sh &
            ```

            Menjalankan program di background

        - **jobs**
        
            ```
            jobs
            ```

            Menampilkan daftar process di background

        - **fg/bg** (foreground & background)

            Command:
            
            ``fg %1``
            
            kembalikan process ke foreground
            
            ``bg %1``
            
            lanjutkan process di background



        - **nohup**

            ```
            nohup ./backup.sh > output.log 2>&1 &
            ```

            Menjalankan process agar tetap berjalan walau user logout

    ---

    - Prioritas Process

        - **nice**

            Menjalankan process dengan prioritas tertentu.

            ```
            nice -n 10 ./task.sh
            ```

            Nilai **nice**:

            **-20** - prioritas tertinggi
        
            **+19** - prioritas terendah

        - **renice**

            Mengubah prioritas proses yang sudah berjalan.

            ```
            sudo renice -n -5 -p 1234
            ``` 

            PID 1234 dinaikkkan prioritasnya.

---

2. Manajemen Service

    - Melihat Status Service

        ```
        systemctl status nginx
        ```

        Menampilkan status detail service nginx.

    ---

    - Menjalankan dan Menghentikan Service

        Menjalankan service sekarang

        ```
        sudo systemctl start nginx
        ```

        Menghentikan service

        ```
        sudo systemctl stop nginx
        ```

        Restart service

        ```
        sudo systemctl restart nginx
        ```

        Reload konfigurasi tanpa menghentikan process

        ```
        sudo systemctl reload nginx
        ```

        Aktifkan saat boot

        ```
        sudo systemctl enable nginx
        ```

        Nonaktifkan saat boot

        ```
        sudo systemctl disable nginx
        ```

    ---

    - Melihat Semua Service Aktif

        ```
        systemctl list-units --type=service --state=running
        ```

        Menampilkan semua service aktif.

        Opsi tambahan: 

        **--type=service** - Filter hanya unit berjenis service

        **--state=failed** - Tampilkan service yang gagal

        **--all** - Tampilkan semua termasuk inactive

    ---

    - Mengecek Log Service

        ```
        journalctl -u nginx.service
        ```    

        Opsi: 

        **-e** - Langsung ke bagian log terbaru
        
        **-f** - Tampilkan log secara real-time (seperti tail -f)
        
        **-r** - Urutkan dari log terbaru
        
        **-u** - Filter berdasarkan nama service

        Contoh: 

        ```
        journalctl -xeu ssh
        ```

        Menampilkan log error SSH dengan detail tambahan (**-x** = explain).

    ---

    - Mengatur Target (Mode Operasi)

        Systemd memiliki konsep target, mirip “runlevel” di sistem lama.
        
        Target:

        **graphical.target** - Mode GUI penuh

        **multi-user.target** - Mode server (tanpa GUI)

        **rescue.target** - Mode pemulihan
        
        **emergency.target** - Mode pemulihan ekstrem

        Command:

        ```
        sudo systemctl isolate multi-user.target
        ```

        Pindah ke mode tanpa GUI.

    ---

    - Membuat Service Sendiri

        Path file : **/etc/systemd/system/backup.service**

        ```
        [Unit]
        Description=Backup Otomatis

        [Service]
        ExecStart=/usr/local/bin/backup.sh
        Restart=on-failure

        [Install]
        WantedBy=multi-user.target
        ```

        Command aktivasi:

        ```
        sudo systemctl daemon-reload
        sudo systemctl enable --now backup.service
        ```

    ---

    - Menghapus/Nonaktifkan Service

        ```
        sudo systemctl disable --now backup.service
        sudo rm /etc/systemd/system/backup.service
        sudo systemctl daemon-reload
        ```

---

3. Monitoring Process & Service Secara Real-time

    - Menampilkan konsumsi CPU/memory per group (cgroup)

        ```
        systemd-cgtop
        ```

    - Menampilkan waktu booting setiap service (untuk optimasi startup)

        ```
        systemd-analyze blame
        ```