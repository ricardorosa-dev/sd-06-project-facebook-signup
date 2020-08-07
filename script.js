const buttonLogin = document.getElementById('button-login');
const buttonSignUp = document.getElementById('facebook-register');
const emailInput = document.getElementById('user-email-phone');
const form = document.getElementById('formSignUp');

function invalidFields() {
  const invalid = document.createElement('p');
  invalid.appendChild(document.createTextNode('Campos inválidos'));
  form.appendChild(invalid);
}

function checkEmpty() {
  if (document.getElementById('firstname').value === '') {
    invalidFields();
  }
  if (document.getElementById('lastname').value === '') {
    invalidFields();
  }
  if (document.getElementById('phone_email').value === '') {
    invalidFields();
  }
  if (document.getElementById('password').value === '') {
    invalidFields();
  }
  if (document.getElementById('birthdate').value === '') {
    invalidFields();
  }
}

buttonLogin.addEventListener('click', function () {
  window.alert(emailInput.value);
});

buttonSignUp.addEventListener('click', function () { checkEmpty()});
