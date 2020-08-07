const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

function clickbutton() {
  alert(userEmailPhone.value);
}

window.onload = function () {
  buttonLogin.addEventListener('click', clickbutton);
};
