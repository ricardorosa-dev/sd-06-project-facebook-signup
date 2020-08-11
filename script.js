const buttonLogin = document.getElementById('button-login');
const userLoginEmailPhone = document.getElementById('user-email-phone');
const customRadio = document.getElementById('custom');

function clickButton() {
    alert(userLoginEmailPhone.value);
  }

window.onload = function () {
    buttonLogin.addEventListener('click', clickButton);
    customRadio.addEventListener('change', customOption);
}
