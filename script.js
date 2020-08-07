const loginButton = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const passwordInput = document.querySelector('#user-password');

loginButton.addEventListener('click', function () {
  if(emailInput.value && passwordInput.value) {
    alert(emailInput.value);
  }
});
