const btn = document.querySelector('#button-login');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

function messageInvalid() {
  const formulario = document.querySelector('.forms');
  const messageError = document.createElement('div');
  messageError.innerText = 'Campos inválidos';
  formulario.appendChild(messageError);
}

function validate() {
  const inputs = document.querySelectorAll('input');
  var valido = true;
  for (const i in inputs) {
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
