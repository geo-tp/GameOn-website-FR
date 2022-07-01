// DOM Elements
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioButtons = document.querySelectorAll(".checkbox-input");
const userAgreementCheckbox = document.getElementById("checkbox1");
const allInputs = document.getElementsByTagName("input");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const birthRegex =
  /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

inputsEventOnChange();

function inputsEventOnChange() {
  for (let input of allInputs) {
    input.addEventListener("input", () => hideError(input));
  }
}

// check if lastname length is greater than 2
function checkLastNameIsValid() {
  if (lastname.value.length >= 2) {
    return true;
  }

  displayError(lastname);

  return false;
}

// check if firstname length is greater than 2
function checkFirstNameIsValid() {
  if (firstname.value.length >= 2) {
    return true;
  }

  displayError(firstname);

  return false;
}

// check if email format is valid
function checkEmailIsValid() {
  if (email.value.match(emailRegex)) {
    return true;
  }

  displayError(email);

  return false;
}

// check if birthdate format is valid
function checkBirthDateIsValid() {
  if (birthdate.value.match(birthRegex)) {
    return true;
  }

  displayError(birthdate);

  return false;
}

// check if tournament participation's number is provided
function checkParcipationNumberIsValid() {
  if (typeof quantity === "number") {
    return true;
  }

  displayError(quantity);

  return false;
}

// check if at leat 1 location radio button is selected
function checkLocationIsSelected() {
  for (let radio of radioButtons) {
    if (radio.checked && radio.value != "on") {
      return true;
    }
  }

  displayError(radioButtons);

  return false;
}

// check if user agreement checkbox is selected
function checkUserAgreementIsSelected() {
  if (userAgreementCheckbox.checked) {
    return true;
  }

  displayError(userAgreementCheckbox);

  return false;
}

function displayError(element) {
  console.log(element);
  parent = element.parentNode;
  if (!parent) {
    parent = element[0].parentNode;
  }

  parent.setAttribute("data-error-visible", true);
}

function hideError(element) {
  let parent = element.parentNode;

  if (!parent) {
    parent = element[0].parentNode;
  }

  parent.setAttribute("data-error-visible", false);
}

function validate(e) {
  e.preventDefault();
  let formIsCompleted = true;

  if (!checkFirstNameIsValid()) {
    formIsCompleted = false;
  }

  if (!checkLastNameIsValid()) {
    formIsCompleted = false;
  }

  if (!checkEmailIsValid()) {
    formIsCompleted = false;
  }

  if (!checkBirthDateIsValid()) {
    formIsCompleted = false;
  }

  if (!checkLocationIsSelected()) {
    formIsCompleted = false;
  }

  if (!checkParcipationNumberIsValid()) {
    formIsCompleted = false;
  }

  if (!checkUserAgreementIsSelected()) {
    formIsCompleted = false;
  }

  //   if (
  //     !checkFirstNameIsValid() ||
  //     !checkLastNameIsValid() ||
  //     !checkEmailIsValid() ||
  //     !checkBirthDateIsValid() ||
  //     !checkLocationIsSelected() ||
  //     !checkParcipationNumberIsValid() ||
  //     !checkUserAgreementIsSelected()
  //   ) {
  //     formIsCompleted = false;
  //   }

  if (formIsCompleted) {
    // DO SUCCESS
  }
}
