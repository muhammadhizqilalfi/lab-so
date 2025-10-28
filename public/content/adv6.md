## Shell Scripting
---

Shell scripting merupakan salah satu kemampuan dasar yang sangat penting bagi seorang administrator Linux.
Dengan shell script, berbagai tugas seperti backup otomatis, monitoring sistem, dan pengaturan layanan dapat dilakukan tanpa intervensi manual.

Shell script berisi sekumpulan perintah yang dieksekusi secara berurutan oleh shell (biasanya bash).
File script biasanya memiliki ekstensi .sh dan dijalankan langsung dari terminal.

Beberapa fungsi utama shell scripting:

- Mengotomatisasi tugas berulang (backup, update, logging)

- Menyusun logika eksekusi (kondisi, loop)

- Mengelola file dan sistem dengan efisien

- Membangun utilitas kustom atau mini-tools


#### Command Shell Scripting
---

1. Struktur Dasar Shell Script

    Setiap script dimulai dengan shebang yang menunjukkan shell interpreter.

    ```
    #!/bin/bash
    ```

    Contoh script sederhana

    ```
    #!/bin/bash
    echo "Hello World!"
    ```

    Jalankan dengan:

    ```
    chmod +x script.sh
    ./script.sh
    ```
---

2. Variabel dan Input

    Membuat Variabel

    ```bash
    nama="Linux"
    umur=30
    echo "Halo $nama, umurmu $umur tahun."
    ```
    > Tidak boleh ada spasi di sekitar tanda ```=```

    Membaca Input dari User

    ```bash
    read -p "Masukkan nama Anda: " nama
    echo "Selamat datang, $nama!"
    ```

    Opsi ```read```:

    - -p : Menampilkan Prompt

    - -s : Input tersembunyi (misal password)

    - -n : Membatasi jumlah karakter

---

3. Operator dan Aritmatika

    Shell mendukung operasi matematika dasar menggunakan ```$(())```.

    ```
    a=10
    b=5
    echo $((a + b))
    echo $((a * b))
    ```

    Atau menggunakan ```expr```:

    ```
    expr $a - $b
    
    ```

---

4. Kondisi (if, elif, else)

    Menentukan alur logika berdasarkan kondisi tertentu.

    ```
    #!/bin/bash
    read -p "Masukkan angka: " num
    if [ $num -gt 10 ]; then
        echo "Lebih besar dari 10"
    elif [ $num -eq 10 ]; then
        echo "Sama dengan 10"
    else
        echo "Lebih kecil dari 10"
    fi
    ```

    Operator Umum:
    | Operator| Arti |
    |:--------------:|:------|
    | ```-eq```|Sama dengan|
    |```-ne```|	Tidak sama dengan
    |``-gt``|	Lebih besar dari
    |``-lt``|	Lebih kecil dari
    |``-ge``|	Lebih besar/sama dengan
    |``-le``|	Lebih kecil/sama dengan

---

5. Perulangan (Loop)

    For Loop

    ```
    for i in {1..5}
    do
    echo "Iterasi ke-$i"
    done`
    ```

    While Loop

    ```
    count=1
    while [ $count -le 5 ]
    do
    echo "Hitung ke-$count"
    ((count++))
    done
    ```

    Until Loop

    ```
    num=1
    until [ $num -gt 3 ]
    do
    echo "Nomor $num"
    ((num++))
    done
    ```

---

6. Fungsi dalam Shell

    Membuat blok perintah yang dapat dipanggil berulang kali.

    ```
    #!/bin/bash
    greet() {
    echo "Selamat datang, $1!"
    }

    greet "Admin"
    ```

    Contoh fungsi dengan hasil perhitungan:

    ```
    penjumlahan() {
    echo $(($1 + $2))
    }

    hasil=$(penjumlahan 10 20)
    echo "Hasil: $hasil"
    ```

---

7. Struktur dan Flow Kontrol Tambahan
    
    Case Statement

    Alternatif lebih sederhana daripada banyak ``if``.

    ```
    #!/bin/bash
    read -p "Pilih menu [start|stop|restart]: " action

    case $action in
    start)
        echo "Service dimulai..."
        ;;
    stop)
        echo "Service dihentikan..."
        ;;
    restart)
        echo "Service direstart..."
        ;;
    *)
        echo "Pilihan tidak dikenal!"
        ;;
    esac
    ```

---

8. File dan Direktori

    Mengecek File atau Folder

    ```
    if [ -f "data.txt" ]; then
    echo "File ada"
    fi

    if [ -d "/home/user" ]; then
    echo "Direktori ditemukan"
    fi
    ```

    Menulis dan Menambahkan ke File

    ```
    echo "Isi baru" > file.txt     # Menimpa file
    echo "Tambahan" >> file.txt    # Menambah ke akhir file
    ```

---

9. Menjalankan Command di Script

    ```
    #!/bin/bash
    echo "Tanggal hari ini: $(date)"
    echo "User aktif:"
    who
    ```

---

10. Debugging dan Eksekusi Aman

    Mode Debug

    ```
    bash -x script.sh

    ```

    Menampilkan semua perintah yang dieksekusi.

    Opsi Penting Bash
    
    | Opsi| Fungsi |
    |:--------------:|:------|
    | ``-x``|Debug mode|
    |``-n``|Cek sintaks tanpa eksekusi
    |``-v``|Tampilkan perintah sebelum dijalankan
    |``set -e``|Hentikan script saat error
    |``set -u``|Error jika variabel belum dideklarasi

---

11. Scheduling dan Automasi

    Shell script sering digabungkan dengan cron untuk otomatisasi tugas seperti backup dan monitoring.

    Membuat Script Backup

    ```
    #!/bin/bash
    SOURCE="/home/user/data"
    TARGET="/backup/data_$(date +%F).tar.gz"

    echo "Membuat backup..."
    tar -czf $TARGET $SOURCE
    echo "Backup selesai: $TARGET"

    Menjadwalkan Otomatis dengan Crontab
    crontab -e
    ```

    Tambahkan baris:

    ```
    0 2 * * * /home/user/backup.sh

    ```

    Artinya: Jalankan setiap hari pukul 02:00 pagi.

---

12. Studi Kasus

    Script Monitoring Service

    ```
    #!/bin/bash
    SERVICE="nginx"

    if systemctl is-active --quiet $SERVICE; then
    echo "$SERVICE aktif"
    else
    echo "$SERVICE mati, mencoba menyalakan..."
    sudo systemctl start $SERVICE
    fi
    ```

---

13. Shortcut dan Separator di Shell

    |Simbol|	Fungsi|
    |----------|----------|
    |;|	Jalankan beberapa command berurutan
    |&&|	Jalankan perintah berikutnya jika sebelumnya sukses

    Contoh:

    ```
    mkdir data; cd data && echo "Masuk ke folder data" || echo "Gagal masuk"

    ```