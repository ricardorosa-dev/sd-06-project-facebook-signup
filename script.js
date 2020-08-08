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

const perso = document.querySelector('#p');
const femi = document.querySelector('#f');
const masc = document.querySelector('#m');
const todos = document.querySelector('.generos');

femi.addEventListener('click', function () {
    todos.removeChild(document.querySelector('#gender-custom'));
});
masc.addEventListener('click', function () {
    todos.removeChild(document.querySelector('#gender-custom'));
});

perso.addEventListener('click', function () {
  const novoInput = document.createElement('input');
  novoInput.type = 'text';
  novoInput.name = 'gender-custom';
  novoInput.placeholder = 'Gênero (opcional)';
  novoInput.id = 'gender-custom';
  todos.appendChild(novoInput);
});
