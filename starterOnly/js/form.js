// DOM Elements
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioButtons = document.querySelectorAll(".checkbox-input");
const userAgreementCheckbox = document.getElementById("checkbox1");
const allInputs = document.getElementsByTagName("input");
const registerForm = document.getElementById("register-form");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const birthRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

inputsEventOnChange();

// bind event to hide error when input value is updated by user
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
  let quantityInt = parseInt(quantity.value);
  if (quantityInt) {
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

// check if user agreement checkbox is checked
function checkUserAgreementIsSelected() {
  if (userAgreementCheckbox.checked) {
    return true;
  }

  displayError(userAgreementCheckbox);

  return false;
}

// change data-error-visible to display error
function displayError(element) {
  parent = element.parentNode;

  // element can be Nodelist
  if (!parent) {
    parent = element[0].parentNode;
  }

  parent.setAttribute("data-error-visible", true);
}

// change data-error-visible to hide error
function hideError(element) {
  let parent = element.parentNode;

  // element can be Nodelist
  if (!parent) {
    parent = element[0].parentNode;
  }

  parent.setAttribute("data-error-visible", false);
}

// Validate all form's inputs and update modal to show confirmation
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

  if (formIsCompleted) {
    displayConfirmation();
    registerForm.reset();
  }
}
