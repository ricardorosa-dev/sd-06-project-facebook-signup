const loginButton = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');

loginButton.addEventListener('click', () => {
  alert(emailInput.value);
});
