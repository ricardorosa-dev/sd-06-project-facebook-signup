const loginButton = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const allInputFields = document.querySelectorAll('.signUp');
const allRadioButtons = document.querySelectorAll('.signUpButton');
const signUpButton = document.querySelector('#facebook-register');

function checkAllSignUpFields() {
  for (let i = 0; i < allInputFields.length; i += 1) {
    if (allInputFields[i].value === '') {
      return false;
    }
  }
  return true;
}

function checkAllRadioButtons() {
  for (let i = 0; i < allRadioButtons.length; i += 1) {
    if (allRadioButtons[i].checked === false) {
      return false;
    }
  }
  return true;
}

function createInvalidFieldsMessage() {
  const invalidFields = document.createElement('span');
  document.querySelector('.gender').appendChild(invalidFields);
  invalidFields.innerText = 'Campos inválidos';
  invalidFields.style.color = 'red';
  invalidFields.classList.add('invalidFields');
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
  }
});
