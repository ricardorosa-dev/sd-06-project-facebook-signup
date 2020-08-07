const buttonLogin = document.getElementById('button-login');
const buttonSignUp = document.getElementById('facebook-register');
const emailInput = document.getElementById('user-email-phone');
const form = document.getElementById('formSignUp');

function invalidFields() {
  const invalid = document.createElement('div');
  invalid.innerHTML = 'Campos inválidos';
  form.appendChild(invalid);
}

function checkEmpty() {
  let a;
  if (document.getElementById('firstname').value === '') {
    a = 1;
  }
  if (document.getElementById('lastname').value === '') {
    a = 1;
  }
  if (document.getElementById('phone_email').value === '') {
    a = 1;
  }
  if (document.getElementById('password').value === '') {
    a = 1;
  }
  if (document.getElementById('birthdate').value === '') {
    a = 1;
  }

  if (a == 1) {
    invalidFields();
  }
}

buttonLogin.addEventListener('click', function () {
  window.alert(emailInput.value);
});

buttonSignUp.addEventListener('click', function () {
  checkEmpty();
});
