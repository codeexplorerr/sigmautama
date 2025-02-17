document.getElementById("submitBtn").addEventListener("click", function() {
    // Ambil nilai input dari form
    let name = document.getElementById("name").value;
    // let company = document.getElementById("company").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Cek jika ada input yang kosong
    if (!name || !email || !subject || !message) {
        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return;
    }

    // Format pesan WhatsApp
    let whatsappMessage = `Halo, saya *${name}*
    📧 Email: ${email}%0A
    📱 Subject: ${subject}%0A%0A
    📝 *Pesan:* %0A${message}%0A%0A
    Terima kasih!`;

    // Ganti dengan nomor WhatsApp tujuan (tanpa "+" dan "-")
    let whatsappNumber = "6281382175163"; 

    // Buat URL WhatsApp
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Arahkan pengguna ke WhatsApp
    window.open(whatsappURL, "_blank");
});