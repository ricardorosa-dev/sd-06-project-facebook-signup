const buttonLogin = document.querySelector('#button-login');
const submitButton = document.querySelector('#facebook-register');
const registerForm = document.querySelector('#register-form p');

buttonLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone').value;
  alert(login);
});

submitButton.addEventListener('click', function () {
  const inputs = document.querySelectorAll('#register-form input');
  for (let index = 0;  index < inputs.length; index += 1) {
    if (!inputs[index].checkValidity()) {
      if (registerForm) {
        registerForm.remove();
      }
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Campos inválidos';
      document.querySelector('#register-form').appendChild(paragraph);
      break;
    }
  }
});
