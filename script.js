function loginButton() {
  alert(document.getElementById('user-email-phone').value);
}

function validateRadio() {
  const radio = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  if (radio[0].checked || radio[1].checked || radio[2].checked) {
    return true;
  }
  return false;
}

function validateDate() {
  const date = document.querySelectorAll('form')[1].querySelectorAll('input[type=date]')[0];
  if (date.value !== '') {
    return true;
  }
  return false;
}

function validateText() {
  const text = document.querySelectorAll('form')[1].querySelectorAll('input[type=text]');
  if (text[0].value !== '' && text[1].value !== '' && text[2].value !== '') {
    return true;
  }
  return false;
}

function validatePassword() {
  const password = document.querySelectorAll('form')[1].querySelectorAll('input[type=password]')[0];
  if (password.value !== '') {
    return true;
  }
  return false;
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

window.onload = function () {
  const button = document.getElementById('button-login');
  const registerButton = document.getElementById('facebook-register');
  button.addEventListener('click', loginButton);
  registerButton.addEventListener('click', validate);
};
