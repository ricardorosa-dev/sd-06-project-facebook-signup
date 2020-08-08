const btnLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
const invalidMessage = document.getElementById('invalid-input');
const btnSingUp = document.getElementById('facebook-register');

function clickButton() {
  alert(userEmailPhone.value);
}

window.onload = function () {
  btnLogin.addEventListener('click', clickButton);
};
