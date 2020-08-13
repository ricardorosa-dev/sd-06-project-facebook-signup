const userEmailPhone = document.getElementById('user-email-phone');
const btnLogin = document.getElementById('button-login');
const invalidMessage = document.querySelector('.invalid-input');
const genderOptions = document.getElementById('gender');
const genderCustom = document.querySelector('.custom-option');
const btnSingUp = document.getElementById('facebook-register');

function clickLoginButton() {
  alert(userEmailPhone.value);
}

function createNewInput() {
  const customInput = document.createElement('input');
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero (opcional)';
  customInput.autocomplete = 'off';
  genderCustom.appendChild(customInput);
}

function genderCheck(event) {
  const optionCheck = event.target;
  if (optionCheck.value === 'Personalizado') {
    genderCustom.style.display = 'flex';
  } else {
    genderCustom.style.display = 'none';
  }
}

function validateForm() {
  const firstName = document.forms['form-content']['firstname'].value;
  const lastName = document.forms['form-content']['lastname'].value;
  const phoneEmail = document.forms['form-content']['phone_email'].value;
  const password = document.forms['form-content']['password'].value;
  const birthdate = document.forms['form-content']['birthdate'].value;
  const gender = document.forms['form-content']['gender'].value;
  const allInputsRequired = [firstName, lastName, phoneEmail, password, birthdate, gender];
  let isValid = true;
  for (let index = 0; index < allInputsRequired.length; index += 1) {
    if (allInputsRequired[index] === '') {
      invalidMessage.innerHTML = 'Campos inválidos';
      isValid = false;
    }
  }
  return isValid;
}

function textMsgIfValidate() {
  const rightContent = document.querySelector('.right-content');
  const firstName = document.forms['form-content']['firstname'].value;
  const lastName = document.forms['form-content']['lastname'].value;
  const phoneEmail = document.forms['form-content']['phone_email'].value;
  const birthdate = document.forms['form-content']['birthdate'].value;
  const gender = document.forms['form-content']['gender'].value;
  rightContent.innerHTML = `Olá, ${firstName} ${lastName}! Você se cadastrou com ${phoneEmail} e sua data de nascimento é ${birthdate} e selecionou o gênero ${gender}.`;
  return rightContent;
}

window.onload = () => {
  btnLogin.addEventListener('click', clickLoginButton);
  genderOptions.addEventListener('change', genderCheck);
  btnSingUp.addEventListener('click', function () {
    if (validateForm() === true) {
      textMsgIfValidate();
    }
  });
  createNewInput();
  genderCustom.style.display = 'none';
};
