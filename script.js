function buttonLoginAlert() {
  const button = document.querySelector('#button-login');
  const userInput = document.querySelector('#user-email-phone');

  button.addEventListener('click', function () {
    alert(userInput.value);
  });
}

buttonLoginAlert();

function invalidFormMessage() {
  const form = document.querySelector('#register-form');
  const warningMessage = document.createElement('div');
  warningMessage.innerText = 'Campos inválidos';
  warningMessage.classList.add('invalid-warning');
  form.appendChild(warningMessage);
}

function validateForms() {
  const arrayOfInputs = document.querySelectorAll('input');
  let isValid = true;

  for (let i = 0; i < arrayOfInputs.length; i += 1) {
    if (arrayOfInputs[i].value === '') {
      isValid = false;
    }
  }

  if (!isValid) {
    invalidFormMessage();
  }
}

const registerButton = document.querySelector('#facebook-register');
registerButton.addEventListener('click', validateForms);

let isOtherGenre = false;
const otherGenreRadio = document.querySelector('#gen-others');

function generateOtherGenreInput() {
  const otherGenreInputWrapper = document.querySelector('.other-gen-input');
  if (otherGenreRadio.checked === true && isOtherGenre === false) {
    const otherGenreInput = document.createElement('input');
    otherGenreInput.setAttribute('name', 'gender-custom');
    otherGenreInput.setAttribute('placeholder', 'Gênero');

    otherGenreInputWrapper.appendChild(otherGenreInput);
    isOtherGenre = true;
  }
}

otherGenreRadio.addEventListener('click', generateOtherGenreInput);
