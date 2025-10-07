## Command User & Permission
___

Command :

1.  Manajemen User

    - Membuat User Baru
        ```
        sudo useradd [opsi] username
         ```
    
        Opsi penting : 

        **-m** - Membuat home directory (/home/username).
    
        **-s /bin/bash** - Menetukan default shell
    
        **-d /path/custom** - Menentukan lokasi home directory khusus.
    
        **-c "komentar"** - Menambahkan deskripsi pengguna

        Contoh : 
        ```
        sudo useradd -m -s /bin/bash -c "User percobaan" alfi
        ```

        - Menghapus User
        ```
        sudo userdel [opsi] username
        ```

        Opsi penting :

        **-r** - Menghapus home directory dan mail spool user.

        Contoh : 
        ```
        sudo userdel -r alfi
        ```
    
    - Mengubah password

        ```
        sudo passwd username
        ```

        Note : Jika tanpa argumen **username**, maka mengganti password user yang sedang login.

        Contoh :
        ```
        sudo passwd alfi
        ```

        - Melihat Daftar User

        ```
        cat /etc/passwd
        ```

        file ini menyimpan semua akun user di sistem, dalam format :
        ```
        username:x:UID:GID:home_directory:default_shell
        ```

2. Manajemen Group

    - Membuat Group

        ```
        sudo groupadd [opsi] name_group
        ```

        Contoh : 
        ```
        sudo groupadd admuser
        ```

    - Menghapus Group
        
        ```
        sudo groupdel name_group
        ```
    
    - Menambahkan User ke Group

        ```
        sudo usermod -aG name_group username
        ```

        Opsi : 

        - **-a** - Append (menambahkan tanpa menghapus grup lain).
        - **-G** - Menentukan group tambahan (supplementary grup).

        Contoh : 
        ```
        sudo usermod -aG admuser alfi
        ```

    - Melihat Group User

        ```
        groups username
        ```

        atau

        ```
        id username
        ```

3. Switch User (Berpindah User)

    ```
    su - username
    ```

    Note : 
    
    - **- (minus)** - Memuat environment user tersebut (seperti login penuh).

    - Jika tanpa **-**, hanya berpindah shell tanpa mengubah environtment.

    Contoh :
    ```
    su - alfi
    ```

    Untuk kembali ke user sebelumnya :
    ```
    exit
    ```

4. Permission (Hak Akses File & Folder)

    Perintah dasar : 
    ```
    ls -l
    ```

    Contoh output : 
    ```
    -rwxr-xr--  1 user group  1234 Sep 23  file.sh
    ```

    Opsi : 
    - **r** - read (baca)
    - **w** - write (tulis)
    - **x** - execute (jalankan)
    - **Owner** - Pemilih file
    - **Group** - Grup file
    - **Others** - Semua pengguna lainnya

5. Mengubah Permission File

    - Menggunakan chmod
        
        ```
        chmod [mode] name_file
        ```

        Terdapat dua cara :
        
        a. Simbolik

        ```
        chmod u+x file.sh     # Tambah hak eksekusi untuk owner
        chmod g-w file.sh     # Hapus hak tulis untuk group
        chmod o=r file.sh     # Jadikan others hanya bisa read
        ``` 

        b. Numerik

        Nilai :

        - **4** - read (r)
        - **2** - write (w)
        - **1** - execute (x)

        Contoh : 

        ```
        chmod 755 file.sh # Owner: rwx (7), Group: r-x (5), Others: r-x (5)
        ```

6. Mengubah Kepemilikan File

    - Mengubah Owner

        ```
        sudo chown user file.txt
        ```

    - Mengubah Group

        ```
        sudo chgrp group file.txt
        ```

    - Mengubah Keduanya Sekaligus
        
        ```
        sudo chown user:group file.txt
        ```

        Contoh :

        ```
        sudo chown alfi:admuser data.txt
        ```