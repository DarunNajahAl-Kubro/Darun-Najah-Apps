// 1. Pengaturan Mode Gelap (Tersimpan otomatis di memori HP)
const tombolTema = document.getElementById("TombolTema");

if (localStorage.getItem("temaDarunNajah") === "gelap") {
  document.body.classList.add("gelap");
  if (tombolTema) tombolTema.textContent = "Mode Terang";
}

if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    const sedangGelap = document.body.classList.contains("gelap");

    tombolTema.textContent = sedangGelap ? "Mode Terang" : "Mode Gelap";
    localStorage.setItem("temaDarunNajah", sedangGelap ? "gelap" : "terang");
  });
}

// 2. Pencarian Cepat Amalan di Beranda
const kolomCari = document.getElementById("kolomCari");
const semuaKategori = document.querySelectorAll(".kategori");
const pesanKosong = document.getElementById("pesanKosong");

if (kolomCari) {
  kolomCari.addEventListener("input", () => {
    const kataKunci = kolomCari.value.toLowerCase().trim();
    let totalCocok = 0;

    semuaKategori.forEach((kategori) => {
      const daftarItem = kategori.querySelectorAll("li");
      let cocokDiKategori = 0;

      daftarItem.forEach((item) => {
        const isiTeks = item.textContent.toLowerCase();
        if (isiTeks.includes(kataKunci)) {
          item.style.display = "";
          cocokDiKategori++;
          totalCocok++;
        } else {
          item.style.display = "none";
        }
      });

      kategori.style.display = cocokDiKategori > 0 ? "" : "none";
    });

    if (pesanKosong) {
      pesanKosong.hidden = totalCocok > 0;
    }
  });
}

// 3. Pengatur Ukuran Huruf Arab di Halaman Bacaan
const tombolPerkecil = document.getElementById("perkecilFont");
const tombolPerbesar = document.getElementById("perbesarFont");
const semuaTeksArab = document.querySelectorAll(".teks-arab");
const semuaTeksArab1 = document.querySelectorAll(".teks-arab1")

let ukuranArab = parseFloat(localStorage.getItem("ukuranArabDarunNajah")) || 1.75;

function terapkanUkuranArab() {
  semuaTeksArab.forEach((elemen) => {
    elemen.style.fontSize = `${ukuranArab}rem`;
  });
}

if (semuaTeksArab.length > 0) {
  terapkanUkuranArab();

  if (tombolPerkecil) {
    tombolPerkecil.addEventListener("click", () => {
      if (ukuranArab > 1.35) {
        ukuranArab = +(ukuranArab - 0.15).toFixed(2);
        terapkanUkuranArab();
        localStorage.setItem("ukuranArabDarunNajah", ukuranArab);
      }
    });
  }

  if (tombolPerbesar) {
    tombolPerbesar.addEventListener("click", () => {
      if (ukuranArab < 2.8) {
        ukuranArab = +(ukuranArab + 0.15).toFixed(2);
        terapkanUkuranArab();
        localStorage.setItem("ukuranArabDarunNajah", ukuranArab);
      }
    });
  }
}

let ukuranArab1 = parseFloat(localStorage.getItem("ukuranArabDarunNajah1")) || 1.75;

function terapkanUkuranArab1() {
  semuaTeksArab1.forEach((elemen) => {
    elemen.style.fontSize = `${ukuranArab1}rem`;
  });
}

if (semuaTeksArab1.length > 0) {
  terapkanUkuranArab1();

  if (tombolPerkecil) {
    tombolPerkecil.addEventListener("click", () => {
      if (ukuranArab1 > 1.35) {
        ukuranArab1 = +(ukuranArab1 - 0.15).toFixed(2);
        terapkanUkuranArab1();
        localStorage.setItem("ukuranArabDarunNajah1", ukuranArab1);
      }
    });
  }

  if (tombolPerbesar) {
    tombolPerbesar.addEventListener("click", () => {
      if (ukuranArab1 < 2.8) {
        ukuranArab1 = +(ukuranArab1 + 0.15).toFixed(2);
        terapkanUkuranArab1();
        localStorage.setItem("ukuranArabDarunNajah1", ukuranArab1);
      }
    });
  }
}