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
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const radioButtons = document.querySelectorAll(".checkbox-input");
const userAgreementCheckbox = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal evant
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  checkUserAgreementIsSelected();
  modalbg.style.display = "none";
}

// check if at leat 1 location radio button is selected
function checkLocationIsSelected() {
  for (let radio of radioButtons) {
    if (radio.checked && radio.value != "on") {
      return true;
    }
  }
  return false;
}

// check if user agreement checkbox is selected
function checkUserAgreementIsSelected() {
  if (userAgreementCheckbox.checked) {
    return true;
  }
  return false;
}
