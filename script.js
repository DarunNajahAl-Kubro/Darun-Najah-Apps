// ==========================================
// 1. PENGATURAN MODE GELAP (SINKRON BERANDA & HALAMAN BACAAN)
// ==========================================
const tombolTema = document.getElementById("TombolTema");
const teksTema = document.getElementById("teksTema");

function perbaruiLabelTema(sedangGelap) {
  if (teksTema) {
    teksTema.textContent = sedangGelap ? "Mode Terang" : "Mode Gelap";
  } else if (tombolTema) {
    tombolTema.textContent = sedangGelap ? "Mode Terang" : "Mode Gelap";
  }
}

if (localStorage.getItem("temaDarunNajah") === "gelap") {
  document.body.classList.add("gelap");
  perbaruiLabelTema(true);
}

if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    const sedangGelap = document.body.classList.contains("gelap");
    perbaruiLabelTema(sedangGelap);
    localStorage.setItem("temaDarunNajah", sedangGelap ? "gelap" : "terang");
  });
}

// ==========================================
// 2. NAVIGASI SUB-LAYAR DI BERANDA
// ==========================================
function bukaLayar(idLayar) {
  const daftarLayar = [
    "home-screen",
    "submenu-screen",
    "profil-screen",
    "galeri-screen",
    "pendaftaran-screen"
  ];

  daftarLayar.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  const target = document.getElementById(idLayar);
  if (target) {
    target.style.display = "block";
    window.scrollTo(0, 0);
  }
}

// ==========================================
// 3. KATALOG FILE HTML SESUAI FOLDER GITHUB
// ==========================================
const katalogAmalan = [
  // Folder bacaan/
  { judul: "Istighosah", sub: "Bacaan Istighosah Ma'had Darun Najah", url: "bacaan/istighosah.html", kategori: "wirid", kataKunci: "istighosah doa" },
  { judul: "Tahlil", sub: "Bacaan Tahlil Lengkap Ma'had Darun Najah", url: "bacaan/tahlil.html", kategori: "wirid", kataKunci: "tahlil arwah" },
  { judul: "Wirid Setelah Sholat", sub: "Dzikir Dan Do'a Sholat Fardhu", url: "bacaan/wirid.html", kategori: "wirid", kataKunci: "wirid dzikir sholat fardhu" },

  // Folder quran/ (Amalan Jum'at Pagi)
  { judul: "Surah Yasin", sub: "Amalan Jum'at Pagi PP Darun Najah", url: "quran/yasin.html", kategori: "jumat", kataKunci: "yasin jumat" },
  { judul: "Surah Ar-Rahman", sub: "Amalan Jum'at Pagi PP Darun Najah", url: "quran/ar-rahman.html", kategori: "jumat", kataKunci: "ar rahman jumat" },
  { judul: "Surah Al-Waqi'ah", sub: "Amalan Jum'at Pagi PP Darun Najah", url: "quran/al-waqiah.html", kategori: "jumat", kataKunci: "al waqiah jumat" },
  { judul: "Surah Al-Kahfi", sub: "Amalan Jum'at Pagi PP Darun Najah", url: "quran/al-kahfi.html", kategori: "jumat", kataKunci: "al kahfi jumat" },
  { judul: "Surah Al-Mulk", sub: "Amalan Jum'at Pagi PP Darun Najah", url: "quran/al-mulk.html", kategori: "jumat", kataKunci: "al mulk tabarak jumat" },

  // Folder maulid/
  { judul: "Maulid Ad-Diba'i", sub: "Kumpulan Teks Maulid", url: "maulid/ad-diba.html", kategori: "maulid", kataKunci: "maulid diba dibai shalawat" },

  // Folder pidato/
  { judul: "Pembukaan Pidato Bahasa Indonesia", sub: "Kumpulan Mukadimah Khitobah", url: "pidato/indo.html", kategori: "pidato", kataKunci: "pidato mukadimah indonesia" },
  { judul: "Pembukaan Pidato Bahasa Arab", sub: "Kumpulan Mukadimah Khitobah", url: "pidato/arab.html", kategori: "pidato", kataKunci: "pidato mukadimah arab" },
  { judul: "Pembukaan Pidato Bahasa Inggris", sub: "Kumpulan Mukadimah Khitobah", url: "pidato/inggris.html", kategori: "pidato", kataKunci: "pidato mukadimah inggris english" },
  { judul: "Pembukaan Pidato Bahasa Jawa", sub: "Kumpulan Mukadimah Khitobah", url: "pidato/jawa.html", kategori: "pidato", kataKunci: "pidato mukadimah jawa" },

  // Folder bilal/
  { judul: "Bilal Jum'at", sub: "Panduan Bilal Sholat Jum'at", url: "bilal/jumat.html", kategori: "bilal", kataKunci: "bilal jumat" },
  { judul: "Bilal Idul Adha", sub: "Panduan Bilal Sholat Idul Adha", url: "bilal/idul-adha.html", kategori: "bilal", kataKunci: "bilal idul adha iddain" },
  { judul: "Bilal Idul Fitri", sub: "Panduan Bilal Sholat Idul Fitri", url: "bilal/idul-fitri.html", kategori: "bilal", kataKunci: "bilal idul fitri iddain" }
];

function bukaSubMenu(jenis) {
  bukaLayar("submenu-screen");
  const judulEl = document.getElementById("judul-submenu");
  const deskEl = document.getElementById("desk-submenu");
  const listEl = document.getElementById("list-submenu");

  if (jenis === "jumat") {
    judulEl.textContent = "Amalan Jum'at Pagi";
    deskEl.textContent = "Surat-surat pilihan amalan Jum'at pagi PP Darun Najah:";
  } else if (jenis === "pidato") {
    judulEl.textContent = "Pembukaan Pidato";
    deskEl.textContent = "Pilih bahasa mukadimah pidato:";
  } else if (jenis === "bilal") {
    judulEl.textContent = "Panduan Teks Bilal";
    deskEl.textContent = "Bilal sholat Jum'at dan dua hari raya ('Idaini):";
  }

  const daftarFilter = katalogAmalan.filter((item) => item.kategori === jenis);
  listEl.innerHTML = daftarFilter
    .map(
      (item) => `
      <li>
        <a href="${item.url}">
          <strong>${item.judul}</strong>
          <span>${item.sub}</span>
        </a>
      </li>`
    )
    .join("");
}

// ==========================================
// 4. PENCARIAN CEPAT AMALAN DI BERANDA
// ==========================================
const kolomCari = document.getElementById("kolomCari");
const hasilCariBox = document.getElementById("hasilCariBox");
const daftarHasilCari = document.getElementById("daftarHasilCari");
const pesanKosong = document.getElementById("pesanKosong");

if (kolomCari && hasilCariBox) {
  kolomCari.addEventListener("input", () => {
    const query = kolomCari.value.toLowerCase().trim();

    if (!query) {
      hasilCariBox.hidden = true;
      return;
    }

    hasilCariBox.hidden = false;
    const cocok = katalogAmalan.filter(
      (item) =>
        item.judul.toLowerCase().includes(query) ||
        item.sub.toLowerCase().includes(query) ||
        item.kataKunci.includes(query)
    );

    if (cocok.length > 0) {
      daftarHasilCari.innerHTML = cocok
        .map(
          (item) => `
          <li>
            <a href="${item.url}">
              <strong>${item.judul}</strong>
              <span>${item.sub}</span>
            </a>
          </li>`
        )
        .join("");
      if (pesanKosong) pesanKosong.hidden = true;
    } else {
      daftarHasilCari.innerHTML = "";
      if (pesanKosong) pesanKosong.hidden = false;
    }
  });
}

// ==========================================
// 5. TANGGAL & JADWAL SHOLAT KUBAH HEADER
// ==========================================
function perbaruiTanggalDanSholat() {
  const elTanggal = document.getElementById("tanggal-lengkap");
  const elSholat = document.getElementById("sholat-berikutnya");
  const elCountdown = document.getElementById("hitung-mundur");
  if (!elTanggal || !elSholat || !elCountdown) return;

  const sekarang = new Date();
  const tglMasehi = sekarang.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let tglHijriah = "1448 H";
  try {
    tglHijriah = new Intl.DateTimeFormat("id-ID-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(sekarang);
  } catch (e) {}

  elTanggal.textContent = `${tglMasehi} / ${tglHijriah}`;

  const jadwalKediri = [
    { nama: "Subuh", jam: 3, menit: 40 },
    { nama: "Dzuhur", jam: 11, menit: 18 },
    { nama: "Ashar", jam: 14, menit: 42 },
    { nama: "Maghrib", jam: 17, menit: 32 },
    { nama: "Isya", jam: 18, menit: 46 }
  ];

  let berikutnya = null;
  let targetWaktu = null;

  for (let item of jadwalKediri) {
    const kandidat = new Date(sekarang);
    kandidat.setHours(item.jam, item.menit, 0, 0);
    if (kandidat > sekarang) {
      berikutnya = item;
      targetWaktu = kandidat;
      break;
    }
  }

  if (!berikutnya) {
    berikutnya = jadwalKediri[0];
    targetWaktu = new Date(sekarang);
    targetWaktu.setDate(targetWaktu.getDate() + 1);
    targetWaktu.setHours(berikutnya.jam, berikutnya.menit, 0, 0);
  }

  const jamStr = String(berikutnya.jam).padStart(2, "0");
  const menitStr = String(berikutnya.menit).padStart(2, "0");
  elSholat.innerHTML = `${berikutnya.nama} ${jamStr}:${menitStr} <small>WIB</small>`;

  const selisih = Math.max(0, Math.floor((targetWaktu - sekarang) / 1000));
  const j = String(Math.floor(selisih / 3600)).padStart(2, "0");
  const m = String(Math.floor((selisih % 3600) / 60)).padStart(2, "0");
  const d = String(selisih % 60).padStart(2, "0");
  elCountdown.textContent = `- ${j} : ${m} : ${d}`;
}

perbaruiTanggalDanSholat();
setInterval(perbaruiTanggalDanSholat, 1000);

// ==========================================
// 6. FORM PENDAFTARAN -> SIAP HUBUNG KE APLIKASI DATA PONDOK
// ==========================================
function kirimDataPendaftaran(event) {
  event.preventDefault();

  const dataCalonSantri = {
    id_registrasi: "PSB-" + Date.now(),
    waktu_daftar: new Date().toISOString(),
    nama: document.getElementById("psb-nama").value.trim(),
    nik: document.getElementById("psb-nik").value.trim(),
    jenis_kelamin: document.getElementById("psb-jk").value,
    tanggal_lahir: document.getElementById("psb-tgl").value,
    asal_sekolah: document.getElementById("psb-sekolah").value.trim(),
    alamat: document.getElementById("psb-alamat").value.trim(),
    program: document.getElementById("psb-program").value,
    nama_wali: document.getElementById("psb-wali").value.trim(),
    no_wa_wali: document.getElementById("psb-wa").value.trim(),
    status_verifikasi: "Menunggu Verifikasi"
  };

  // Simpan ke antrean lokal (Nanti tinggal sambungkan ke Firebase Firestore koleksi 'calon_santri' di sini)
  const antrean = JSON.parse(localStorage.getItem("database_calon_santri") || "[]");
  antrean.push(dataCalonSantri);
  localStorage.setItem("database_calon_santri", JSON.stringify(antrean));

  const nomorAdmin = "6287712151351"; 
  const pesanWA = `Assalamu'alaikum Admin PSB *PP Darun Najah Al-Kubro*,
Saya telah mengisi formulir pendaftaran online:

*ID Reg:* ${dataCalonSantri.id_registrasi}
*Nama:* ${dataCalonSantri.nama}
*NIK/NISN:* ${dataCalonSantri.nik}
*JK / Tgl Lahir:* ${dataCalonSantri.jenis_kelamin}, ${dataCalonSantri.tanggal_lahir}
*Asal Sekolah:* ${dataCalonSantri.asal_sekolah}
*Alamat:* ${dataCalonSantri.alamat}
*Program:* ${dataCalonSantri.program}
*Wali:* ${dataCalonSantri.nama_wali} (${dataCalonSantri.no_wa_wali})

Mohon informasi proses pemberkasan selanjutnya.`;

  alert("Data pendaftaran berhasil dicatat! Anda akan diarahkan ke WhatsApp panitia.");
  window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesanWA)}`, "_blank");
  document.getElementById("form-psb").reset();
}

// ==========================================
// 7. PENGATUR UKURAN HURUF ARAB (UNTUK SEMUA HALAMAN BACAAN)
// ==========================================
const tombolPerkecil = document.getElementById("perkecilFont");
const tombolPerbesar = document.getElementById("perbesarFont");
const semuaTeksArab = document.querySelectorAll(".teks-arab");
const semuaTeksArab1 = document.querySelectorAll(".teks-arab1");

let ukuranArab = parseFloat(localStorage.getItem("ukuranArabDarunNajah")) || 1.75;
let ukuranArab1 = parseFloat(localStorage.getItem("ukuranArabDarunNajah1")) || 1.75;

function terapkanUkuranArab() {
  semuaTeksArab.forEach((elemen) => {
    elemen.style.fontSize = `${ukuranArab}rem`;
  });
}

function terapkanUkuranArab1() {
  semuaTeksArab1.forEach((elemen) => {
    elemen.style.fontSize = `${ukuranArab1}rem`;
  });
}

if (semuaTeksArab.length > 0) terapkanUkuranArab();
if (semuaTeksArab1.length > 0) terapkanUkuranArab1();

if (tombolPerkecil) {
  tombolPerkecil.addEventListener("click", () => {
    if (semuaTeksArab.length > 0 && ukuranArab > 1.35) {
      ukuranArab = +(ukuranArab - 0.15).toFixed(2);
      terapkanUkuranArab();
      localStorage.setItem("ukuranArabDarunNajah", ukuranArab);
    }
    if (semuaTeksArab1.length > 0 && ukuranArab1 > 1.35) {
      ukuranArab1 = +(ukuranArab1 - 0.15).toFixed(2);
      terapkanUkuranArab1();
      localStorage.setItem("ukuranArabDarunNajah1", ukuranArab1);
    }
  });
}

if (tombolPerbesar) {
  tombolPerbesar.addEventListener("click", () => {
    if (semuaTeksArab.length > 0 && ukuranArab < 2.8) {
      ukuranArab = +(ukuranArab + 0.15).toFixed(2);
      terapkanUkuranArab();
      localStorage.setItem("ukuranArabDarunNajah", ukuranArab);
    }
    if (semuaTeksArab1.length > 0 && ukuranArab1 < 2.8) {
      ukuranArab1 = +(ukuranArab1 + 0.15).toFixed(2);
      terapkanUkuranArab1();
      localStorage.setItem("ukuranArabDarunNajah1", ukuranArab1);
    }
  });
}