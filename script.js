const loginButton = document.querySelector('#button-login');
const emailTelephoneInput = document.querySelector('#user-email-phone');

loginButton.addEventListener('click', function () {
  alert(emailTelephoneInput.value);
});

console.log("teste");
