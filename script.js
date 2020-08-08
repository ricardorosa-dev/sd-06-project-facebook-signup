function buttonLoginAlert() {
  alert(document.getElementById('user-email-phone').value);
}
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', buttonLoginAlert);
