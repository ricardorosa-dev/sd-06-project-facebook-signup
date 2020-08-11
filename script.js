const buttonLogin = document.getElementById('button-login');
const userLoginEmailPhone = document.getElementById('user-email-phone');
const customRadio = document.getElementById('custom');

function clickButton() {
    alert(userLoginEmailPhone.value);
  }

function customOption() {
    const createCustom = document.createElement('input');

window.onload = function () {
    buttonLogin.addEventListener('click', clickButton);
    customRadio.addEventListener('change', customOption);
  };
