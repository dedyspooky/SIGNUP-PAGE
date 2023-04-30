
const passwordInput = document.getElementById('input-3');
const showPasswordButton = document.getElementById('show-container');
const socialCont = document.getElementById('social');
const arrow = document.getElementById('arrow');
const arrowText = document.getElementById('arrow-text');
const root = document.documentElement;
const checkbox = document.querySelector('.checkbox');
const container = document.querySelector('#container-positioning');
// SHOW HIDE PASSWORD

showPasswordButton.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.innerHTML = '<i class="fa-solid fa-eye" id="show"></i>';
  } else {
    passwordInput.type = 'password';
    showPasswordButton.innerHTML = '<i class="fa-sharp fa-solid fa-eye-slash"></i>';
  }
});

function checkInput() {
  if (passwordInput.value === '') {
    showPasswordButton.style.display = 'none';
  }
  else {
    showPasswordButton.style.display = 'block';
  }
}


// PASSWORD VALIDATOR
document.querySelector("#input-3").addEventListener("input", function() {
  if (this.validity.patternMismatch) {
    document.querySelector("#passwordError").textContent = "Password must contain at least one digit, one letter and one symbol, and be at least 8 characters long.";
  } else {
    document.querySelector("#passwordError").textContent = "";
  }
});

// FORM DATA
const scriptURL = 'https://script.google.com/macros/s/AKfycbyvdqVnJfORhzBSyBJwal8MHYmzRD1NvE8dlo6EtJj7xgCYU1bBhXhz2BiIWTxdVNhJ/exec'
const form = document.forms['Sign-Up']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => window.location.href = "Other pages/thankyou.html")
    .catch(error => console.error('Error!', error.message))
})

//SOCIAL ON CLICK
function toggleSocial(){
arrow.addEventListener('click', function(){
  if (socialCont.style.left == '-2.5rem') {
    socialCont.style.left = '0rem';
    arrow.style.left = '3rem';
    arrowText.style.transform = 'rotate(180deg)';
  }
  else{
    socialCont.style.left = '-2.5rem';
    arrow.style.left = '0.5rem';
    arrowText.style.transform = 'rotate(0deg)';
  }
})
}


//DARK-Light toggle
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    root.style.setProperty('--text-color','#000a11');
          root.style.setProperty('--blur-color','#4effff6e');
          root.style.setProperty('--form-bg','rgb(216,219,224)');
          root.style.setProperty('--sign-btn-bg','#DFDFDF');
          root.style.setProperty('--input-bg','rgb(231,231,231)');
  } else {
      root.style.setProperty('--text-color','rgb(231, 231, 231)');
      root.style.setProperty('--blur-color','#2bdddd3e');
      root.style.setProperty('--form-bg','#000a11');
      root.style.setProperty('--sign-btn-bg','#202020');
      root.style.setProperty('--input-bg','#121d25');
  }
});

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    container.style.background = 'url(../Media/layered-waves-haikei.svg) no-repeat center center/cover'
  } else {
    container.style.background = 'url(../Media/dark-bg.svg) no-repeat center center/cover'
  }
});

// ON LOAD
window.onload = function() {
  socialCont.style.left = "-2.5rem";
  showPasswordButton.style.display = 'none';
  arrow.style.left = '0.5rem';
  arrowText.style.transform = 'rotate(0deg)';
}
