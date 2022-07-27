// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelectorAll(".modal-body");
const modalClose = document.querySelectorAll(".close");
const modalLoader = document.querySelectorAll(".modal-loader");
const modalConfirmation = document.querySelector(".modal-confirmation");
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
  // avoid display conflict
  closeNav();
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  hideConfirmation();
  modalbg.style.display = "none";
}

// hide confirmation message
function hideConfirmation() {
  modalConfirmation.style.visibility = "hidden";
  //We use opacity to animate confirmation
  modalConfirmation.style.opacity = 0;
}

// display confirmation message
function displayConfirmation() {
  modalConfirmation.style.visibility = "visible";
  modalConfirmation.style.opacity = 1;
}
