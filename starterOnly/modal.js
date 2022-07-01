function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelectorAll(".modal-body");
const modalClose = document.querySelectorAll(".close");
const modalLoader = document.querySelectorAll(".modal-loader");
const modalConfirmation = document.querySelectorAll(".modal-confirmation");
const modalConfirmationClose = document.querySelectorAll(
  ".modal-confirmation-close"
);
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
modalConfirmationClose.forEach((btn) =>
  btn.addEventListener("click", closeModal)
);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  hideConfirmation();
  modalbg.style.display = "none";
}

// hide confirmation message
function hideConfirmation() {
  modalConfirmation[0].style.visibility = "hidden";
  //We use opacity to animate confirmation
  modalConfirmation[0].style.opacity = 0;
}

// display confirmation message
function displayConfirmation() {
  modalConfirmation[0].style.visibility = "visible";
  modalConfirmation[0].style.opacity = 1;
}
