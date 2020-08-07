const buttonLogin = document.getElementById('button-login');
const buttonSignUp = document.getElementById('facebook-register');
const emailInput = document.getElementById('user-email-phone');
const form = document.getElementById('formSignUp');
const altGender = document.getElementById('other');

function invalidFields() {
  buttonSignUp.type = 'reset';
  const invalid = document.createElement('div');
  invalid.innerHTML = 'Campos inválidos';
  form.appendChild(invalid);
}

function checkEmpty() {
  let ids = ['firstname', 'lastname', 'phone_email', 'password', 'birthdate'];
  let isEmpty = 0;
  for (let i = 0; i < ids.length; i += 1) {
    if (document.getElementById(ids[i]).value === '') {
      if (isEmpty === 0) {
        invalidFields();
      }
      isEmpty = 1;
    }
  }
  if (isEmpty === 0) {
    buttonSignUp.type = 'submit';
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
