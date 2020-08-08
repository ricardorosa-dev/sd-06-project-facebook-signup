const loginButton = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');

const customGenderInput = document.querySelector('#custom');

loginButton.addEventListener('click', function () {
  alert(emailInput.value);
});

customGenderInput.addEventListener('click', function () {
  const customInput = document.createElement('input');
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero (opcional)';
  document.querySelector('.input-gender-container').appendChild(customInput);
});


function checkInputs() {
  const allInputs = document.querySelectorAll('input');
  return allInputs;
}
checkInputs();
