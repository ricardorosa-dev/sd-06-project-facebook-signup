const buttonLogin = document.querySelector('#button-login');
const inputUser = document.querySelector('#user-email-phone');
const inputPassword = document.querySelector('#user-password');

buttonLogin.addEventListener('click', function () {
  alert(inputUser.value);
});
