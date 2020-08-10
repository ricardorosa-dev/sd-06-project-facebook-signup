const buttonLogin = document.getElementById('button-login');
const buttonSignUp = document.getElementById('facebook-register');
const emailInput = document.getElementById('user-email-phone');
const form = document.getElementById('formSignUp');
const altGender = document.getElementById('other');
const ids = ['firstname', 'lastname', 'phone_email', 'password', 'birthdate'];
const invalid = document.createElement('div');
let isEmpty = 5;
let wasEmpty = 0;

function invalidFields() {
  if (wasEmpty === 1) {
    return;
  }
  buttonSignUp.type = 'reset';
  invalid.innerHTML = 'Campos inválidos';
  form.appendChild(invalid);
  invalid.classList.add('campo-invalido');
}

function checkFields() {
  for (let i = 0; i < ids.length; i += 1) {
    if (document.getElementById(ids[i]).value === '') {
      isEmpty = 5;
    }
    if (document.getElementById(ids[i]).value !== '') {
      isEmpty -= 1;
    }
  }
}

function checkEmpty() {
  checkFields();
  if (isEmpty > 0) {
    invalidFields();
  }
  if (isEmpty <= 0) {
    buttonSignUp.type = 'submit';
    isEmpty = 5;
    if (wasEmpty === 1) {
      const temp = document.getElementsByClassName('campo-invalido');
      form.removeChild(temp[0]);
      wasEmpty = 0;
    }
  }
}

buttonLogin.addEventListener('click', function () {
  window.alert(emailInput.value);
});

buttonSignUp.addEventListener('click', function () {
  checkEmpty();
});

altGender.addEventListener('change', function () {
  if (document.getElementById('other').checked === true) {
    const elementInput = document.createElement('input');
    const genderOptions = document.getElementsByClassName('gender')[0];
    elementInput.type = 'text';
    elementInput.name = 'gender-custom';
    elementInput.placeholder = 'Gênero (opcional)';
    genderOptions.appendChild(elementInput);
  }
});
