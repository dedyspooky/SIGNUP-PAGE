
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
    container.style.background = 'url(Media/layered-waves-haikei.svg) no-repeat center center/cover'
  } else {
    container.style.background = 'url(Media/dark-bg.svg) no-repeat center center/cover'
  }
});

// ON LOAD
window.onload = function() {
  socialCont.style.left = "-2.5rem";
  showPasswordButton.style.display = 'none';
  arrow.style.left = '0.5rem';
  arrowText.style.transform = 'rotate(0deg)';
}

//LANGUAGE CHANGE
const languages = {
  en: {
    name: 'English',
    content: {
      tagline1: 'Work Smarter',
      tagline2: 'With',
      desc: 'Aries is a motivation brand that helps individuals reach their goals. We provide inspiring content, webinars, interviews and more. Our goal: empower people to become their best selves.',
      signup: 'Sign Up',
      google: 'Sign up with Google',
      github: 'Sign up with Github',
      or: "-OR-",
      accswitch: "Already have an account?",
      login: "sign in here",
      readour: "Read our"
    }
  },
  fr: {
    name: 'Français',
    content: {
      tagline1: 'Travaillez plus intelligemment',
      tagline2: 'avec',
      desc: 'Aries est une marque de motivation qui aide les individus à atteindre leurs objectifs. Nous fournissons contenu inspirant, webinaires, interviews et plus encore. Notre objectif : donner aux gens les moyens de devenir leur meilleurs soi.',
      signup: "S'inscrire",
      google: "S'inscrire avec Google",
      github: "S'inscrire avec Github",
      or: "-OU-",
      accswitch: "Vous avez déjà un compte?",
      login: "se connecter ici",
      readour: "Lisez nos"
    }
  },
  in: {
    name: 'हिंदी',
    content: {
      tagline1: 'होशियार काम करो',
      tagline2: 'साथ',
      desc: 'मेष राशि एक प्रेरक ब्रांड है जो व्यक्तियों को उनके लक्ष्यों तक पहुँचने में मदद करता है। हम प्रेरक सामग्री, वेबिनार, साक्षात्कार और बहुत कुछ प्रदान करते हैं। हमारा लक्ष्य: लोगों को अपना सर्वश्रेष्ठ बनने के लिए सशक्त बनाना।',
      signup: 'साइन अप करें',
      google: 'Google के साथ साइन अप करें',
      github: 'Github के साथ साइन अप करें',
      or: "-या-",
      accswitch: "क्या आपके पास पहले से एक खाता मौजूद है?",
      login: "साइन इन करो",
      readour: "हमारे"
    }
  },
  np: {
    name: 'नेपाली',
    content: {
      tagline1: 'स्मार्ट काम गर्नुहोस्',
      tagline2: 'संग',
      desc: 'मेष एक प्रेरणा ब्रान्ड हो जसले व्यक्तिहरूलाई उनीहरूको लक्ष्यमा पुग्न मद्दत गर्दछ। हामी प्रेरणादायक सामग्री, वेबिनार, अन्तर्वार्ता र थप प्रदान गर्दछौं। हाम्रो लक्ष्य: मानिसहरूलाई तिनीहरूको उत्कृष्ट स्वयं बन्न सशक्त बनाउनुहोस्।',
      signup: 'साइन अप',
      google: 'Google को साथ साइन अप गर्नुहोस्',
      github: 'Google को साथ साइन अप गर्नुहोस्',
      or: "-वा-",
      accswitch: "पहिले नै खाता छ?",
      login: "साइन इन गर्नुहोस्",
      readour: "हाम्रा"
    }
  }
};
function changeLanguage() {
  const langCode = document.querySelector('#country').value;
  const language = languages[langCode];
  document.querySelector('.tagline1').textContent = language.content.tagline1;
  document.querySelector('.tagline2').textContent = language.content.tagline2;
  document.querySelector('#desc1').textContent = language.content.desc;
  document.querySelector('#desc2').textContent = language.content.desc;
  document.querySelector('#desc3').textContent = language.content.desc;
  document.querySelector('.sign-up-header').textContent = language.content.signup;
  document.querySelector('#social-btn-text1').textContent = language.content.google;
  document.querySelector('#social-btn-text2').textContent = language.content.github;
  document.querySelector('.sign-up-or-header').textContent = language.content.or;
  document.querySelector('.accswi').textContent = language.content.accswitch;
  document.querySelector('.readour').textContent = language.content.readour;
}

// LOADER
window.addEventListener("load", function(){
  const loader = document.querySelector("#loader-wrapper");
  loader.style.display = "none";
});
