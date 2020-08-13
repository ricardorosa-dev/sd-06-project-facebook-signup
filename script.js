const btn = document.querySelector('#button-login');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

function messageInvalid() {
  const messageError = document.querySelector('.divMessage');
  messageError.innerText = 'Campos inválidos';
}

function validate() {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      messageInvalid();
    }
  }
}

const botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', validate);

// **Tendo como referência o código do PR da dupla Matheus e Ana Flávia**

const perso = document.querySelector('#p');
const feminino = document.querySelector('#f');
const masculino = document.querySelector('#m');
const todos = document.querySelector('.generos');
let genderClick = 0;

feminino.addEventListener('click', function () {
  genderClick = 0;
  const gender = document.querySelector('#otherGender');
  if (gender) {
    gender.remove(gender);
  }
});

masculino.addEventListener('click', function () {
  genderClick = 0;
  const gender = document.querySelector('#otherGender');
  if (gender) {
    gender.remove(gender);
  }
});

perso.addEventListener('click', function () {
  genderClick += 1;
  if (genderClick === 1) {
    const personalizado = document.createElement('input');
    personalizado.name = 'otherGender';
    personalizado.placeholder = 'Gênero (opcional)';
    personalizado.id = 'otherGender';
    todos.appendChild(personalizado);
  }
});
