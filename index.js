let btn = document.getElementById("btn");
let email = document.getElementById("email");
let error = document.getElementById("error");

btn.addEventListener("click", (e) => {
  let emailValue = email.value;
  e.preventDefault();
  if (!validateEmail(emailValue)) {
    error.classList.remove("d-none");
  } else {
    location.reload();
  }
});

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("my-active");
    } else {
      reveals[i].classList.remove("my-active");
    }
  }
}
