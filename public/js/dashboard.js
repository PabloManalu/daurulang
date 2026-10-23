const $ = (s) => document.querySelector(s);
const fmt = (n) => n.toLocaleString('id-ID', { maximumFractionDigits: 2 }) + '%';

// Data SIPSN 2024 (lihat catatan sumber di halaman).
const JENIS = [
  { n: 'Sisa makanan', v: 39.43, c: '#15803D' },
  { n: 'Plastik', v: 19.54, c: '#22A559' },
  { n: 'Kayu/ranting', v: 12.7, c: '#6CCB8F' },
  { n: 'Kertas/karton', v: 11.09, c: '#A6E3BC' }
];
JENIS.push({ n: 'Lainnya (logam, kain, kaca, karet, dll.)', v: +(100 - JENIS.reduce((s, x) => s + x.v, 0)).toFixed(2), c: '#D5E8DC' });

const SUMBER = [
  { n: 'Rumah tangga', v: 50.8 }, { n: 'Pasar', v: 16.67 }, { n: 'Kawasan', v: 11.31 },
  { n: 'Perniagaan', v: 11.01 }, { n: 'Perkantoran', v: 5.15 }, { n: 'Fasilitas publik', v: 3.53 }, { n: 'Lainnya', v: 1.53 }
];

const kpi = [
  ['32,8 jt ton', 'timbulan sampah nasional 2024'],
  ['303', 'kabupaten/kota yang melapor'],
  ['39,43%', 'sisa makanan, jenis terbanyak'],
  ['50,8%', 'berasal dari rumah tangga']
];
$('#kpis').innerHTML = kpi.map(([a, b]) => `<div class="box"><div class="stat">${a}</div><p class="stat-label">${b}</p></div>`).join('');

let acc = 0;
$('#donut').style.background = 'conic-gradient(' + JENIS.map((x) => { const s = acc; acc += x.v; return `${x.c} ${s}% ${acc}%`; }).join(',') + ')';
$('#legend').innerHTML = JENIS.map((x) => `<li><i style="background:${x.c}"></i>${x.n}<b>${fmt(x.v)}</b></li>`).join('');

const max = Math.max(...SUMBER.map((x) => x.v));
$('#sources').innerHTML = SUMBER.map((x) => `<li title="${x.n}: ${fmt(x.v)}"><span>${x.n}</span><span class="track"><span class="fill" style="width:${x.v / max * 100}%"></span></span><b>${fmt(x.v)}</b></li>`).join('');

const org = JENIS[0].v + JENIS[2].v, rec = JENIS[1].v + JENIS[3].v;
$('#insight').textContent = `Sekitar ${fmt(org)} sampah berupa sisa makanan dan kayu/ranting yang bisa dikompos, dan ${fmt(rec)} berupa plastik serta kertas/karton yang berpotensi didaur ulang. Karena rumah tangga menyumbang ${fmt(SUMBER[0].v)}, memilah dan mengolah sampah di rumah adalah langkah dengan dampak terbesar.`;

$('#tbl').innerHTML = '<thead><tr><th>Jenis sampah</th><th>Porsi</th></tr></thead><tbody>' + JENIS.map((x) => `<tr><td>${x.n}</td><td>${fmt(x.v)}</td></tr>`).join('') + '</tbody>';
