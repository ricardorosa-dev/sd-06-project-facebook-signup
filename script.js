const buttonLogin = document.querySelector('#button-login');
const emailPhoneInput = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(emailPhoneInput.value);
});
