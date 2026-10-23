const rupiah = (n) => 'Rp' + Number(n).toLocaleString('id-ID');
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- Edukasi ---------- */
const WASTE = {
  'Plastik': {
    contoh: ['Botol minuman (PET)', 'Galon dan jeriken', 'Tutup botol', 'Kantong dan kemasan bersih'],
    cara: ['Kosongkan dan bilas isinya', 'Lepas label dan tutup bila bisa', 'Pipihkan agar hemat tempat', 'Keringkan sebelum disimpan'],
    jadi: ['Pot tanaman', 'Tempat alat tulis', 'Anyaman tas dan keranjang', 'Biji plastik untuk produk baru']
  },
  'Kertas': {
    contoh: ['Koran dan majalah', 'Kardus', 'Kertas HVS bekas', 'Buku tulis lama'],
    cara: ['Jaga tetap kering', 'Lepas selotip dan staples', 'Lipat kardus agar rata', 'Pisahkan dari kertas berminyak'],
    jadi: ['Keranjang anyam koran', 'Kertas daur ulang', 'Kotak penyimpanan', 'Bubur kertas untuk kerajinan']
  },
  'Kaca': {
    contoh: ['Botol sirup dan saus', 'Stoples', 'Botol minuman kaca'],
    cara: ['Bilas sampai bersih', 'Jangan campur dengan pecahan lampu atau keramik', 'Bungkus pecahan dengan kertas tebal', 'Simpan di wadah yang kokoh'],
    jadi: ['Lampu meja', 'Vas bunga', 'Wadah bumbu', 'Kaca baru lewat peleburan']
  },
  'Logam': {
    contoh: ['Kaleng makanan dan minuman', 'Tutup botol logam', 'Kabel tembaga bekas'],
    cara: ['Bilas isi kaleng', 'Haluskan tepi yang tajam', 'Pipihkan bila memungkinkan', 'Kumpulkan untuk pengepul'],
    jadi: ['Tempat pensil', 'Lentera hias', 'Pot kecil', 'Logam lebur untuk produk baru']
  },
  'Organik': {
    contoh: ['Sisa sayur dan buah', 'Kulit telur', 'Ampas kopi dan teh', 'Daun kering'],
    cara: ['Pisahkan dari sampah lain', 'Potong kecil agar cepat terurai', 'Campur dengan daun kering', 'Aduk berkala di wadah kompos'],
    jadi: ['Kompos untuk tanaman', 'Pupuk cair', 'Pakan maggot BSF', 'Mulsa kebun']
  }
};

function renderTabs() {
  const tabs = $('#tabs');
  const names = Object.keys(WASTE);
  tabs.innerHTML = names.map((n, i) =>
    `<button class="tab" role="tab" id="tab-${i}" aria-selected="${i === 0}" aria-controls="panel" tabindex="${i === 0 ? 0 : -1}" data-name="${esc(n)}">${esc(n)}</button>`
  ).join('');
  const select = (btn) => {
    tabs.querySelectorAll('.tab').forEach((b) => { b.setAttribute('aria-selected', b === btn); b.tabIndex = b === btn ? 0 : -1; });
    showPanel(btn.dataset.name);
    $('#panel').setAttribute('aria-labelledby', btn.id);
  };
  tabs.addEventListener('click', (e) => { const b = e.target.closest('.tab'); if (b) select(b); });
  tabs.addEventListener('keydown', (e) => {
    const list = [...tabs.querySelectorAll('.tab')];
    const i = list.indexOf(document.activeElement);
    if (i < 0 || !['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const next = list[(i + (e.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length];
    next.focus(); select(next);
  });
  showPanel(names[0]);
  $('#panel').setAttribute('aria-labelledby', 'tab-0');
}

function showPanel(name) {
  const d = WASTE[name];
  const ul = (a) => `<ul>${a.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  $('#panel').innerHTML =
    `<div><h3>Contoh</h3>${ul(d.contoh)}</div>` +
    `<div><h3>Cara menyiapkan</h3>${ul(d.cara)}</div>` +
    `<div><h3>Bisa jadi</h3>${ul(d.jadi)}</div>`;
}

/* ---------- Toko ---------- */
let products = [];
let cart = loadCart();

function loadCart() {
  try { return JSON.parse(localStorage.getItem('cart') || '{}') || {}; } catch { return {}; }
}
function saveCart() {
  try { localStorage.setItem('cart', JSON.stringify(cart)); } catch { /* abaikan */ }
}

async function loadProducts() {
  const box = $('#products');
  try {
    const r = await fetch('/api/products');
    if (!r.ok) throw new Error();
    products = await r.json();
    box.innerHTML = products.map((p) => `
      <article class="card">
        <img src="${esc(p.image_url)}" alt="${esc(p.name)}" width="400" height="400" loading="lazy">
        <h3>${esc(p.name)}</h3>
        <p class="mat">Dari ${esc(p.material.toLowerCase())}</p>
        <p class="desc">${esc(p.description)}</p>
        <div class="row">
          <span class="price">${rupiah(p.price)}</span>
          <button class="btn btn--sm" type="button" data-add="${p.id}">Tambah ke keranjang</button>
        </div>
      </article>`).join('');
    pruneCart();
    renderCart();
  } catch {
    box.innerHTML = '<p class="note">Produk gagal dimuat. Muat ulang halaman untuk mencoba lagi.</p>';
  }
}

function pruneCart() {
  const ids = new Set(products.map((p) => String(p.id)));
  Object.keys(cart).forEach((id) => { if (!ids.has(id)) delete cart[id]; });
  saveCart();
}

function renderCart() {
  const entries = Object.entries(cart).map(([id, qty]) => ({ p: products.find((x) => String(x.id) === id), qty })).filter((e) => e.p);
  const count = entries.reduce((s, e) => s + e.qty, 0);
  const total = entries.reduce((s, e) => s + e.qty * e.p.price, 0);
  $('#cartCount').textContent = count;
  $('#lines').innerHTML = entries.length
    ? entries.map(({ p, qty }) => `
      <li>
        <div><strong>${esc(p.name)}</strong><div class="sub">${rupiah(p.price)}</div></div>
        <div class="qty">
          <button type="button" data-dec="${p.id}" aria-label="Kurangi ${esc(p.name)}">−</button>
          <span aria-live="polite">${qty}</span>
          <button type="button" data-inc="${p.id}" aria-label="Tambah ${esc(p.name)}">+</button>
        </div>
      </li>`).join('')
    : '<li><span class="sub">Keranjang kosong. Pilih produk di bagian Toko.</span></li>';
  $('#total').textContent = entries.length ? `Total ${rupiah(total)}` : '';
  $('#submit').disabled = !entries.length;
}

function change(id, delta) {
  const next = (cart[id] || 0) + delta;
  if (next <= 0) delete cart[id]; else cart[id] = Math.min(next, 20);
  saveCart(); renderCart();
}

document.addEventListener('click', (e) => {
  const add = e.target.closest('[data-add]');
  if (add) { change(add.dataset.add, 1); $('#msg').textContent = ''; flash(add); }
  const inc = e.target.closest('[data-inc]'); if (inc) change(inc.dataset.inc, 1);
  const dec = e.target.closest('[data-dec]'); if (dec) change(dec.dataset.dec, -1);
});

function flash(btn) {
  const t = btn.textContent;
  btn.textContent = 'Ditambahkan';
  setTimeout(() => { btn.textContent = t; }, 1000);
}

const dlg = $('#cart');
$('#openCart').addEventListener('click', () => dlg.showModal());
$('#closeCart').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

$('#checkout').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const msg = $('#msg');
  const btn = $('#submit');
  const data = Object.fromEntries(new FormData(form));
  data.items = Object.entries(cart).map(([id, qty]) => ({ id: Number(id), qty }));
  msg.className = 'msg'; msg.textContent = 'Mengirim pesanan…'; btn.disabled = true;
  try {
    const r = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const out = await r.json();
    if (!r.ok) throw new Error(out.error || 'Pesanan gagal dikirim.');
    cart = {}; saveCart(); renderCart(); form.reset();
    msg.className = 'msg ok';
    msg.textContent = out.demo
      ? `Pesanan diterima (mode demo, belum tersimpan). Total ${rupiah(out.total)}.`
      : `Pesanan #${out.id} diterima. Total ${rupiah(out.total)}. Kami akan menghubungimu lewat telepon.`;
  } catch (err) {
    msg.className = 'msg err';
    msg.textContent = err.message;
    btn.disabled = false;
  }
});

renderTabs();
loadProducts();
