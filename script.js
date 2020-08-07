const buttonLogin = document.querySelector('#button-login');
const inputEmailPhone = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(inputEmailPhone.value);
});
