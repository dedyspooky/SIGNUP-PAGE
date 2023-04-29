
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

// FORM DATA
const scriptURL = 'https://script.google.com/macros/s/AKfycbyvdqVnJfORhzBSyBJwal8MHYmzRD1NvE8dlo6EtJj7xgCYU1bBhXhz2BiIWTxdVNhJ/exec'
const form = document.forms['Sign-Up']

form.addEventListener('sign-up', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})