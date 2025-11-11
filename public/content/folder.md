## Struktur Folder di Linux
---

![file](https://linuxhandbook.com/content/images/2020/06/linux-directory-structure-1.png)

Linux menggunakan sistem **hierarki tunggal** yang dimulai dari **root directory** (/). Semua file dan folder berada di bawah /, termasuk perangkat keras yang dikenali sistem.
___


Folder Utama di Linux

- / → **Root directory**, induk dari semua direktori.
- /home → Menyimpan folder pribadi masing-masing user. Contoh: **/home/mahasiswa**
- /root → Home directory khusus untuk user root (administrator).
- /bin → Program dasar (*binary*) yang dibutuhkan untuk menjalankan sistem (contoh: **ls**, **cp**, **mv**).
- /sbin → Program sistem/admin (contoh: **shutdown**, **mount**).
- /usr → Program & library tambahan untuk user (misalnya aplikasi yang diinstal).
- /usr/bin → Program aplikasi yang bisa dipakai user biasa.
- /usr/sbin → Program khusus untuk administrator.
* /etc → File konfigurasi sistem (contoh: **/etc/passwd**, **/etc/hosts**).
- /var → Data yang sering berubah, misalnya log (**/var/log**) atau mail.
- /tmp → File sementara, biasanya otomatis dihapus setelah restart.
- /lib → Library dasar (mirip seperti DLL di Windows) untuk menjalankan program.
- /mnt dan /media → Tempat *mounting* media eksternal (flashdisk, CD/DVD).
- /opt → Aplikasi tambahan yang diinstal secara manual.
- /dev → Representasi perangkat keras sebagai file (contoh: **/dev/sda** untuk harddisk).
- /proc dan /sys → Informasi tentang kernel & proses yang sedang berjalan (virtual filesystem).

---

Intinya:

* Semua berawal dari **/**.
* **User biasa** bekerja di **/home/<username>**.
* **Administrator/root** bekerja di **/root**.
* **Konfigurasi sistem** ada di **/etc**.
* **Program/aplikasi** ada di **/bin**, **/sbin**, **/usr/bin**, **/usr/sbin**.

---