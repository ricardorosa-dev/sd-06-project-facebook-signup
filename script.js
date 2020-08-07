const loginButton = document.querySelector('#button-login');
const emailTelephoneInput = document.querySelector('#user-email-phone');

loginButton.addEventListener('click', function () {
  alert(emailTelephoneInput.value);
});

const facebookRegister = document.querySelector('#facebook-register');
facebookRegister.addEventListener('click', function () {
  const inputTextArray = document.querySelectorAll('.input-text-verification');
  for (let index = 0; index < inputTextArray.length; index += 1) {
    if (inputTextArray[index].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
});

const personalizeRadio = document.getElementById('personalizado');
personalizeRadio.addEventListener('click', function () {
  const input = document.createElement('input');
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  const subscriptionForm = document.querySelector('.subscription-form');
  subscriptionForm.insertBefore(input, facebookRegister);
});
