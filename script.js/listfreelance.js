
 const userName = "Salma Rahman";
        

 const initials = userName.charAt(0);
 

 document.getElementById("profileIcon").textContent = initials;





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