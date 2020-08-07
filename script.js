function handleLoginButton() {
  const loginBtn = document.getElementById('button-login');

  loginBtn.onclick = () => {
    alert('Email ou telefone');
  };
}

function showErrorMsg() {
  const errElement = document.getElementById('error-msg');

  if (!errElement) {
    const signUpForm = document.querySelector('.signup-form');

    const errorMsgContainer = document.createElement('p');
    errorMsgContainer.setAttribute('id', 'error-msg');
    errorMsgContainer.appendChild(document.createTextNode('Campos inválidos'));

    signUpForm.appendChild(errorMsgContainer);
  }
}

function validateForm(event) {
  const formInputs = document.querySelectorAll('.signup-form input');

  let radioChecked = false;
  let radiosChecked = 0;

  formInputs.forEach((input) => {
    if (input.type === 'text' || input.type === 'password') {
      if (input.value === '') {
        event.preventDefault();
        showErrorMsg();
      }
    } else if (input.type === 'radio') {
      if (!input.checked) {
        radiosChecked += 1;
      } else {
        radiosChecked += 1;
        radioChecked = true;
      }

      if (radiosChecked === 3 && !radioChecked) {
        event.preventDefault();
        showErrorMsg();
      }
    }
  });
}

function handleSignUpForm() {
  const signUpForm = document.querySelector('.signup-form');

  signUpForm.addEventListener('submit', validateForm);
}

function addInputField() {
  const checkingInputField = document.getElementById('input-customized-gender');
  

  if (!checkingInputField) {
    const inputField = document.createElement('input');
    inputField.name = 'gender-custom';
    inputField.id = 'input-customized-gender';
    inputField.placeholder = 'Gênero (opcional)';

    const callingForm = document.querySelector('.signup-form');
    const callingButton = document.querySelector('#facebook-register');

    callingForm.insertBefore(inputField, callingButton);
  }
}

function removeInputField() {
  const checkingInputField = document.getElementById('input-customized-gender');

  if (checkingInputField) {
    checkingInputField.remove();
  }
}

function handleCustomGender() {
  const customizeGender = document.getElementById('personalizado');
  const femenineGender = document.getElementById('feminino');
  const masculineGender = document.getElementById('masculino');

  customizeGender.addEventListener('change', addInputField);
  femenineGender.addEventListener('change', removeInputField);
  masculineGender.addEventListener('change', removeInputField);

}

window.onload = () => {
  handleLoginButton();
  handleSignUpForm();
  handleCustomGender();
};
