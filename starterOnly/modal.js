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
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal evant
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  defaultModal();
  modalbg.style.display = "none";
}

// Return to default after closing confirmation modal
function defaultModal() {
  let confirmationContainer = document.querySelectorAll(
    ".modal-confirmation-container"
  )[0];

  if (confirmationContainer) {
    confirmationContainer.style.visibility = "hidden";
    modalBody[0].style.visibility = "visible";
  }
}

function displayLoader() {
  modalLoader.style.display = "block";
}

function hideLoader() {
  modalLoader.style.display = "none";
}

// update modal when form is validated
function updateToConfirmationModal() {
  modalBody[0].style.visibility = "hidden";
  let confirmationText = document.createElement("p");
  let confirmationClose = document.createElement("button");
  let confirmationContainer = document.createElement("div");
  let parent = modalBody[0].parentNode;

  confirmationText.textContent = "Merci pour votre inscription";
  confirmationText.classList.add("modal-confirmation-text");
  confirmationClose.textContent = "Fermer";
  confirmationClose.classList.add("modal-confirmation-close", "btn-submit");
  confirmationClose.addEventListener("click", closeModal);
  confirmationContainer.classList.add("modal-confirmation-container");
  confirmationContainer.appendChild(confirmationText);
  confirmationContainer.appendChild(confirmationClose);
  parent.appendChild(confirmationContainer);
}
