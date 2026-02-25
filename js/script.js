const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
});

// HERO AUTO SLIDER
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide(){
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Slide berganti setiap 4 detik
setInterval(showNextSlide, 4000);

//Aku nambahin biar datanya dinamis yah nih izinn
//data statitstik
const kependudukan = {
  rt: 5,
  rw: 2,
  kk: 78,
  penduduk: 268
};

Object.keys(kependudukan).forEach(key => {
  document.getElementById(key).textContent = kependudukan[key];
});

//data struktural
const strukturOrganisasi = [
  {
    jabatan: "Kepala Dukuh",
    nama: "Bapak Tyto Bagus Panuntun",
    foto: "img/kepaladukuh.jpg",
    utama: true 
  },
  {
    jabatan: "Ketua Karang Taruna",
    nama: "Saudara Wahyu Rudi Hartono",
    foto: "img/ketuakarta.jpg",
    utama: false
  },
  {
    jabatan: "Ketua PKK",
    nama: "Ibu Rizki Primayanti",
    foto: "img/ketuapkk.jpg",
    utama: false
  },
  {
    jabatan: "Ketua KWT",
    nama: "Ibu Suhartati",
    foto: "img/ketuakwt.jpg",
    utama: false
  },
  
];

const strukturGrid = document.querySelector('.struktur-grid');

if (strukturGrid) {
  strukturGrid.innerHTML = strukturOrganisasi.map(orang => `
    <div class="struktur-card ${orang.utama ? 'utama' : ''}">
      <div class="avatar">
        <img src="${orang.foto}" alt="${orang.jabatan}">
      </div>
      <h3>${orang.jabatan}</h3>
      <p>${orang.nama}</p>
    </div>
  `).join('');
}

//data umkm dan logic modal popupnya
const dataUMKM = [
  {
    rt: "RT 01",
    usaha: [
      {
        emoji: "🍠",
        nama: "Keripik Ketela Bu Almaidah",
        pemilik: "Ibu Almaidah",
        kategori: "Makanan",
        harga: "Rp 10.000 / bungkus",
        deskripsi: "Keripik ketela renyah buatan rumahan dengan cita rasa gurih dan manis alami. Tersedia dalam beberapa varian rasa. Cocok untuk oleh-oleh khas Tegalrejo.",
        gambar: "img/umkm/produk/examplekitelaproduk.jpg",   // isi dengan path foto, misal: "img/umkm/keripik.jpg"
        kontak: "08XXXXXXXXXX"
      }
    ]
  },
  {
    rt: "RT 02",
    usaha: [
      {
        emoji: "💆",
        nama: "Jasa Pijat Pak Sugiman",
        pemilik: "Bapak Sugiman",
        kategori: "Jasa",
        harga: "Rp 50.000 / sesi",
        deskripsi: "Layanan pijat tradisional Jawa berpengalaman. Melayani pijat relaksasi, pijat urut, dan pijat bayi. Bisa panggilan ke rumah.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      },
      {
        emoji: "🍯",
        nama: "Madu & Parfum Pak Mustofa",
        pemilik: "Bapak Mustofa",
        kategori: "Produk Lokal",
        harga: "Mulai Rp 35.000",
        deskripsi: "Madu asli hutan dan parfum lokal pilihan. Madu dipanen langsung dari lebah liar, tanpa campuran, kaya manfaat untuk kesehatan.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      }
    ]
  },
  {
    rt: "RT 03",
    usaha: [
      {
        emoji: "🎍",
        nama: "Kandang Bambu Lingga",
        pemilik: "Lingga Kurniawan",
        kategori: "Kerajinan",
        harga: "Mulai Rp 150.000",
        deskripsi: "Kerajinan kandang ternak dan furnitur bambu berkualitas. Dibuat dari bambu lokal pilihan, kuat dan tahan lama. Bisa pesan sesuai ukuran.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      },
      {
        emoji: "🍡",
        nama: "Jajanan Pasar Bu Yuli",
        pemilik: "Yuli Purwainingsih",
        kategori: "Makanan",
        harga: "Mulai Rp 2.000 / pcs",
        deskripsi: "Aneka jajanan pasar tradisional Jawa buatan sendiri setiap hari. Tersedia klepon, onde-onde, lemper, dan berbagai kue basah lainnya.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      },
      {
        emoji: "🥣",
        nama: "Growol & Makanan Tradisional",
        pemilik: "Ibu Duwimulyani",
        kategori: "Makanan",
        harga: "Mulai Rp 5.000",
        deskripsi: "Growol — makanan tradisional khas Kulon Progo berbahan singkong fermentasi. Sehat, lezat, dan langka. Cocok dimakan dengan lauk gurih.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      },
      {
        emoji: "🍮",
        nama: "Jenang Sumsum",
        pemilik: "Warga RT 03",
        kategori: "Makanan",
        harga: "Rp 3.000 / porsi",
        deskripsi: "Jenang sumsum khas Jawa berbahan tepung beras dengan kuah gula merah yang legit. Dibuat segar setiap hari, cocok untuk sarapan.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      }
    ]
  },
  {
    rt: "RT 04",
    usaha: [
      {
        emoji: "🍞",
        nama: "Roti Bakar Mas Parwanto",
        pemilik: "Mas Parwanto",
        kategori: "Kuliner",
        harga: "Mulai Rp 8.000",
        deskripsi: "Roti bakar dengan berbagai pilihan topping: coklat, keju, strawberry, dan kombinasi lainnya. Renyah di luar, lembut di dalam.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      },
      {
        emoji: "🧵",
        nama: "Toko & Jasa Jahit Bu Linda",
        pemilik: "Ibu Linda",
        kategori: "Jasa & Retail",
        harga: "Jahit mulai Rp 25.000",
        deskripsi: "Toko kelontong lengkap sekaligus melayani jasa jahit pakaian. Menerima jahit baju, celana, seragam, dan permak. Hasil rapi dan tepat waktu.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      },
      {
        emoji: "🏪",
        nama: "Toko Kelontong Bu Anis",
        pemilik: "Ibu Anis",
        kategori: "Retail",
        harga: "Harga pasaran",
        deskripsi: "Toko kelontong menyediakan kebutuhan sehari-hari warga RT 04. Buka setiap hari dari pagi hingga malam.",
        gambar: "",
        kontak: "08XXXXXXXXXX"
      }
    ]
  },
  {
    rt: "RT 05",
    usaha: [
      {
        emoji: "🍩",
        nama: "Jajanan Pasar Bu Kusparini",
        pemilik: "Ibu Kusparini",
        kategori: "Makanan",
        harga: "Mulai Rp 2.000 / pcs",
        deskripsi: "Beragam jajanan pasar tradisional buatan tangan setiap pagi. Segar, tanpa pengawet, dengan cita rasa otentik khas Jawa.",
        gambar: "",
        kontak: "08dawdadwadwad"
      },
      {
        emoji: "🏪",
        nama: "Toko Kelontong Rizyu",
        pemilik: "Ibu Rizky Ayu",
        kategori: "Retail",
        harga: "Harga Pasar",
        deskripsi: "Beragam kebutuhan hidup. Menjual alat alat rumah tangga maupun diluar rumah tangga",
        gambar: "",
        kontak: "089526362716"
      }
    ]
  }
];

// =====================================================
// RENDER KARTU RT
// =====================================================
const grid = document.getElementById('umkmGrid');

grid.innerHTML = dataUMKM.map(rt => `
  <div class="umkm-card">
    <div class="umkm-header">
      <h3>${rt.rt}</h3>
      <span class="badge">${rt.usaha.length} UMKM</span>
    </div>
    <ul class="umkm-list">
      ${rt.usaha.map((u, i) => `
        <li class="umkm-item" data-rt="${rt.rt}" data-idx="${dataUMKM.indexOf(rt)}" data-usaha="${i}">
          <span class="emoji">${u.emoji}</span>
          <div class="umkm-item-info">
            <div class="nama-usaha">${u.nama}</div>
            <div class="pemilik">${u.pemilik}</div>
          </div>
          <span class="lihat-btn">Lihat →</span>
        </li>
      `).join('')}
    </ul>
  </div>
`).join('');

// =====================================================
// MODAL LOGIC
// =====================================================
const overlay   = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTutup = document.getElementById('modalTutup');
const modalBeli  = document.getElementById('modalBeli');

function bukaModal(rtIdx, usahaIdx) {
  const usaha = dataUMKM[rtIdx].usaha[usahaIdx];
  const rt    = dataUMKM[rtIdx].rt;

  document.getElementById('modalRt').textContent      = rt;
  document.getElementById('modalNama').textContent    = usaha.nama;
  document.getElementById('modalPemilik').textContent = `👤 ${usaha.pemilik}`;
  document.getElementById('modalHarga').textContent   = usaha.harga;
  document.getElementById('modalDesc').textContent    = usaha.deskripsi;
  document.getElementById('modalKategori').textContent = usaha.kategori;
  document.getElementById('modalEmoji').textContent   = usaha.emoji;

  // Gambar: tampilkan jika ada, fallback ke emoji
  const img = document.getElementById('modalGambar');
  const fallback = document.getElementById('modalEmoji');
  if (usaha.gambar) {
    img.src = usaha.gambar;
    img.classList.add('loaded');
    fallback.style.display = 'none';
  } else {
    img.classList.remove('loaded');
    fallback.style.display = 'block';
  }

  // Tombol hubungi — buka WhatsApp kalau nomor valid
  modalBeli.onclick = () => {
    const nomor = usaha.kontak.replace(/\D/g, '');
    if (nomor.length > 8) {
      window.open(`https://wa.me/62${nomor.substring(1)}?text=Halo, saya tertarik dengan ${usaha.nama}`, '_blank');
    } else {
      alert(`Hubungi: ${usaha.kontak}`);
    }
  };

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function tutupModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Klik item UMKM
grid.addEventListener('click', e => {
  const item = e.target.closest('.umkm-item');
  if (!item) return;
  bukaModal(Number(item.dataset.idx), Number(item.dataset.usaha));
});

// Tutup modal
modalClose.addEventListener('click', tutupModal);
modalTutup.addEventListener('click', tutupModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) tutupModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') tutupModal();
});


// data agenda dan logic ketika sudah lewat
const dataAgenda = [
  {
    tanggal: "2026-07-15",
    judul: "Musyawarah Dusun",
    deskripsi: "Rapat koordinasi dan evaluasi program pembangunan dusun."
  },
  {
    tanggal: "2026-07-22",
    judul: "Kerja Bakti Lingkungan",
    deskripsi: "Kegiatan gotong royong membersihkan lingkungan dusun."
  },
  {
    tanggal: "2026-08-05",
    judul: "Pengajian Rutin",
    deskripsi: "Kegiatan pembinaan spiritual dan silaturahmi warga."
  },
  //data dibawah ini untuk testing apakah logicnya jalan
  {
    tanggal: "2026-08-17",
    judul: "Peringatan HUT RI",
    deskripsi: "Upacara dan berbagai lomba warga dalam rangka kemerdekaan."
  },
];

const BULAN = ["JAN","FEB","MAR","APR","MEI","JUN","JUL","AGT","SEP","OKT","NOV","DES"];

const hari_ini = new Date();
hari_ini.setHours(0, 0, 0, 0); // mulai dari awal hari ini

const agendaMendatang = dataAgenda
  .filter(a => new Date(a.tanggal) >= hari_ini)  // buang yang sudah lewat
  .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal)) // urutkan terdekat
  .slice(0, 3); // ambil 3 terdekat saja

const timelineEl = document.querySelector('.timeline');

if (timelineEl) {
  if (agendaMendatang.length === 0) {
    timelineEl.innerHTML = `
      <p style="text-align:center; color:#888; padding:40px 0;">
        Tidak ada agenda mendatang saat ini.
      </p>`;
  } else {
    timelineEl.innerHTML = agendaMendatang.map(a => {
      const tgl = new Date(a.tanggal);
      const tanggal = String(tgl.getDate()).padStart(2, '0');
      const bulan = BULAN[tgl.getMonth()];
      return `
        <div class="timeline-item">
          <div class="timeline-date">
            <span class="tanggal">${tanggal}</span>
            <span class="bulan">${bulan}</span>
          </div>
          <div class="timeline-content">
            <h3>${a.judul}</h3>
            <p>${a.deskripsi}</p>
          </div>
        </div>`;
    }).join('');
  }
}

// NAVBAR TRANSPARAN
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});