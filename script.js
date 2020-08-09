const btn = document.querySelector('#button-login');
const aux = '';
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
  let auxBol = true;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === aux) auxBol = false;
  }
  if (!auxBol) messageInvalid();
}
const botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', validate);


  const personId = document.querySelector('#p');
  personId.addEventListener('click', function () {
    if (document.querySelector('.teste-genero').lastElementChild.className === aux) {
      const auxChild = document.createElement('input');
      auxChild.placeholder = 'Gênero (opcional)';
      auxChild.name = 'gender-custom';
      auxChild.className = 'gender-custom-testeEvaluator';
      document.querySelector('.teste-genero').appendChild(auxChild);
    }
  });
