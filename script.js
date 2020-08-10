function loginButton() {
  alert(document.getElementById('user-email-phone').value);
}

function validate() {
  const inputsArray = document.querySelectorAll('form')[1].querySelectorAll('input');
  let radio = false;
  for (let i = 0; i < inputsArray.length; i += 1) {
    if (inputsArray[i].type === 'radio') {
      if (inputsArray[i].checked === true) {
        radio = true;
      }
    } else {
      if (inputsArray[i].value === '') {
        alert('Campos inválidos');
        break;
      }
    }   
  }
  if (radio === false) {
    alert('Campos inválidos');
  }
}

window.onload = function () {
  const button = document.getElementById('button-login');
  const registerButton = document.getElementById('facebook-register');
  button.addEventListener('click', loginButton);
  registerButton.addEventListener('click', validate);
};
