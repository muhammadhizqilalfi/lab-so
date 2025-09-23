## Lanjutan : Manajemen Folder & File
---

Setelah memahami perintah dasar Linux, kita bisa melangkah ke level lanjutan.
Di tahap ini, kita belajar cara mengelola banyak file sekaligus, mengalihkan input/output, membuat link, melakukan kompresi/arsip memahami mounting storage, hingga membuat function di shell.
Materi ini penting untuk administrasi sistem karena hampir semua pekerjaan server melibatkan manipulasi file.

Berikut adalah command dan optionnya :
___

1. Wildcard (Pattern Matching)

Digunakan untuk mencocokkan nama file/folder secara fleksibel.

- '*' → mencocokkan banyak karakter.

  ```bash
  ls *.txt   # tampilkan semua file berakhiran .txt
  ```
- **?** → mencocokkan tepat 1 karakter.

  ```bash
  ls file?.txt   # cocok: file1.txt, fileA.txt
  ```
- **[ ]** → mencocokkan karakter dalam range.

  ```bash
  ls file[1-3].txt   # cocok: file1.txt, file2.txt, file3.txt
  ```

---

2. Redirection & Pipe

Digunakan untuk mengatur **output** dan **input** perintah.

- **>** → alihkan output ke file (overwrite).
- **>>** → alihkan output ke file (append).
- **<** → ambil input dari file.
- **|** → pipe, kirim output ke perintah lain.
- **2>** → alihkan error.
- **&>** → alihkan output + error.
- **tee** → tampilkan output dan simpan ke file.

Contoh:

```bash
ls /etc > daftar.txt       # simpan hasil ke file
cat daftar.txt | less      # tampilkan per halaman
ls /notfound 2> error.log  # simpan error ke file
```

---

3. Operator Eksekusi Command

- **;** → jalankan perintah berurutan tanpa peduli sukses/gagal.

  ```bash**
  mkdir test; cd test; touch a.txt
  ```
- **&&** → jalankan perintah berikutnya hanya jika sebelumnya **berhasil**.

  ```bash
  cd test && echo "Berhasil masuk"
  ```
- **||** → jalankan perintah berikutnya hanya jika sebelumnya **gagal**.

  ```bash
  cd tidakada || echo "Folder tidak ditemukan"
  ```

---

4. Link

Command : **ln**

- Hard Link: salinan referensi data.

  ```bash
  ln file1 file2
  ```
- Symbolic Link (shortcut):

  ```bash
  ln -s file1 linkfile
  ```

---

5. Archive & Kompresi

* Buat arsip 
`tar -cvf arsip.tar file1 file2`
* Ekstrak arsio
`tar -xvf arsip.tar`
* Buat arsip + gzip 
`tar -czvf arsip.tar.gz folder/`
* Compress ke zip 
`zip arsip.zip file1 file2`
* Ekstrak zip
`unzip arsip.zip`

Note (option):
- **-c** create, 
- **-x** extract, 
- **-v** verbose, 
- **-f** file, 
- **-z** gzip, 
- **-j** bzip2, 
- **-J** xz.

---

6. Disk Usage & Metadata

* Melihat ukuran total folder.
`du -sh folder/` → ukuran total folder.
* Melihat ukuran tiap subfolder.
`du -h --max-depth=1` → lihat ukuran tiap subfolder.
* Metadata detail (size, inode, permission, timestamp).
`stat file` 
* Atribut file.
`lsattr file`
* Buat file immutable (tidak bisa dihapus).
`chattr +i file` 

---

7. Mount & Umount

- Mount (pasang) storage ke folder
`mount /dev/sdb1 /mnt`
- Lepas Storage/device 
`umount /mnt`

---

8. Fungsi (Function) di Shell

Fungsi adalah kumpulan perintah yang bisa dipanggil dengan satu nama.

Fungsi sederhana:

```bash
halo() {
  echo "Halo, $1!"
}
```

Jalankan:

```bash
halo Dunia
```

Output → **Halo, Dunia!**

Fungsi dengan beberapa perintah:

```bash
info_sistem() {
  echo "Tanggal:"
  date
  echo "User:"
  whoami
  echo "Uptime:"
  uptime
}
```

Fungsi dengan argumen:

```bash
tambah() {
  echo "Hasil: $(($1 + $2))"
}
```

Jalankan:

```bash
tambah 5 7
```

Output → Hasil: **12**
