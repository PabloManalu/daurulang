# Daur Ulang

Website edukasi daur ulang sampah + prototipe toko kerajinan dari sampah. Mendukung SDG 3 (Kehidupan Sehat dan Sejahtera).

Stack: HTML/CSS/JS biasa (`public/`), Vercel Serverless Functions (`api/`), Postgres di Neon.

## Struktur

```
public/        halaman statis (index.html, css, js, img)
api/           products.js (GET produk), orders.js (POST pesanan)
db/schema.sql  tabel + data awal produk
vercel.json    konfigurasi Vercel
```

## Coba cepat tanpa database

Tanpa `DATABASE_URL`, API otomatis pakai data contoh (mode demo): produk tampil, pesanan diterima tapi tidak disimpan.

```
npm i -g vercel
npm install
vercel dev
```

## Deploy gratis ke Vercel

1. Push folder ini ke repo GitHub.
2. Buka vercel.com > Add New > Project > import repo. Biarkan Framework Preset "Other".
3. Di tab Storage (atau Marketplace), pasang **Neon**. `DATABASE_URL` terisi otomatis.
   Kalau pakai database lain, isi manual di Settings > Environment Variables.
4. Buka SQL Editor di Neon, tempel isi `db/schema.sql`, lalu Run.
5. Redeploy. Selesai.

Lihat pesanan masuk: SQL Editor Neon, `SELECT * FROM orders ORDER BY created_at DESC;`

## Mengganti foto produk

Saat ini gambar produk adalah ilustrasi SVG sederhana di `public/img/`. Untuk foto asli:

- Pakai foto karyamu sendiri, atau foto berlisensi bebas (Unsplash, Pexels, Pixabay). Cek lisensi dan beri kredit bila diminta.
- Simpan di `public/img/`, lalu ubah kolom `image_url` di tabel `products`
  (`UPDATE products SET image_url = '/img/tas.jpg' WHERE id = 1;`).
- Ubah juga `api/_products.js` bila ingin mode demo ikut berubah.

## Catatan

- Hobby plan Vercel hanya untuk penggunaan non-komersial. Untuk jualan sungguhan, pertimbangkan plan berbayar.
- Prototipe ini belum punya pembayaran dan halaman admin.
- Harga pesanan dihitung ulang di server, jadi tidak bisa diubah dari browser.
