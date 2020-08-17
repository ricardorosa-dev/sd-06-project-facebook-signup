function buttonAlert() {
  const buttonLogin = document.querySelector('#button-login');
  const userEmailPhone = document.querySelector('#user-email-phone');

  buttonLogin.addEventListener('click', function () {
    alert(userEmailPhone.value);
  });
}

buttonAlert();

function validateFieldsMessage() {
  const buttonRegister = document.querySelector('#register-form');
  const validateMessage = document.createElement('div');
  validateMessage.innerText = 'Campos inválidos';
  validateMessage.classList.add('invalide-warning');
  buttonRegister.appendChild(validateMessage);
}

function validateForms() {
  const field = document.querySelectorAll('input');
  let isValid = true;

  for (let index = 0; index < field.length; index += 1) {
    if (field[index].value === '') {
        isValid = false;
    }
  }

  if (!isValid) {
    validateFieldsMessage();
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
