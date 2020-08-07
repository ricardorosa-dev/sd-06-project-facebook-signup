const btnLogin = document.querySelector('#button-login');
const mailEntry = document.querySelector('#user-email-phone');

btnLogin.addEventListener('click', function () {
  alert(mailEntry.value);
});
