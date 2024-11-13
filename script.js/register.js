function togglePassword(inputId, icon) {
  var passwordField = document.getElementById(inputId);
  var iconElement = icon;

  // Toggle the password field type
  if (passwordField.type === "password") {
      passwordField.type = "text"; // Show the password
      iconElement.classList.remove("fa-eye"); // Remove eye icon
      iconElement.classList.add("fa-eye-slash"); // Add eye-slash icon
  } else {
      passwordField.type = "password"; // Hide the password
      iconElement.classList.remove("fa-eye-slash"); // Remove eye-slash icon
      iconElement.classList.add("fa-eye"); // Add eye icon
  }
}



// Fungsi untuk @ email
function validateEmail() {
  var email = document.getElementById("email").value;
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return false; // Mencegah form dikirim
  }
  return true; // Mengizinkan form dikirim
}

