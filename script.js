function buttonLoginAlert() {
  alert(document.getElementById('user-email-phone').value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', buttonLoginAlert);

function nullOrEmpty(str) {
  const v = document.getElementById(str.value);
  return v === null || v === '';
}

function validateForm() {
  if (nullOrEmpty('formRegister')
    && nullOrEmpty('name')
    && nullOrEmpty('surname')
    && nullOrEmpty('phone_email')
    && nullOrEmpty('password')
    && nullOrEmpty('birthdate')
    && nullOrEmpty('gender')) {
    alert('Campos inválidos');
    return false;
  }
  return true;
}

const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', validateForm);
