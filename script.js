const buttonLogin = document.getElementById('button-login');
const userLoginEmailPhone = document.getElementById('user-email-phone');

function clickButton() {
    alert(userLoginEmailPhone.value);
  }

window.onload = function () {
    buttonLogin.addEventListener('click', clickButton);
  };
