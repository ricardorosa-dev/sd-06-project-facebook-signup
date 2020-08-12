const loginButton = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const allInputFields = document.querySelectorAll('.signUp');
const allRadioButtons = document.querySelectorAll('.signUpButton');
const signUpButton = document.querySelector('#facebook-register');
const customGender = document.querySelectorAll('.signUpButton')[2];

function checkAllSignUpFields() {
  for (let i = 0; i < allInputFields.length; i += 1) {
    if (allInputFields[i].value === '') {
      return false;
    }
  }
  return true;
}

function checkAllRadioButtons() {
  let counter = 0;
  for (let i = 0; i < allRadioButtons.length; i += 1) {
    if (allRadioButtons[i].checked) {
      counter += 1;
    }
  }
  if (counter > 0) {
    return true;
  }
  return false;
}

function createInvalidFieldsMessage() {
  const invalidFields = document.createElement('span');
  document.querySelector('.gender').appendChild(invalidFields);
  invalidFields.innerText = 'Campos inválidos';
  invalidFields.style.color = 'red';
  invalidFields.classList.add('invalidFields');
}

function checkGender() {
  for (let i = 0; i < allRadioButtons.length; i += 1) {
    if (allRadioButtons[i].checked) {
      return allRadioButtons[i].value;
    }
  }
  return '';
}

function changeContentOfRightContent() {
  const userName = document.querySelectorAll('.signUp')[0];
  const userSurName = document.querySelectorAll('.signUp')[1];
  const emailOrPhone = document.querySelectorAll('.signUp')[2];
  const birthdate = document.querySelectorAll('.signUp')[4];
  const gender = checkGender();
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  rightContent.innerHTML =
  `Olá, ${userName.value} ${userSurName.value} <br>
  Email: ${emailOrPhone.value} <br>
  Data de Nascimento: ${birthdate.value} <br>
  ${gender}`;
  rightContent.className = 'newRight-Content';
}

loginButton.addEventListener('click', () => {
  alert(emailInput.value);
});

signUpButton.addEventListener('click', (event) => {
  if (!checkAllSignUpFields() || !checkAllRadioButtons()) {
    event.preventDefault();
    const invalidFields = document.querySelector('.invalidFields');
    if (!invalidFields) {
      createInvalidFieldsMessage();
    }
  } else {
    event.preventDefault();
    changeContentOfRightContent();
  }
});

customGender.addEventListener('click', () => {
  const custonGenderField = document.createElement('input');
  custonGenderField.type = 'text';
  custonGenderField.classList.add('customGenderInputField');
  custonGenderField.name = 'gender-custom';
  custonGenderField.placeholder = 'Gênero (opcional)';
  document.querySelector('.gender').appendChild(custonGenderField);
});
