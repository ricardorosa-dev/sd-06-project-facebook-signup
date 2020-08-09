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

window.onload = function () {
  const loginBtn = document.querySelector('#button-login');
  loginBtn.addEventListener('click', loginAlert);

  const signUpBtn = document.getElementById('facebook-register');
  signUpBtn.addEventListener('click', function (event) {
    event.preventDefault();
    validateInputs();
  });
};
