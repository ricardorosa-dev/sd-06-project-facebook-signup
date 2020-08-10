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

// Alert do top-bar
function alerta() {
  alert(emailLogin.value);
}

// Armazenando todos os inputs em um array
function checkInputs() {
  inputs[0] = name.value;
  inputs[1] = lastName.value;
  inputs[2] = email.value;
  inputs[3] = password.value;
  inputs[4] = birthdate.value;
  inputs[5] = form.gender.value;
  return inputs;
}

// Deletando todos os campos
function clearFields() {
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
}

// Gerando um consolidado com as informações preenchidas
function consolidate() {
  const consolidateDiv = document.createElement('div');
  consolidateDiv.innerHTML = `Olá, ${inputs[0]} ${inputs[1]}.<br>Seu e-mail ou telefone: ${inputs[2]}.<br>Data de Nascimento: ${inputs[4]}.<br>Genero: ${inputs[5]}.`;
  consolidateDiv.className = 'consolidate';
  form.appendChild(consolidateDiv);
}

// Função para o botão de cadastrar
function cadastrar(event) {
  event.preventDefault();
  checkInputs();
  let bool = true;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index] === '') {
      bool = false;
    }
  }

  if (bool === false) {
    message.innerHTML = 'Campos inválidos.';
  } else {
    clearFields();
    consolidate(inputs);
  }
}

// Criando gênero opcional
function createGender() {
  const nameGender = document.createElement('input');
  nameGender.name = 'gender-custom';
  nameGender.placeholder = 'Gênero (opcional)';
  nameGender.className = 'input';
  optional.appendChild(nameGender);
}

// Condição se o usuário apertar em Personalizado
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
