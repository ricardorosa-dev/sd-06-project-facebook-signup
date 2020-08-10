function loginButton() {
  alert(document.getElementById('user-email-phone').value);
}

function validateRadio() {
  const radio = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  return radio[0].checked || radio[1].checked || radio[2].checked;
}

function validateDate() {
  const date = document.querySelectorAll('form')[1].querySelectorAll('input[type=date]')[0];
  return date.value !== '';
}

function validateText() {
  const text = document.querySelectorAll('form')[1].querySelectorAll('input[type=text]');
  return text[0].value !== '' && text[1].value !== '' && text[2].value !== '';
}

function validatePassword() {
  const password = document.querySelectorAll('form')[1].querySelectorAll('input[type=password]')[0];
  return password.value !== '';
}

function validate(event) {
  event.preventDefault();
  const radio = validateRadio();
  const password = validatePassword();
  const text = validateText();
  const date = validateDate();
  if (!radio || !password || !text || !date) {
    const p = document.createElement('p');
    p.innerText = 'Campos inválidos';
    document.getElementById('sign-up').appendChild(p);
  }
}

function otherButton() {
  const radio = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  if (radio[2].checked) {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'gender-custom');
    input.setAttribute('placeholder', 'Gênero (opcional)');
    document.getElementById('other-option').appendChild(input);
  }
}

window.onload = function () {
  const button = document.getElementById('button-login');
  const registerButton = document.getElementById('facebook-register');
  const personalizedButton = document.getElementById('other');
  button.addEventListener('click', loginButton);
  registerButton.addEventListener('click', validate);
  personalizedButton.addEventListener('click', otherButton);
};
