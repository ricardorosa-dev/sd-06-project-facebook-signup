const btnLogin = document.querySelector('#button-login');
const email = document.querySelector('#user-email-phone');

function alerta() {
  alert(email.value);
}

window.onload = function () {
  btnLogin.addEventListener('click', alerta);
};
