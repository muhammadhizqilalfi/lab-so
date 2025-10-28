## Web Server
___

Web server adalah layanan yang melayani permintaan dari client (browser) menggunakan protokol HTTP/HTTPS dan mengirimkan kembali konten seperti HTML, CSS, JavaScript, gambar, atau data API.

Dua server paling populer adalah:

- Apache (HTTPD) → banyak digunakan, stabil, dan mudah dikonfigurasi.

- Nginx → ringan, cepat, dan cocok untuk reverse proxy atau load balancing.

#### Apache Web Server
---
Apache bekerja berbasis proses (prefork model).
Setiap permintaan dari client akan dilayani oleh worker process.
Konfigurasinya fleksibel dan cocok untuk website dinamis (PHP, CMS, dsb).

1. Instalasi Apache

    ```
    sudo apt update
    sudo apt install apache2 -y
    ```
---

2. Mengecek status service

    ```
    sudo systemctl status apache2
    sudo systemctl enable apache2
    sudo systemctl start apache2
    ```

---

3. Direktori utama website

    ```
    /var/www/html/

    ```

    Coba buat halaman sederhana:

    ```
    echo "<h1>Hello World</h1>" | sudo tee /var/www/html/index.html

    ```

    atau

    ```
    sudo nano /var/www/html/index.html

    ```

    Dan isi file tersebut dengan:

    ```
    <h1>Hello World</h1>

    ```

---

4. Port Forwarding

    Buka Settings → Network → Advanced → Port Forwarding

    Tambahkan rule baru

    |Name|Protocol|Host IP|Host Port|Guest IP|Guest Port|
    |----|----|----|----|-----|----|
    |WebServer|TCP|127.0.0.1|8080|10.0.2.15|80

    Akses IP dari host:

    > http://127.0.0.1:8080 

#### Nginx Web Server
---
Nginx lebih modern dan efisien.
Menggunakan arsitektur event-driven, sehingga lebih cepat dan hemat resource.
Cocok untuk reverse proxy, load balancing, dan server statis.

1. Instalasi Nginx

    ```
    sudo apt update
    sudo apt install nginx -y
    ```

2. Mengecek status service

    ```
    sudo systemctl status nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx
    ```

3. Direktori utama website

    ```
    /var/www/html/
    
    ```
