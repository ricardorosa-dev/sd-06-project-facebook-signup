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
  
  let isEmpty = 0;

  if (document.getElementById('firstname').value === '') {
    isEmpty = 1;
  }
  if (document.getElementById('lastname').value === '') {
    isEmpty = 1;
  }
  if (document.getElementById('phone_email').value === '') {
    isEmpty = 1;
  }
  if (document.getElementById('password').value === '') {
    isEmpty = 1;
  }
  if (document.getElementById('birthdate').value === '') {
    isEmpty = 1;
  }

  if (isEmpty === 1) {
    invalidFields();
  }
}

buttonLogin.addEventListener('click', function () {
  window.alert(emailInput.value);
});

buttonSignUp.addEventListener('click', function () {
  checkEmpty();
});
