-- Jalankan sekali di SQL Editor Neon/Supabase

CREATE TABLE IF NOT EXISTS products (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  description TEXT NOT NULL,
  material    TEXT NOT NULL,
  price       INTEGER NOT NULL CHECK (price >= 0),
  image_url   TEXT NOT NULL,
  active      BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  phone      TEXT NOT NULL,
  address    TEXT NOT NULL,
  items      JSONB NOT NULL,
  total      INTEGER NOT NULL,
  status     TEXT NOT NULL DEFAULT 'baru',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO products (name, description, material, price, image_url) VALUES
('Tas Selempang Kemasan Kopi', 'Dianyam dari kemasan kopi sachet yang sudah dicuci dan dikeringkan. Ringan dan tahan air.', 'Kemasan sachet', 145000, '/img/p1.svg'),
('Pot Tanaman Botol Bekas', 'Botol PET dipotong dan dicat jadi pot kecil untuk tanaman meja atau dapur.', 'Botol plastik PET', 35000, '/img/p2.svg'),
('Lampu Meja Botol Kaca', 'Botol kaca bekas dengan kabel dan lampu LED hangat. Cocok untuk meja kerja.', 'Botol kaca', 185000, '/img/p3.svg'),
('Dompet Lipat Kardus Susu', 'Dibuat dari karton kemasan susu yang dilapis ulang. Muat kartu dan uang lipat.', 'Karton kemasan', 65000, '/img/p4.svg'),
('Keranjang Anyam Koran', 'Gulungan kertas koran dianyam dan dilapisi pernis berbasis air.', 'Kertas koran', 95000, '/img/p5.svg'),
('Tempat Pensil Kaleng', 'Kaleng bekas yang tepinya sudah dihaluskan, dilapis kain perca.', 'Kaleng logam', 40000, '/img/p6.svg');
