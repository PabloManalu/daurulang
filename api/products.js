import { sql } from './_db.js';
import { fallbackProducts } from './_products.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Metode tidak diizinkan' });
  }
  try {
    const products = sql
      ? await sql`SELECT id, name, description, material, price, image_url
                  FROM products WHERE active = true ORDER BY id`
      : fallbackProducts;
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Produk gagal dimuat. Coba lagi sebentar.' });
  }
}
