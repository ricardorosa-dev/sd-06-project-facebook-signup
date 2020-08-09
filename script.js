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
  return nullOrEmpty('formRegister') && nullOrEmpty('name') && nullOrEmpty('surname') && nullOrEmpty('phone_email') && nullOrEmpty('password') && nullOrEmpty('birthdate') && nullOrEmpty('gender');
}

const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', function () {
  if (facebookRegister === validateForm) {
    return true;
  }
  return alert('Campos inválidos');
});
