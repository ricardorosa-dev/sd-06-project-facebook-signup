const loginButton = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const passwordInput = document.querySelector('#user-password');

const customGenderInput = document.querySelector('#custom');

loginButton.addEventListener('click', function () {
  if (emailInput.value && passwordInput.value) {
    alert(emailInput.value);
  }
});

customGenderInput.addEventListener('click', function () {
  const customInput = document.createElement('input');
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero (opcional)';
  document.querySelector('.input-gender-container').appendChild(customInput);
});


function checkInputs () {
  const allInputs = document.querySelectorAll('input');
}
