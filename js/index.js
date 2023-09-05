/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SENDING EMAIL ON FORM ===============*/

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vainqueurmg@gmail.com",
    Password: "E06C7F2C5417D4A3FB7B8B4CE4DFA72C92FD",
    To: "vainqueurmg@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Message From Your Portfolio",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
