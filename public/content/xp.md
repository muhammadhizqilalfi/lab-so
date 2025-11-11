## Instalasi Windows XP
---

#### Pra-Instalasi
___

Sebelum melakukan instalasi maka pastikan terlebih dahulu kalian telah mempunyai:

1. Software Virtualisasi - VirtualBox/VMware (Sudah Terinstall)

2. ISO file Windows XP

Kedua bahan dan alat tersebut bisa ditemukan di tab Tools

Jika semua sudah siap, kita bisa lanjutkan ke proses intalasi.

#### Intalasi
___

Langkah-langkah:

1. Klik "Baru" atau "New" pada dashboard di VirtualBox.

![1](/assets/XP1.png)

2. Pada bagian ini, isi VM Name menjadi nama kalian + xp, contoh: "alfi-xp". Untuk VM Folder bisa kalian sesuaikan dimana ingin menaruhnya. Untuk ISO Image, pilih dimana kalian menaruh file Windows XP. Matikan checklist pada "Proceed with Unattended Installation".

![2](/assets/XP2.png)

3. Pada bagian "Specify virtual hardware" berikan 256 MB untuk Base Memory dan 1 CPU untuk Number of CPUs. Jangan Check pada Use EFI. 

![3](/assets/XP3.png)

4. Pada bagian "virtual hard disk" berikan 10 GB untuk penyimpanan dari VM-nya.

![4](/assets/XP4.png)

5. Ketika muncul tampilan seperti ini pada layar, tekan "ENTER" untuk melanjutkan.

![5](/assets/XP5.png)

6. Tekan "F8" untuk menyutujui Licensing Agreement dari Microsoft.

![6](/assets/XP6.png)

7. Pada tampilan ini pilih "Unpartitioned space", lalu tekan "ENTER". Space tersebut berasal dari ukuran virtual hard disk yang kita definisikan di awal

INGPO LEKK!!: Virtual hard disk bekerja layaknya penyimpanan fisik pada umumnya seperti di laptop kalian masing-masing, yang membedakan ialah Virtual hard disk tidak memiliki bentuk fisik. Selain itu, virtual hard disk tidak akan mengganggu penyimpanan lokal pada Laptop kalian, karena memiliki format yang berbeda.

![7](/assets/XP7.png)

8. Pada bagian ini, pilih "Format the partition using the NTFS file system (Quick)". Gunakan arrow key pada keyboard untuk berpindah, lalu "ENTER"

INGPO LEKK!!: Sistem operasi Microsoft menggunakan format NTFS sebagai format file system, sedangkan Linux menggunakan EXT4 (sebelumnya EXT3 dan EXT2) dan MacOS menggunakan APFS. 

![8](/assets/XP8.png)

9. Tunggu setup melakukan format pada hard disk.

![9](/assets/XP9.png)

10. Tunggu VM (Virtual Machine) booting ke dalam Windows XP

![10](/assets/XP10.png)

11. Bagian ini adalah untuk memilih Standard Format pada OS dan juga Text Input yang digunakan. 

![11](/assets/XP11.png)

Pilh format "Indonesia" untuk Standard Format dan Location, Lalu "Apply" dan "OK".

![12](/assets/XP12.png)

Pilih "Indonesian - US" untuk Text Input yang akan digunkan, lalu "Apply" dan "OK".

![13](/assets/XP13.png)

Setelah selesai, maka tekan "Next".

![14](/assets/XP14.png)

12. Isi bagian "Name" dengan nama kalian + xp. Contoh: "alfi-xp".

![15](/assets/XP15.png)

13. Untuk License key, isi kode ini
```CM3HY    26VYW   6JRYC   X66GX   JVY2d```

![16](/assets/XP16.png)

14. Untuk bagian ini, tidak ada yang perlu diubah, tekan "NEXT".

INGPO LEKK!: Computer name digunakan sebagai ID PC atau Laptop, biasanya bisa dilihat ketika membuka CMD.

![17](/assets/XP17.png)

15. Pada bagian Time Zone, pilih zona waktu Indonesia (Jakarta). Lalu "NEXT".

![18](/assets/XP18.png)

16. Tidak ada yang harus diubah disini, kalian bisa langsung "NEXT". Tapi, jika kalian pilih Custom, maka kalian harus melakukan konfigurasi manual untuk IP dan DNS dari PC. 

![19](/assets/XP19.png)

17. Sama seperti sebelumnya, disini bisa langsung "NEXT" saja.

![20](/assets/XP20.png)

18. Tunggu proses reboot, dan klik "OK".

![21](/assets/XP21.png)

19. Klik "OK" lagi disini, agar OS bisa menyesuaikan resolusi dari layar.

![22](/assets/XP22.png)

20. Tekan "NEXT" disini.

![23](/assets/XP23.png)

21. Disini, pilih "Not Right Now". Ini adalah konfigurasi pada FIrewall dan juga Windows Defender pada Windows XP. (Ya, Tampilannya jadul)

![24](/assets/XP24.png)

22. Kalian bisa "SKIP" saja disini, karena kita tidak akan menyambungkan VM ini ke internet.

![25](/assets/XP25.png)

23. Pilih "No" untuk registrasi akun Microsoft. Lalu "NEXT".

![26](/assets/XP26.png)

24. Disini, isi nama kalian + xp. Lalu "NEXT".

![27](/assets/XP27.png)

25. Terakhir, tekan "FINISH" untuk menyelesaikan setup awal Windows XP.

![28](/assets/XP28.png)

26. Tunggu proses reboot selesai. Selamat kalian sudah berhasil melakukan install Windows XP. 👏

![29](/assets/XP29.png)


Proses instalasi Windows sejak Windows 98 sampai Windows 11 mirip. perbedaan nya hanya di penyederhanaan proses setup dan juga UI yang lebih modern. Jadi, kalau kalian mengerti proses instalasi pada Windows XP, maka kalian juga akan mengerti proses instalasi versi-versi Windows Lainnya.


Selanjutnya kita akan mulai bermain-main dengan Linux. 😎