function buttonLoginAlert() {
  alert(document.getElementById('user-email-phone').value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', buttonLoginAlert);

function null_or_empty(str) {
  var v = document.getElementById(str.value);
  return v == null || v == "";
}

function validateForm() {
  if (null_or_empty("formRegister")
    && null_or_empty("name")
    && null_or_empty("surname")
    && null_or_empty("phone_email")
    && null_or_empty("password")
    && null_or_empty("birthdate")
    && null_or_empty("gender")) {
    alert("Campos inválidos");
    return false;
  }
  return true;
}

const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', validateForm);
