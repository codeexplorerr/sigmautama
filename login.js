document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil nilai inputan
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Tentukan password yang benar
    const correctPassword = "12345"; // Password yang sama untuk semua pengguna

    // Validasi login
    if (password === correctPassword) {
        // Jika password benar, simpan nama pengguna yang login\        addLoggedUser(username);
        // Bersihkan pesan kesalahan 
        document.getElementById("error-message").innerText = "";
        
        // Redirect ke halaman beranda.html setelah login berhasil
        window.location.href = "beranda.html";
    } else {
        // Jika login gagal
        document.getElementById("error-message").innerText = "Username atau password salah!";
    }
});
 
// Fungsi untuk menambahkan pengguna yang login ke daftar masukkan
function addLoggedUser(username) {
    let users = localStorage.getItem("loggedUsers");
    users = users ? JSON.parse(users) : [];

    // Tambahkan pengguna baru ke daftar jika belum ada
    if (!users.includes(username)) {
        users.push(username);
        localStorage.setItem("loggedUsers", JSON.stringify(users));
    }
}

// Fungsi untuk menampilkan pengguna yang sudah login
function displayLoggedUsers() {
    const users = localStorage.getItem("loggedUsers");
    const userList = document.getElementById("user-list");

    if (users) {
        const parsedUsers = JSON.parse(users);
        userList.innerHTML = '';
        parsedUsers.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user;
            userList.appendChild(li);
        });
    }
}

// Membersihkan nama pengguna yang sudah keluar dari halaman web
localStorage.clear();

// Menampilkan daftar pengguna yang sudah login ketika halaman dimuat
window.onload = displayLoggedUsers;
