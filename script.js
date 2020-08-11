const buttonLogin = document.querySelector('#button-login');
const buttonRegister = document.querySelector('.facebook-register');
const firstNameField = document.getElementsByName('firstname')[0];
const lastNameField = document.getElementsByName('lastname')[0];
const phoneEmailField = document.getElementsByName('phone_email')[0];
const passwordField = document.getElementsByName('password')[0];
const birthdateField = document.getElementsByName('birthdate')[0];
const genderField = document.getElementsByName('gender');


function buttonLoginAlert() {
  alert(document.getElementById('user-email-phone').value);
}

function formMessage() {
  document.querySelector('.formMessage').style.display = 'flex';
}

function formMessageCleaner() {
  document.querySelector('.formMessage').style.display = 'none';
}

function checkFirstNameField() {
  if (firstNameField.value.length < 3) {
    formMessage();
  } else {
    formMessageCleaner();
  }
}

function checkLastNameField() {
  if (lastNameField.value.length < 3) {
    formMessage();
  } else {
    formMessageCleaner();
  }
}

function checkPhoneEmailField() {
  const regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

  const regexPhone = /-?\(?[1-9]{2}-?\)?[0-9]{5}-?[0-9]{4}|-?\(?[1-9]{2}-?\)?[0-9]{4}-?[0-9]{4}$/;

  if (regexEmail.test(phoneEmailField.value) === regexPhone.test(phoneEmailField.value)) {
    formMessage();
  } else {
    formMessageCleaner();
  }
}

function checkPasswordField() {
  if (passwordField.value.length < 8) {
    formMessage();
  } else {
    formMessageCleaner();
  }
}

function checkDay() {
  if (birthdateField.value.substr(0, 2) <= 0 || birthdateField.value.substr(0, 2) > 31) {
    formMessage();
  } else {
    formMessageCleaner();
  }
}

function checkMonth() {
  if (birthdateField.value.substr(3, 2) <= 0 || birthdateField.value.substr(3, 2) > 12) {
    formMessage();
  } else {
    formMessageCleaner();
  }
}

function checkYear() {
  if (birthdateField.value.substr(6, 4) <= 0 || birthdateField.value.substr(6, 4) > 2020) {
    formMessage();
  } else {
    formMessageCleaner();
  }
}

function checkBirthdateField() {
  checkDay();
  checkMonth();
  checkYear();
}

function showGenderCustomInput() {
  if (genderField[2].checked === true) {
    document.querySelector('.gender-custom').style.display = 'flex';
  }
  if ((genderField[0].checked === true || genderField[1].checked === true)) {
    document.querySelector('.gender-custom').style.display = 'none';
  }
}

function checkGenderField() {
  let flagMessage = false;
  for (let index = 0; index < genderField.length; index += 1) {
    if (genderField[index].checked !== flagMessage) {
      flagMessage = true;
    }
  }
  if (flagMessage === true) {
    formMessageCleaner();
  } else {
    formMessage();
  }
}

function validateFormFields() {
  checkFirstNameField();
  checkLastNameField();
  checkPhoneEmailField();
  checkPasswordField();
  checkBirthdateField();
  checkGenderField();
}

function getGenderValue() {
  let gender;
  for (let index = 0; index < genderField.length; index += 1) {
    if (genderField[index].checked === true) {
      gender = genderField[index].value;
    }
  }
  return gender;
}

function generateWelcomeMessage() {
  if (document.querySelector('.formMessage').style.display === 'none') {
    document.querySelector('.formRegister').remove();
    document.querySelector('.open-account').remove();
    document.querySelector('.quick-easy').remove();
  }
}

function createWelcomeMessageContent() {
  document.querySelector('.right-content-welcome').style.display = 'flex';
  document.querySelector('.right-content').style.alignSelf = 'center';
  document.querySelector('.right-content-welcome').innerHTML = `Olá ${firstNameField.value} ${lastNameField.value}<br>
  Celular ou email: ${phoneEmailField.value}<br>
  Data de nascimento: ${birthdateField.value}<br
  Gênero: ${getGenderValue()}`;
  generateWelcomeMessage();
}

function stopSubmitAction(evt) {
  validateFormFields();
  evt.preventDefault();
  createWelcomeMessageContent();
}

buttonLogin.addEventListener('click', buttonLoginAlert);
buttonRegister.addEventListener('click', stopSubmitAction);

genderField[0].addEventListener('change', showGenderCustomInput);
genderField[1].addEventListener('change', showGenderCustomInput);
genderField[2].addEventListener('change', showGenderCustomInput);
