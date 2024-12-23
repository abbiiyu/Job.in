document.addEventListener("DOMContentLoaded", () => {
    // Simulasi data pengguna dari database
    const userName = "Salma Rahman"; // Nama pengguna
    const userImage = ""; // URL gambar profil pengguna (kosong jika menggunakan inisial)

    // Mengambil elemen yang diperlukan
    const profileNameElement = document.querySelector(".profile-name"); // Nama pengguna
    const profileImgElement = document.getElementById("profileIcon"); // Ikon profil

    // Menampilkan nama pengguna di dropdown
    if (profileNameElement) {
        profileNameElement.textContent = userName;
    }

    // Menampilkan ikon profil (gambar atau inisial)
    if (profileImgElement) {
        if (userImage) {
            // Jika gambar tersedia, gunakan gambar
            profileImgElement.innerHTML = `<img src="${userImage}" alt="Profile Icon" class="profile-img">`;
        } else {
            // Jika gambar tidak tersedia, gunakan inisial
            const initials = userName
                .split(" ")
                .map(word => word.charAt(0)) // Ambil huruf pertama dari setiap kata
                .join(""); // Gabungkan inisial
            profileImgElement.textContent = initials;

            // Debugging: Cek inisial yang dihasilkan
            console.log("Inisial yang dihasilkan:", initials);
        }
    }
});








function toggleDropdown() {
const dropdown = document.getElementById('dropdownMenu');
dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Menutup dropdown jika klik di luar elemen
document.addEventListener('click', function(event) {
const profileIcon = document.getElementById('profileIcon');
const dropdown = document.getElementById('dropdownMenu');

if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
}
});

// POPUP ORDER

const orderLink = document.getElementById("orderLink"); // Sesuaikan ID dengan elemen Anda
const orderPopup = document.getElementById("orderPopup");

// Ketika "Order" diklik
orderLink.addEventListener("click", (event) => {
    event.preventDefault(); // Menghentikan perilaku default
    orderPopup.style.display = orderPopup.style.display === "block" ? "none" : "block";
});

// Klik di luar popup untuk menutupnya
document.addEventListener("click", (event) => {
    if (!orderPopup.contains(event.target) && event.target !== orderLink) {
        orderPopup.style.display = "none";
    }
});