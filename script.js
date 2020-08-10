const buttonLogin = document.querySelector('#button-login');
const emailValue = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(emailValue.value);
});
