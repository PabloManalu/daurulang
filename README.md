# Remade

Website edukasi dan toko online untuk memilah sampah dan membeli kerajinan tangan dari bahan bekas. Berisi panduan memilah sampah, edukasi dampak sampah, dashboard data sampah nasional 2024 (SIPSN), dan toko dengan keranjang serta form pesanan. Mendukung SDG 3: Kehidupan Sehat dan Sejahtera.

Teknologi: HTML, CSS, dan JavaScript statis di `public/`, API serverless di `api/` (Vercel), database Postgres (Neon).

## Cara instalasi

Prasyarat: [Node.js](https://nodejs.org) versi 20 atau lebih baru dan Git.

1. Unduh proyek:

   ```bash
   git clone <url-repositori>
   cd <nama-folder>
   ```

2. Pasang dependensi:

   ```bash
   npm install
   ```

3. Buat file `.env` dari contoh:

   ```bash
   cp .env.example .env
   ```

4. (Opsional) Isi `DATABASE_URL` di `.env` dengan connection string Postgres dari [Neon](https://neon.tech), lalu jalankan seluruh isi `db/schema.sql` sekali di SQL Editor Neon untuk membuat tabel dan data produk awal.

   Tanpa langkah ini, program tetap berjalan dalam mode demo: produk memakai data contoh dan pesanan tidak disimpan.

## Menjalankan program

```bash
npx vercel dev
```

Saat pertama kali, ikuti perintah login Vercel di terminal. Setelah berjalan, buka `http://localhost:3000`.

| Alamat | Isi |
|---|---|
| `/` | Beranda dan panduan memilah sampah |
| `/edukasi` | Dampak sampah, langkah dari rumah, mitos |
| `/dashboard` | Grafik data sampah nasional |
| `/toko` | Katalog produk, keranjang, dan form pesanan |
| `/api/products` | Daftar produk (JSON) |

Hentikan program dengan `Ctrl+C`.

## Cek hasil

- Buka `/api/products`. Daftar produk harus muncul.
- Di `/toko`, tambahkan produk ke keranjang lalu kirim pesanan. Dengan database aktif, pesanan tampil di Neon:

  ```sql
  SELECT * FROM orders ORDER BY created_at DESC;
  ```
