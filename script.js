
// SHOW HIDE PASSWORD
const passwordInput = document.getElementById('input-3');
const showPasswordButton = document.getElementById('show-container');

showPasswordButton.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.innerHTML = '<i class="fa-solid fa-eye" id="show"></i>';
  } else {
    passwordInput.type = 'password';
    showPasswordButton.innerHTML = '<i class="fa-sharp fa-solid fa-eye-slash"></i>';
  }
});

// PASSWORD VALIDATOR
document.querySelector("#input-3").addEventListener("input", function() {
  if (this.validity.patternMismatch) {
    document.querySelector("#passwordError").textContent = "Password must contain at least one digit and one letter, and be at least 8 characters long.";
  } else {
    document.querySelector("#passwordError").textContent = "";
  }
});