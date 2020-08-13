const btn = document.querySelector('#button-login');
const aux = '';
btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

function testingInvalidit() {
  const messageError = document.querySelector('.configuerMsg');
  messageError.innerText = 'Campos inválidos';
}

function testingValidation() {
  const inputs = document.querySelectorAll('input');
  let auxBol = true;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === aux) auxBol = false;
  }
  if (!auxBol) testingInvalidit();
}
const botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', testingValidation);

const perso = document.querySelector('#p');
const todos = document.querySelector('.generos');
perso.addEventListener('click', function () {
  const novoInput = document.createElement('input');
  novoInput.type = 'text';
  novoInput.name = 'gender-custom';
  novoInput.placeholder = 'Gênero (opcional)';
  todos.appendChild(novoInput);
});
