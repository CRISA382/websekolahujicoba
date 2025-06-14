document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const noWa = document.getElementById("whatsapp").value.trim();
    const nama = document.getElementById("name").value.trim();
    const kota = document.getElementById("city").value.trim();

    if (!noWa || !nama || !kota) {
        alert("Semua data harus diisi!");
        return;
    }

    // Ganti nomor owner WhatsApp di bawah ini (pakai format internasional tanpa spasi)
    const nomorOwner = "6281234567890";

    const pesan = `Halo Admin, saya ingin mendaftar.%0ANama: ${nama}%0AKota: ${kota}%0ANo WA: ${noWa}`;
    const url = `https://wa.me/${nomorOwner}?text=${pesan}`;

    window.open(url, '_blank');
});
