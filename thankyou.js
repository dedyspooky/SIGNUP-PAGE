setTimeout(function() {
    window.location.href = "../index.html";
  }, 6000);

  let count = 5;
const counter = setInterval(() => {
  if (count > 0) {
    document.querySelector("#counter").textContent = "Wait " + count + " seconds";
    count--;
  }
}, 1000);

window.addEventListener("load", function(){
  const loader = document.querySelector("#loader-wrapper");
  loader.style.display = "none";
});