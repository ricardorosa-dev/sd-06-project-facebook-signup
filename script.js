function loginButton() {
  alert(document.getElementById('user-email-phone').value);
}

function validateRadio() {
  const radio = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  return radio[0].checked || radio[1].checked || radio[2].checked;
}

function validateDate() {
  const date = document.querySelectorAll('form')[1].querySelectorAll('input[type=text]')[3];
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

function saveContent() {
  const obj = {};
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  obj.fullname = `${firstName} ${lastName}`;
  obj.phone_email = document.getElementById('phone_email').value;
  obj.birthdate = document.getElementById('birthdate').value;
  let radioButtonOption = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  for (let i = 0; i < radioButtonOption.length; i += 1) {
    if (radioButtonOption[i].checked) {
      obj.gender = radioButtonOption[i].value;
    }
  }
  return obj;
}

function newContent(obj) {
  const divRight = document.querySelector('.right-content');
  divRight.innerHTML = '';
  divRight.innerHTML = `Ola, ${obj.fullname},
  Telefone ou email: ${obj.phone_email}
  Data de nascimento: ${obj.birthdate}
  Genero: ${obj.gender}`;
}

function validate(event) {
  event.preventDefault();
  const radio = validateRadio();
  const password = validatePassword();
  const text = validateText();
  const date = validateDate();
  if (!radio || !password || !text || !date) {
    if (document.getElementById('validateDiv').childNodes.length !== 0) {
      const oldP = document.getElementsByTagName('p');
      document.getElementById('validateDiv').removeChild(oldP);
    }
    const p = document.createElement('p');
    p.innerText = 'Campos inválidos';
    document.getElementById('validateDiv').appendChild(p);
  } else {
    const info = saveContent();
    newContent(info);
  }
}

function otherButton() {
  const radio = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  const divOther = document.getElementById('other-option');
  if (radio[2].checked) {
    if (divOther.childNodes.length !== 0) {
      const oldInput = document.getElementsByTagName('input');
      divOther.removeChild(oldInput);
    }
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'gender-custom');
    input.setAttribute('placeholder', 'Gênero (opcional)');
    divOther.appendChild(input);
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
