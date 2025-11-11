## IP Static
___

Server biasanya membutuhkan alamat IP yang tetap (tidak berubah), agar dapat diakses oleh client lain secara konsisten.
Tanpa IP static, alamat dapat berubah setiap restart jika menggunakan DHCP.

Tujuan penggunaan IP static:

- Server HTTP/FTP/SSH mudah diakses

- Stabil untuk routing, firewall, port forwarding

- Diperlukan untuk produksi dan lingkungan lab

#### Konfigurasi IP Static pada VirtualBox
---

1. Menambah Network Adapter pada VirtualBox

    Pada VirtualBox buka menu **Settings** -> **Network**

    Klik pada **Adapter 2**, dan ikuti konfigurasi seperti pada gambar dibawah ini:

    ![vboxadp2](/assets/vbadp2.png)

    |Parameter|Fungsi|
    |----|----|
    |Enable Network Adapter|True
    |Attached To|Host-Only Adapter
    |Name|Virtualbox Host Only Adapter
    |Adapter Type|Biarkan Saja
    |Promiscuous Mode|Allow All
    |MAC Addr|Biarkan Saja
    |Virtual Cable|True

    > Konfigurasi ini hanya berlaku untuk yang memakai VirtualBox di Windows

    Selanjutnya, Hidupkan Virtual Machine Kalian

---

2. Mengecek Interface

    Gunakan perintah berikut:

    ```
    ip a

    ```

    catat nama interface, biasanya: ``enp0s8``

---

3. Konfigurasi IP

    Edit konfigurasi di ``/etc/netplan/``

    Contoh:

    ```
    sudo nano /etc/netplan/50-cloud-init.yaml

    ```

    Ubah isinya menjadi:

    ```
    network:
        version: 2
        renderer: networkd
        ethernets:
            enp0s3:
                dhcp4: yes
            enp0s8:
                dhcp4: no
                addresses:
                    - 192.168.10.[2 angka akhir NPM]/24
                routes: []
                nameservers:
                    addresses: [8.8.8.8]
    ```

    Simpan dan restart:

    ```
    sudo netplan apply

    ```

    Lakukan test ping ke Google

    ```
    ping google.com

    ```

#### Konfigurasi IP Static pada Windows
---

Buka **Control Panel** -> **Networks and Internet** -> **Change Adapter**

Pilih Adapter **VirtualBox Host-Only Adapter**

Klik kanan dan pilih **Properties**

Ubah IPv4 menjadi ``192.168.10.1``

Lakukan test ping ke VM:

```
ping [IP_VM]

```