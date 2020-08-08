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
  let valido = true;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      valido = false;
    }
  }
  if (!valido) {
    messageInvalid();
  }
}
const botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', validate);

const person = document.querySelector('#p');
const femi = document.querySelector('#f');
const masc = document.querySelector('#m');
const todos = document.querySelector('.generos');
let gambiarra = 0;

femi.addEventListener('click', function () {
  gambiarra = 0;
  if (document.querySelector('#gender-custom')) {
    todos.removeChild(document.querySelector('#gender-custom'));
  }
});

masc.addEventListener('click', function () {
  gambiarra = 0;
  if (document.querySelector('#gender-custom')) {
    todos.removeChild(document.querySelector('#gender-custom'));
  }
});

person.addEventListener('click', function () {
  gambiarra += 1;
  if (gambiarra === 1) {
    const novoInput = document.createElement('input');
    novoInput.type = 'text';
    novoInput.name = 'gender-custom';
    novoInput.placeholder = 'Gênero (opcional)';
    novoInput.id = 'gender-custom';
    todos.appendChild(novoInput);
  }
});
