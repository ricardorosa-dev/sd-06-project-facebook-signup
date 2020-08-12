const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
const userPassword = document.getElementById('user-password');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const celularEmail = document.getElementById('celularEmail');
const customRadio = document.getElementById('custom');

function clickButton() {
  alert(userEmailPhone.value);
}

window.onload = function () {
  buttonLogin.addEventListener('click', clickButton);
  };
