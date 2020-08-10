const btnLogin = document.querySelector('#button-login');
const emailLogin = document.querySelector('#user-email-phone');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const birthdate = document.querySelector('#birthdate');
const form = document.querySelector('#form');
const submit = document.querySelector('#facebook-register');
const message = document.querySelector('#message');
const allGenders = document.querySelector('#genders');
const inputs = [];
const optional = document.querySelector('#optionalGender');

function alerta() {
  alert(emailLogin.value);
}

function checkInputs() {
  inputs[0] = name.value;
  inputs[1] = lastName.value;
  inputs[2] = email.value;
  inputs[3] = password.value;
  inputs[4] = birthdate.value;
  inputs[5] = form.gender.value;
  return inputs;
}

function cadastrar(event) {
  event.preventDefault();
  checkInputs();

  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index] === '') {
      message.innerHTML = 'Campos inválidos';
    }
  }
}

function createGender() {
  const nameGender = document.createElement('input');
  nameGender.name = 'gender-custom';
  nameGender.placeholder = 'Gênero (opcional)';
  nameGender.className = 'input';
  optional.appendChild(nameGender);
}

function personalize(event) {
  const click = event.target;
  if (click.value === 'Personalizado') {
    createGender();
  }
}

window.onload = function () {
  btnLogin.addEventListener('click', alerta);
  submit.addEventListener('click', cadastrar);
  allGenders.addEventListener('click', personalize);
};
