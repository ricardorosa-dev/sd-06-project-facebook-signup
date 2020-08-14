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

let existeOInputExtra = false;
const otherGenreRadio = document.querySelector('#gen-others');

function generateOtherGenreInput() {
  const otherGenreInputWrapper = document.querySelector('.other-gen-input');
  if (otherGenreRadio.checked === true && existeOInputExtra === false) {
    const otherGenreInput = document.createElement('input');
    otherGenreInput.setAttribute('name', 'gender-custom');
    otherGenreInput.setAttribute('placeholder', 'Gênero');

    otherGenreInputWrapper.appendChild(otherGenreInput);
    existeOInputExtra = true;
  }
}

otherGenreRadio.addEventListener('click', generateOtherGenreInput);

function tirarOInputExtraQuandoClicarEmOutroRadio() {
  const otherGenreInputWrapper = document.querySelector('.other-gen-input');
  otherGenreInputWrapper.removeChild(otherGenreInputWrapper.firstElementChild);
  existeOInputExtra = false;
}

const mRadio = document.querySelector('#gen-masc');
const fRadio = document.querySelector('#gen-fem');

mRadio.addEventListener('click', tirarOInputExtraQuandoClicarEmOutroRadio);
fRadio.addEventListener('click', tirarOInputExtraQuandoClicarEmOutroRadio);
