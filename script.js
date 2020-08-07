const button = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');

function buttonAlert() {
  alert(inputEmail.value);
}

window.onload = function () {
  button.addEventListener('click', buttonAlert);
};
