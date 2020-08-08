const buttonLogin = document.querySelector('#button-login');
const inputUser = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(inputUser.value);
});

