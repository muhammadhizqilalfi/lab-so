## Disk & Filesystem
---

Sistem berkas (filesystem) di Linux mengatur bagaimana data disimpan dan diakses di dalam media penyimpanan.
Sebagai administrator, pemahaman mengenai disk, partisi, dan filesystem sangat penting untuk tugas seperti:
- Melihat dan memantau penggunaan disk

- Membuat, menghapus, atau memformat partisi

- Melakukan mounting filesystem

- Memeriksa integritas sistem berkas

- Mengelola storage device seperti flashdisk, HDD, SSD, atau drive virtual

Beberapa utilitas umum yang digunakan:

- ``lsblk``, ``blkid`` — menampilkan informasi block device

- ``fdisk``, ``parted`` — membuat atau mengedit partisi

- ``mkfs`` — memformat partisi

- ``mount``, ``umount`` — mengaitkan filesystem ke direktori

- ``df``, ``du`` — melihat penggunaan ruang disk

- ``fsck`` — memeriksa dan memperbaiki filesystem

#### Command Disk & Filesystem
---

1. Melihat Informasi Disk dan Partisi
    
    a. Melihat Struktur Disk
    
    ```
    lsblk
    
    ```

    Menampilkan daftar block device (disk, partisi, LVM).

    Opsi penting:

    - ``-f`` : Menampilkan tipe filesystem dan UUID

    - ``-o NAME,SIZE,TYPE,MOUNTPOINT`` : Menentukan kolom yang ingin ditampilkan

    Contoh:

    ```
    lsblk -f

    ```

    b. Melihat Label dan UUID

    ```
    blkid

    ```

    Menampilkan informasi detail seperti UUID, TYPE, dan LABEL setiap partisi.

---

2. Melihat Penggunaan Disk
    
    a. Melihat Penggunaan Disk per Filesystem
    
    ```
    df -h

    ```

    Menampilkan ruang disk yang digunakan dan tersisa pada setiap mount point.

    Opsi:

    - ``-h`` : Human-readable (GB, MB)

    - ``-T`` : Tampilkan tipe filesystem

    - ``-i`` : Tampilkan penggunaan inode

    Contoh:

    ```
    df -hT

    ```

    b. Melihat Ukuran Folder

    ```
    du -sh /home

    ```

    Opsi:

    - ``-s`` : Summary (total)

    - ``-h`` : Human-readable

    - ``--max-depth=1`` : Menampilkan per direktori satu level

    Contoh:

    ```
    du -h --max-depth=1 /var
    
    ```

---

3. Membuat dan Mengelola Partisi

    a. Membuka Utilitas Partisi
    
    ```
    sudo fdisk /dev/sda

    ```

    Masuk ke mode interaktif untuk mengelola partisi.

    Perintah dasar dalam fdisk:

    |Perintah|	Fungsi|
    |--------|--------|
    |``m``|	Bantuan
    |``p``|	Tampilkan tabel partisi
    |``n``|	Buat partisi baru
    |``d``|	Hapus partisi
    |``w``|	Simpan perubahan
    |``q``|	Keluar tanpa menyimpan
    
    b. Menggunakan ``parted`` (GUI teks interaktif)
    
    ```
    sudo parted /dev/sdb

    ```

    Opsi penting:

    - ``mklabel gpt`` — Membuat tabel partisi GPT

    - ``mkpart primary ext4 1MiB 100%`` — Membuat partisi ext4 penuh

    - ``print`` — Menampilkan partisi yang ada

---

4. Membuat Filesystem (Format Partisi)

    a. Membuat Filesystem Ext4
    ```
    sudo mkfs.ext4 /dev/sdb1
    
    ```

    b. Membuat Filesystem XFS
    ```
    sudo mkfs.xfs /dev/sdb1
    
    ```

    c. Membuat Filesystem FAT32 (misalnya untuk flashdisk)
    ```
    sudo mkfs.vfat -F 32 /dev/sdb1
    
    ```

---

5. Mount dan Unmount Filesystem

    a. Mount Manual
    ```
    sudo mount /dev/sdb1 /mnt
    
    ```
    Mengaitkan /dev/sdb1 ke direktori /mnt.

    b. Unmount
    ```sudo umount /mnt```

    c. Mount Otomatis via ``/etc/fstab``

    Edit file ``/etc/fstab``:

    ```
    UUID=xxxx-xxxx  /mnt/data  ext4  defaults  0  2

    ```

    Kemudian jalankan:

    ```
    sudo mount -a
    
    ```

    Untuk memuat ulang semua mount point.

    Opsi umum di fstab:

    |Opsi|	Fungsi|
    |-------|------------|
    |``defaults``|	Opsi standar (rw, suid, exec, auto, nouser, async)
    |``noauto``|	Tidak otomatis dimount
    |``ro`` / ``rw``|	Read-only / Read-write
    |``user``|	Izinkan user biasa melakukan mount

---

6. Memeriksa dan Memperbaiki Filesystem

    a. Mengecek Filesystem
    ```
    sudo fsck /dev/sdb1

    ```

    Opsi:

    - ``-A`` : Periksa semua filesystem

    - ``-r`` : Mode interaktif (tanya sebelum perbaikan)

    - ``-y`` : Jawab “yes” otomatis untuk semua perbaikan

    b. Menonaktifkan Mount Sebelum Cek
    
    ```
    sudo umount /dev/sdb1
    sudo fsck -fy /dev/sdb1
    ```

---

7. Swap Area (Virtual Memory)

    Swap adalah ruang pada disk yang digunakan sebagai cadangan RAM.

    a. Membuat File Swap
    ```
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    ```

    b. Mengecek Swap Aktif
    ```
    swapon --show
    
    ```

    c. Menonaktifkan Swap
    ```
    sudo swapoff /swapfile
    
    ```

---

8. Disk Monitoring dan Analisis
    
    a. Melihat Statistik Disk IO
    ```
    iostat -x 2 5
    
    ```
    Menampilkan statistik I/O setiap 2 detik sebanyak 5 kali.

    Opsi:

    - ``-x`` : Extended output

    - ``-d`` : Hanya tampilkan device

    b. Memeriksa Kesehatan Disk (SMART)
    ```
    sudo smartctl -a /dev/sda
    
    ```

    Opsi:

    - ``-a`` : Semua informasi SMART

    - ``-H`` : Status kesehatan singkat

    - ``-t short`` : Jalankan tes cepat

---

9. LVM (Logical Volume Management) (Opsional – Advanced)

    LVM memungkinkan pengelolaan storage lebih fleksibel daripada partisi biasa.

    a. Membuat Volume Group & Logical Volume
    
    ```
    sudo pvcreate /dev/sdb1
    sudo vgcreate vgdata /dev/sdb1
    sudo lvcreate -L 10G -n lvbackup vgdata
    sudo mkfs.ext4 /dev/vgdata/lvbackup
    
    ```

    b. Mount Volume
    ```
    sudo mount /dev/vgdata/lvbackup /mnt/backup
    
    ```

    c. Mengecek Volume
    ```
    sudo lvdisplay
    sudo vgdisplay
    sudo pvdisplay
    
    ```

10. Studi Kasus: Menambahkan Disk Baru ke Server

    a. Cek disk baru

    ```
    lsblk
    
    ```


    b. Buat partisi

    ```
    sudo fdisk /dev/sdb
    
    ```

    c. Format dengan ext4
    ```
    sudo mkfs.ext4 /dev/sdb1
    
    ```

    d. Mount ke direktori

    ```
    sudo mkdir /data
    sudo mount /dev/sdb1 /data
    ```

    e. Tambahkan ke fstab

    ```
    UUID=$(blkid -s UUID -o value /dev/sdb1)
    echo "UUID=$UUID /data ext4 defaults 0 2" | sudo tee -a /etc/fstab
    ```

