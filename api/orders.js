import { sql } from './_db.js';
import { fallbackProducts } from './_products.js';

const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metode tidak diizinkan' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  const name = clean(body.name, 100);
  const phone = clean(body.phone, 20);
  const address = clean(body.address, 300);
  const rawItems = Array.isArray(body.items) ? body.items.slice(0, 30) : [];

  if (!name || !/^[0-9+\-\s]{8,20}$/.test(phone) || address.length < 10 || rawItems.length === 0) {
    return res.status(400).json({ error: 'Lengkapi nama, nomor telepon (8-20 digit), alamat, dan keranjang.' });
  }

  try {
    // Harga selalu dihitung ulang di server, bukan dari browser.
    const catalog = sql
      ? await sql`SELECT id, name, price FROM products WHERE active = true`
      : fallbackProducts;
    const byId = new Map(catalog.map((p) => [Number(p.id), p]));

    const items = [];
    let total = 0;
    for (const it of rawItems) {
      const p = byId.get(Number(it.id));
      const qty = Math.floor(Number(it.qty));
      if (!p || !(qty >= 1 && qty <= 20)) {
        return res.status(400).json({ error: 'Ada produk di keranjang yang tidak valid.' });
      }
      items.push({ id: p.id, name: p.name, price: p.price, qty });
      total += p.price * qty;
    }

    if (!sql) {
      return res.status(201).json({ ok: true, demo: true, id: null, total });
    }

    const rows = await sql`
      INSERT INTO orders (name, phone, address, items, total)
      VALUES (${name}, ${phone}, ${address}, ${JSON.stringify(items)}::jsonb, ${total})
      RETURNING id`;
    return res.status(201).json({ ok: true, id: rows[0].id, total });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Pesanan gagal disimpan. Coba lagi sebentar.' });
  }
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
