const btn = document.querySelector('#button-login');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

function messageInvalid() {
  let formulario = document.querySelector('.forms');
  let messageError = document.createElement('div');
  messageError.innerText = 'Campos inválidos';
  formulario.appendChild(messageError);
}

function validate() {
  let inputs = document.querySelectorAll('input');
  let valido = true;
  for (let i in inputs) {
    if (inputs[i].value === '') {
      valido = false;
    }
  }
  if (!valido) {
    messageInvalid();
  }
}
let botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', validate);
