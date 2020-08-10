function loginAlert() {
  const email = document.querySelector('#user-email-phone').value;
  alert(email);
}

function showInvalidFieldsError() {
  const errorSpan = document.getElementById('signUp-error');
  errorSpan.innerHTML = 'Campos inválidos';
}

function hideInvalidFieldsError() {
  const errorSpan = document.getElementById('signUp-error');
  errorSpan.innerHTML = '';
}

function validateInputs() {
  const formInputs = document.forms['signUp-form'].getElementsByTagName('input');
  for (let index = 0; index < formInputs.length; index += 1) {
    const currentInput = formInputs[index];
    if (!currentInput.value) {
      showInvalidFieldsError();
      break;
    } else {
      hideInvalidFieldsError();
    }
  }
}

function createCustomGenderField() {
  const customGenderField = document.createElement('input');
  customGenderField.name = 'gender-custom';
  customGenderField.placeholder = 'Gênero (opcional)';
  customGenderField.classList.add('gender');
  customGenderField.id = "gender-custom-id";
  return customGenderField;
}

function handleCustomGender() {
  if (document.getElementById('custom').checked) {
    const customGenderField = createCustomGenderField();
    const signUpForm = document.getElementById('gender-selection');
    signUpForm.after(customGenderField);
  }
}

function delCustomGender() {
  if(document.getElementById("gender-custom-id")){
  document.getElementById("gender-custom-id").remove()
  }
}

window.onload = function () {
  const loginBtn = document.querySelector('#button-login');
  loginBtn.addEventListener('click', loginAlert);

  const signUpBtn = document.getElementById('facebook-register');
  signUpBtn.addEventListener('click', function (event) {
    event.preventDefault();
    validateInputs();
  });
};
