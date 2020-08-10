function loginButton() {
  alert(document.getElementById('user-email-phone').value);
}

function validate() {
  const inputsArray = document.getElementsByTagName('input');

  for (i = 0; i < inputsArray.length; i += 1) {

    let radio = false;
    if (inputsArray[i].type === 'radio') {
      if (inputsArray[i].checked === true) {
        radio = true;
        console.log('radio');
      }
    } else {
      if (inputsArray[i].value === '') {
        alert ('Campos inválidos');
        console.log(inputsArray[i]);
        break;
      }
    }
    if (radio === false) {
      alert ('Campos inválidos');
    }
  }
}

window.onload = function () {
  const button = document.getElementById('button-login');
  const registerButton = document.getElementById('facebook-register');
  button.addEventListener('click', loginButton);
  registerButton.addEventListener('click', validate);
};
