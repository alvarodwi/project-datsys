# Aplikasi CRUD Light Novel

Bagian server dari aplkasi

## Spesifikasi

Komponen dari aplikasi ini :

- Node JS + Express JS (untuk server)
- Sequelize ORM (untuk memetakan database ke server)
- MySQL (database yang dipakai)

## Panduan Memulai

Proyek ini menggunakan npm. Pastikan `npm install` telah dijalankan melalui command line.

Pertama-tama, buat file `.env` di root seperti berikut :

```env
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=project_datsys
```

Pastikan database yang ditulis di dalam `.env` telah ada di dalam mysql.

Selanjutnya, jalankan command berikut di root project untuk inisialisasi struktur database (pastikan database yang ditulis di .env telah ada)

```
npm run migrate
npm run seed
```

Lalu jalankan command berikut untuk memulai server :

```
npm run start
```

Akses [localhost:8090](localhost:8090) di browser untuk memastikan server telah berhasil dijalankan.
