/* Ganti bahasa Indonesia <-> Inggris. Letakkan di public/js/i18n.js.
   Cara kerja: teks Indonesia di halaman dicocokkan dengan kamus di bawah, lalu diganti
   saat bahasa Inggris dipilih. Teks yang belum ada di kamus tetap tampil dalam bahasa Indonesia. */
(() => {
  'use strict';

  const D = {
    // Navigasi dan umum
    [`Beranda`]: `Home`, [`Edukasi`]: `Learn`, [`Toko`]: `Shop`, [`Utama`]: `Main`,
    [`Lewati ke konten`]: `Skip to content`,
    [`Putih · Hijau · Bersih`]: `White · Green · Clean`,
    [`Mendukung SDG 3: Kehidupan Sehat dan Sejahtera.`]: `Supporting SDG 3: Good Health and Well-being.`,

    // Beranda
    [`Sampah masih punya kehidupan kedua.`]: `Waste deserves a second life.`,
    [`Pelajari cara memilah sampah di rumah, pahami dampaknya lewat data, lalu bawa pulang kerajinan tangan yang dibuat dari sampah itu sendiri.`]: `Learn how to sort waste at home, understand its impact through data, then take home handmade crafts made from that very waste.`,
    [`Mulai belajar`]: `Start learning`, [`Lihat data`]: `View the data`, [`Kunjungi toko`]: `Visit the shop`,
    [`32,8 jt ton`]: `32.8M tons`,
    [`timbulan sampah nasional 2024`]: `national waste generated in 2024`,
    [`di antaranya sisa makanan`]: `of which is food waste`,
    [`berupa sampah plastik`]: `is plastic waste`,
    [`berasal dari rumah tangga`]: `comes from households`,
    [`Sumber: SIPSN KLH, laporan 303 kabupaten/kota (2024).`]: `Source: SIPSN (Ministry of Environment), reports from 303 regencies/cities (2024).`,
    [`Lihat dashboard lengkap`]: `See the full dashboard`,
    [`Pilah dari rumah`]: `Sort at home`,
    [`Pilih jenis sampah untuk melihat contoh, cara menyiapkannya, dan bisa jadi apa.`]: `Pick a type of waste to see examples, how to prepare it, and what it can become.`,
    [`Jenis sampah`]: `Waste type`,
    [`Contoh`]: `Examples`, [`Cara menyiapkan`]: `How to prepare`, [`Bisa jadi`]: `Can become`,
    [`Plastik`]: `Plastic`, [`Kertas`]: `Paper`, [`Kaca`]: `Glass`, [`Logam`]: `Metal`, [`Organik`]: `Organic`,
    [`Botol minuman (PET)`]: `Drink bottles (PET)`, [`Galon dan jeriken`]: `Water jugs and jerrycans`, [`Tutup botol`]: `Bottle caps`, [`Kantong dan kemasan bersih`]: `Clean bags and packaging`,
    [`Kosongkan dan bilas isinya`]: `Empty and rinse`, [`Lepas label dan tutup bila bisa`]: `Remove labels and caps if possible`, [`Pipihkan agar hemat tempat`]: `Flatten to save space`, [`Keringkan sebelum disimpan`]: `Dry before storing`,
    [`Pot tanaman`]: `Plant pots`, [`Tempat alat tulis`]: `Stationery holders`, [`Anyaman tas dan keranjang`]: `Woven bags and baskets`, [`Biji plastik untuk produk baru`]: `Plastic pellets for new products`,
    [`Koran dan majalah`]: `Newspapers and magazines`, [`Kardus`]: `Cardboard boxes`, [`Kertas HVS bekas`]: `Used office paper`, [`Buku tulis lama`]: `Old notebooks`,
    [`Jaga tetap kering`]: `Keep it dry`, [`Lepas selotip dan staples`]: `Remove tape and staples`, [`Lipat kardus agar rata`]: `Fold boxes flat`, [`Pisahkan dari kertas berminyak`]: `Separate from greasy paper`,
    [`Keranjang anyam koran`]: `Newspaper woven baskets`, [`Kertas daur ulang`]: `Recycled paper`, [`Kotak penyimpanan`]: `Storage boxes`, [`Bubur kertas untuk kerajinan`]: `Paper pulp for crafts`,
    [`Botol sirup dan saus`]: `Syrup and sauce bottles`, [`Stoples`]: `Jars`, [`Botol minuman kaca`]: `Glass drink bottles`,
    [`Bilas sampai bersih`]: `Rinse until clean`, [`Jangan campur dengan pecahan lampu atau keramik`]: `Do not mix with broken bulbs or ceramics`, [`Bungkus pecahan dengan kertas tebal`]: `Wrap broken pieces in thick paper`, [`Simpan di wadah yang kokoh`]: `Store in a sturdy container`,
    [`Lampu meja`]: `Table lamps`, [`Vas bunga`]: `Flower vases`, [`Wadah bumbu`]: `Spice containers`, [`Kaca baru lewat peleburan`]: `New glass through melting`,
    [`Kaleng makanan dan minuman`]: `Food and drink cans`, [`Tutup botol logam`]: `Metal bottle caps`, [`Kabel tembaga bekas`]: `Used copper cables`,
    [`Bilas isi kaleng`]: `Rinse out the cans`, [`Haluskan tepi yang tajam`]: `Smooth sharp edges`, [`Pipihkan bila memungkinkan`]: `Flatten if possible`, [`Kumpulkan untuk pengepul`]: `Collect for scrap collectors`,
    [`Tempat pensil`]: `Pencil holders`, [`Lentera hias`]: `Decorative lanterns`, [`Pot kecil`]: `Small pots`, [`Logam lebur untuk produk baru`]: `Melted metal for new products`,
    [`Sisa sayur dan buah`]: `Vegetable and fruit scraps`, [`Kulit telur`]: `Eggshells`, [`Ampas kopi dan teh`]: `Coffee and tea grounds`, [`Daun kering`]: `Dry leaves`,
    [`Pisahkan dari sampah lain`]: `Separate from other waste`, [`Potong kecil agar cepat terurai`]: `Cut small so it breaks down faster`, [`Campur dengan daun kering`]: `Mix with dry leaves`, [`Aduk berkala di wadah kompos`]: `Stir regularly in the compost bin`,
    [`Kompos untuk tanaman`]: `Compost for plants`, [`Pupuk cair`]: `Liquid fertilizer`, [`Pakan maggot BSF`]: `BSF maggot feed`, [`Mulsa kebun`]: `Garden mulch`,
    [`Belanja kerajinan dari sampah`]: `Shop crafts made from waste`,
    [`Tas, pot, lampu, dan lainnya. Dibuat tangan dari bahan bekas.`]: `Bags, pots, lamps, and more. Handmade from used materials.`,
    [`Buka toko`]: `Open the shop`,
    [`Belajar memilah dan mendaur ulang sampah, lalu belanja kerajinan tangan dari sampah. Mendukung SDG 3.`]: `Learn to sort and recycle waste, then shop handmade crafts made from waste. Supporting SDG 3.`,

    // Edukasi
    [`Kenapa sampah menjadi masalah kita bersama.`]: `Why waste is a problem we share.`,
    [`Dampak sampah yang tidak dikelola terasa di udara, air, tanah, dan tubuh kita. Kabar baiknya, sebagian besar bisa dicegah dari rumah.`]: `Unmanaged waste affects our air, water, soil, and bodies. The good news is that most of it can be prevented at home.`,
    [`Dampak buruk sampah`]: `The harm waste causes`,
    [`Pencemaran udara`]: `Air pollution`,
    [`Membakar sampah melepas asap dan partikel halus yang mengiritasi saluran napas, terutama pada anak-anak, lansia, dan penderita asma. Membakar plastik melepas zat yang lebih berbahaya lagi.`]: `Burning waste releases smoke and fine particles that irritate the airways, especially in children, older adults, and people with asthma. Burning plastic releases even more harmful substances.`,
    [`Gas metana dan iklim`]: `Methane and climate`,
    [`Sampah organik yang menumpuk di TPA tanpa pengelolaan membusuk tanpa oksigen dan menghasilkan metana, gas rumah kaca yang kuat. Karena sisa makanan adalah jenis sampah terbanyak, memilahnya berdampak besar.`]: `Organic waste piled up in landfills without management rots without oxygen and produces methane, a powerful greenhouse gas. Because food waste is the largest type of waste, sorting it has a big impact.`,
    [`Banjir dan penyakit`]: `Floods and disease`,
    [`Sampah menyumbat saluran air dan memperparah banjir. Genangan dan wadah bekas yang menampung air hujan menjadi tempat nyamuk berkembang biak, termasuk nyamuk penular demam berdarah.`]: `Waste clogs drains and worsens flooding. Standing water and discarded containers that collect rain become breeding grounds for mosquitoes, including those that spread dengue fever.`,
    [`Pencemaran air dan tanah`]: `Water and soil pollution`,
    [`Cairan dari tumpukan sampah (lindi) dapat merembes ke tanah dan air tanah. Sampah yang terbawa sungai berakhir di laut dan merusak ekosistem.`]: `Liquid from waste piles (leachate) can seep into soil and groundwater. Waste carried by rivers ends up in the sea and damages ecosystems.`,
    [`Mikroplastik`]: `Microplastics`,
    [`Plastik tidak benar-benar hilang. Ia terpecah menjadi serpihan sangat kecil yang masuk ke tanah, air, dan rantai makanan. Dampak jangka panjangnya pada kesehatan masih terus diteliti.`]: `Plastic never truly disappears. It breaks into tiny fragments that enter soil, water, and the food chain. Its long-term effects on health are still being studied.`,
    [`Hewan dan ekosistem`]: `Animals and ecosystems`,
    [`Hewan darat dan laut dapat terjerat atau menelan sampah plastik. Sampah juga merusak habitat sungai, pantai, dan mangrove.`]: `Land and sea animals can get tangled in or swallow plastic waste. Waste also damages river, beach, and mangrove habitats.`,
    [`Ringkasan ini bersifat umum. Untuk angka lokal dan terbaru, lihat`]: `This summary is general. For local and up-to-date figures, see the`,
    [`dashboard`]: `dashboard`,
    [`dan sumber resminya.`]: `and official sources.`,
    [`Fakta dari data nasional`]: `Facts from national data`,
    [`Angka berikut dari SIPSN (Sistem Informasi Pengelolaan Sampah Nasional) untuk tahun 2024.`]: `These figures come from SIPSN (the National Waste Management Information System) for 2024.`,
    [`ton timbulan sampah, dari 303 kabupaten/kota yang melapor`]: `tons of waste generated, from 303 regencies/cities that reported`,
    [`sisa makanan dan kayu/ranting, bahan yang bisa dikompos`]: `food waste and wood/twigs, material that can be composted`,
    [`plastik dan kertas/karton, bahan yang bisa didaur ulang`]: `plastic and paper/cardboard, material that can be recycled`,
    [`sampah berasal dari rumah tangga`]: `of waste comes from households`,
    [`Persentase 52% dan 31% dihitung dari komposisi jenis (39,43 + 12,7 dan 19,54 + 11,09).`]: `The 52% and 31% figures are calculated from the composition by type (39.43 + 12.7 and 19.54 + 11.09).`,
    [`Lihat dashboard`]: `See the dashboard`,
    [`Mulai dari rumah, 5 langkah`]: `Start at home, in 5 steps`,
    [`Kurangi`]: `Reduce`, [`Bawa tas dan botol minum sendiri, beli secukupnya agar makanan tidak terbuang.`]: `Bring your own bag and water bottle, and buy only what you need so food is not wasted.`,
    [`Pilah`]: `Sort`, [`Pisahkan organik, plastik, kertas, kaca, dan logam. Dua wadah saja sudah cukup untuk memulai.`]: `Separate organic, plastic, paper, glass, and metal. Even two containers are enough to start.`,
    [`Olah sisa makanan`]: `Process food scraps`, [`Jadikan kompos atau pakan maggot. Ini memangkas bagian sampah terbesar.`]: `Turn them into compost or maggot feed. This cuts the largest share of waste.`,
    [`Pakai ulang`]: `Reuse`, [`Wadah bekas bisa jadi pot, tempat alat tulis, atau lampu hias.`]: `Used containers can become pots, stationery holders, or decorative lamps.`,
    [`Setor atau beli hasil daur ulang`]: `Drop off or buy recycled goods`, [`Kirim ke bank sampah atau dukung pengrajin lewat`]: `Send to a waste bank or support makers through the`,
    [`Mitos yang sering salah`]: `Common myths`,
    [`"Dibakar saja biar cepat habis."`]: `"Just burn it so it disappears faster."`,
    [`Sampah tidak hilang, hanya berpindah menjadi asap dan abu yang berbahaya bagi napas.`]: `Waste does not vanish. It just turns into smoke and ash that are harmful to breathe.`,
    [`"Plastik pasti terurai."`]: `"Plastic will surely break down."`,
    [`Plastik terpecah menjadi serpihan kecil, bukan lenyap. Cara terbaik adalah mengurangi dan memakai ulang.`]: `Plastic breaks into small fragments rather than disappearing. The best approach is to reduce and reuse.`,
    [`"Satu rumah tidak berpengaruh."`]: `"One household makes no difference."`,
    [`Rumah tangga adalah sumber sampah terbesar, sehingga kebiasaan di rumah menentukan.`]: `Households are the largest source of waste, so habits at home matter.`,
    [`Lihat datanya`]: `See the data`,
    [`Komposisi sampah menurut jenis dan sumber, dalam dashboard interaktif.`]: `Waste composition by type and source, in an interactive dashboard.`,
    [`Buka dashboard`]: `Open the dashboard`,
    [`Dampak buruk sampah bagi lingkungan, kesehatan, dan ekonomi, serta langkah yang bisa dilakukan dari rumah.`]: `The harm waste causes to the environment, health, and the economy, and steps you can take from home.`,

    // Dashboard
    [`Data sampah Indonesia, satu layar.`]: `Indonesia's waste data, on one screen.`,
    [`Komposisi sampah nasional 2024 menurut jenis dan sumber. Sentuh atau arahkan kursor ke baris untuk melihat detail.`]: `National waste composition in 2024 by type and source. Tap or hover over a row to see details.`,
    [`Ringkasan`]: `Summary`, [`Grafik`]: `Charts`,
    [`kabupaten/kota yang melapor`]: `regencies/cities reporting`,
    [`sisa makanan, jenis terbanyak`]: `food waste, the largest type`,
    [`Komposisi menurut jenis`]: `Composition by type`,
    [`Diagram donat komposisi sampah menurut jenis`]: `Donut chart of waste composition by type`,
    [`Sumber sampah`]: `Waste sources`,
    [`Apa artinya?`]: `What does it mean?`,
    [`Sekitar 52,13% sampah berupa sisa makanan dan kayu/ranting yang bisa dikompos, dan 30,63% berupa plastik serta kertas/karton yang berpotensi didaur ulang. Karena rumah tangga menyumbang 50,8%, memilah dan mengolah sampah di rumah adalah langkah dengan dampak terbesar.`]: `About 52.13% of waste is food waste and wood/twigs that can be composted, and 30.63% is plastic and paper/cardboard that can potentially be recycled. Because households contribute 50.8%, sorting and processing waste at home is the step with the biggest impact.`,
    [`Tabel data`]: `Data table`, [`Porsi`]: `Share`,
    [`Sisa makanan`]: `Food waste`, [`Kayu/ranting`]: `Wood/twigs`, [`Kertas/karton`]: `Paper/cardboard`,
    [`Lainnya (logam, kain, kaca, karet, dll.)`]: `Other (metal, textiles, glass, rubber, etc.)`,
    [`Rumah tangga`]: `Households`, [`Pasar`]: `Markets`, [`Kawasan`]: `Zones/areas`, [`Perniagaan`]: `Commerce`, [`Perkantoran`]: `Offices`, [`Fasilitas publik`]: `Public facilities`, [`Lainnya`]: `Other`,
    [`Sumber: SIPSN, Kementerian Lingkungan Hidup (sipsn.kemenlh.go.id), data 2024 dari 303 kabupaten/kota yang melapor, sebagaimana dikutip ANTARA. Komposisi sumber dikutip dari GoodStats (data SIPSN 2024). Cakupan pelaporan berubah tiap tahun dan angka bisa direvisi, jadi bandingkan antar tahun dengan hati-hati. Kategori "lainnya" dihitung sebagai sisa dari 100%.`]: `Source: SIPSN, Ministry of Environment (sipsn.kemenlh.go.id), 2024 data from 303 reporting regencies/cities, as cited by ANTARA. Source composition is cited from GoodStats (SIPSN 2024 data). Reporting coverage changes each year and figures may be revised, so compare across years with care. The "other" category is calculated as the remainder of 100%.`,
    [`Dashboard komposisi sampah nasional 2024 menurut jenis dan sumber, berdasarkan data SIPSN.`]: `Dashboard of national waste composition in 2024 by type and source, based on SIPSN data.`,

    // Toko
    [`Kerajinan dari sampah, dibuat tangan.`]: `Crafts made from waste, made by hand.`,
    [`Setiap pembelian memberi bahan bekas umur panjang. Ini prototipe toko: pesanan tersimpan, tetapi belum ada pembayaran.`]: `Every purchase gives used materials a longer life. This is a prototype shop: orders are saved, but there is no payment yet.`,
    [`Bahan bekas`]: `Used materials`, [`Plastik, kaca, kertas, logam, dan kemasan.`]: `Plastic, glass, paper, metal, and packaging.`,
    [`Dibuat tangan`]: `Handmade`, [`Setiap produk dikerjakan satu per satu.`]: `Every product is made one by one.`,
    [`Harga jelas`]: `Clear pricing`, [`Total dihitung ulang di server saat memesan.`]: `The total is recalculated on the server when you order.`,
    [`Semua produk`]: `All products`,
    [`Pilih produk, masukkan ke keranjang, lalu kirim pesanan.`]: `Pick products, add them to the cart, then send your order.`,
    [`Memuat produk…`]: `Loading products…`,
    [`Produk gagal dimuat. Muat ulang halaman untuk mencoba lagi.`]: `Products failed to load. Reload the page to try again.`,
    [`Keranjang`]: `Cart`, [`Tutup`]: `Close`, [`Nama`]: `Name`, [`Nomor telepon`]: `Phone number`, [`Alamat lengkap`]: `Full address`,
    [`Kirim pesanan`]: `Place order`, [`Tambah ke keranjang`]: `Add to cart`, [`Ditambahkan`]: `Added`,
    [`Keranjang kosong. Pilih produk di bagian Toko.`]: `Your cart is empty. Pick a product in the Shop section.`,
    [`Mengirim pesanan…`]: `Sending order…`, [`Pesanan gagal dikirim.`]: `Order could not be sent.`,
    [`Kerajinan tangan dari sampah: tas, pot, lampu, dompet, keranjang, dan tempat pensil.`]: `Handmade crafts from waste: bags, pots, lamps, wallets, baskets, and pencil holders.`,
    // Produk (dari database)
    [`Tas Selempang Kemasan Kopi`]: `Coffee Sachet Sling Bag`,
    [`Dianyam dari kemasan kopi sachet yang sudah dicuci dan dikeringkan. Ringan dan tahan air.`]: `Woven from washed and dried coffee sachets. Light and water-resistant.`,
    [`Pot Tanaman Botol Bekas`]: `Used Bottle Planter`,
    [`Botol PET dipotong dan dicat jadi pot kecil untuk tanaman meja atau dapur.`]: `PET bottles cut and painted into small pots for desk or kitchen plants.`,
    [`Lampu Meja Botol Kaca`]: `Glass Bottle Table Lamp`,
    [`Botol kaca bekas dengan kabel dan lampu LED hangat. Cocok untuk meja kerja.`]: `A used glass bottle with a cable and warm LED bulb. Great for a work desk.`,
    [`Dompet Lipat Kardus Susu`]: `Milk Carton Fold Wallet`,
    [`Dibuat dari karton kemasan susu yang dilapis ulang. Muat kartu dan uang lipat.`]: `Made from re-laminated milk cartons. Fits cards and folded cash.`,
    [`Keranjang Anyam Koran`]: `Newspaper Woven Basket`,
    [`Gulungan kertas koran dianyam dan dilapisi pernis berbasis air.`]: `Rolled newspaper woven and coated with water-based varnish.`,
    [`Tempat Pensil Kaleng`]: `Tin Can Pencil Holder`,
    [`Kaleng bekas yang tepinya sudah dihaluskan, dilapis kain perca.`]: `A used can with smoothed edges, covered with fabric scraps.`,
    // bahan (huruf kecil, dipakai di "Dari ...")
    [`kemasan sachet`]: `sachet packaging`, [`botol plastik pet`]: `PET plastic bottles`, [`botol kaca`]: `glass bottles`,
    [`karton kemasan`]: `packaging cardboard`, [`kertas koran`]: `newspaper`, [`kaleng logam`]: `metal cans`
  };

  const num = (s) => s.replace(/Rp([\d.]+)/g, (_, d) => 'Rp' + d.replace(/\./g, ','));
  const R = [
    [/^(.+) · Belajar memilah, belanja kerajinan dari sampah$/, (m) => `${m[1]} · Learn to sort, shop crafts made from waste`],
    [/^Toko · (.+)$/, (m) => `Shop · ${m[1]}`],
    [/^Edukasi · Dampak sampah dan cara mengatasinya(.*)$/, (m) => `Learn · Waste impact and how to tackle it${m[1]}`],
    [/^Dashboard · Data sampah Indonesia(.*)$/, (m) => `Dashboard · Indonesia waste data${m[1]}`],
    [/^(.+) · Prototipe edukasi dan toko kerajinan\.$/, (m) => `${m[1]} · Education prototype and craft shop.`],
    [/^(.+), beranda$/, (m) => `${m[1]}, home`],
    [/^Dari (.+)$/, (m) => `Made from ${en(m[1].toLowerCase()) ?? m[1]}`],
    [/^Kurangi (.+)$/, (m) => `Decrease ${en(m[1]) ?? m[1]}`],
    [/^Tambah (.+)$/, (m) => `Increase ${en(m[1]) ?? m[1]}`],
    [/^Total (Rp.+)$/, (m) => 'Total ' + num(m[1])],
    [/^Pesanan diterima \(mode demo, belum tersimpan\)\. Total (.+)\.$/, (m) => `Order received (demo mode, not saved). Total ${num(m[1])}.`],
    [/^Pesanan #(\d+) diterima\. Total (.+)\. Kami akan menghubungimu lewat telepon\.$/, (m) => `Order #${m[1]} received. Total ${num(m[2])}. We will contact you by phone.`],
    [/^(\d+),(\d+)%$/, (m) => `${m[1]}.${m[2]}%`]
  ];
  function en(k) {
    if (Object.prototype.hasOwnProperty.call(D, k)) return D[k];
    for (const [re, fn] of R) { const m = k.match(re); if (m) return fn(m); }
    const o = num(k);
    return o === k ? null : o;
  }

  const KEY = 'lang';
  let lang = 'id';
  try { if (localStorage.getItem(KEY) === 'en') lang = 'en'; } catch { /* abaikan */ }

  const ws = (s) => s.replace(/\s+/g, ' ').trim();
  const orig = new WeakMap();
  const attrs = ['aria-label', 'placeholder', 'alt'];
  const origAttr = new WeakMap();
  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA']);

  function text(n) {
    const k = ws(n.nodeValue);
    if (!k) return;
    const t = en(k);
    if (t == null) return;
    orig.set(n, n.nodeValue);
    n.nodeValue = n.nodeValue.match(/^\s*/)[0] + t + n.nodeValue.match(/\s*$/)[0];
  }
  function attr(el) {
    for (const a of attrs) {
      if (!el.hasAttribute || !el.hasAttribute(a)) continue;
      const v = el.getAttribute(a), t = en(ws(v));
      if (t == null) continue;
      const o = origAttr.get(el) || {}; o[a] = v; origAttr.set(el, o);
      el.setAttribute(a, t);
    }
  }
  function walk(root) {
    if (root.nodeType === 3) { if (!SKIP.has(root.parentNode?.nodeName)) text(root); return; }
    if (root.nodeType !== 1 || SKIP.has(root.nodeName)) return;
    attr(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.nodeType === 1 && SKIP.has(n.nodeName)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    let n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) text(n); else attr(n); }
  }
  function restore() {
    const w = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3 && orig.has(n)) { n.nodeValue = orig.get(n); orig.delete(n); }
      else if (n.nodeType === 1 && origAttr.has(n)) { const o = origAttr.get(n); for (const a in o) n.setAttribute(a, o[a]); origAttr.delete(n); }
    }
  }

  const head = {};
  function meta() {
    const m = document.querySelector('meta[name="description"]');
    if (head.title === undefined) { head.title = document.title; head.desc = m?.content; }
    document.title = lang === 'en' ? (en(ws(head.title)) ?? head.title) : head.title;
    if (m) m.content = lang === 'en' ? (en(ws(head.desc)) ?? head.desc) : head.desc;
  }

  const obs = new MutationObserver((recs) => {
    if (lang !== 'en') return;
    obs.disconnect();
    for (const r of recs) {
      if (r.type === 'characterData') { orig.delete(r.target); text(r.target); }
      else r.addedNodes.forEach(walk);
    }
    watch();
  });
  const watch = () => obs.observe(document.body, { childList: true, subtree: true, characterData: true });

  function apply() {
    obs.disconnect();
    restore();
    if (lang === 'en') walk(document.body);
    meta();
    document.documentElement.lang = lang;
    const b = document.querySelector('.lang-toggle');
    if (b) {
      b.querySelectorAll('span').forEach((s) => s.classList.toggle('on', s.dataset.l === lang));
      b.setAttribute('aria-label', lang === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English');
    }
    watch();
  }

  function init() {
    const css = document.createElement('style');
    css.textContent = '.lang-toggle{font:600 .85rem/1 system-ui,sans-serif;border:1px solid #D5E8DC;background:#fff;color:#0F5F2D;border-radius:999px;padding:.45rem .75rem;cursor:pointer;margin-left:.75rem;white-space:nowrap}.lang-toggle:hover{background:#ECF8F0;border-color:#15803D}.lang-toggle span{opacity:.5}.lang-toggle span.on{opacity:1;color:#15803D}';
    document.head.appendChild(css);
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'lang-toggle';
    b.innerHTML = '<span data-l="id">ID</span> / <span data-l="en">EN</span>';
    b.addEventListener('click', () => {
      lang = lang === 'en' ? 'id' : 'en';
      try { localStorage.setItem(KEY, lang); } catch { /* abaikan */ }
      apply();
    });
    (document.querySelector('.nav__in') || document.querySelector('header') || document.body).appendChild(b);
    apply();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
