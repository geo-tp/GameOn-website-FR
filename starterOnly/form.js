// DOM Elements
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioButtons = document.querySelectorAll(".checkbox-input");
const userAgreementCheckbox = document.getElementById("checkbox1");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const birthRegex =
  /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

// check if lastname length is greater than 2
function checkLastNameIsValid() {
  if (lastname.value.length >= 2) {
    return true;
  }

  return false;
}

// check if firstname length is greater than 2
function checkFirstNameIsValid() {
  if (firstname.value.length >= 2) {
    return true;
  }

  return false;
}

// check if email format is valid
function checkEmailIsValid() {
  if (email.value.match(emailRegex)) {
    return true;
  }

  return false;
}

// check if birthdate format is valid
function checkBirthDateIsProvided() {
  if (birthdate.value.match(birthRegex)) {
    return true;
  }

  return false;
}

// check if tournament participation's number is provided
function checkParcipationNumberIsProvided() {
  if (typeof quantity === "number") {
    return true;
  }

  return false;
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
