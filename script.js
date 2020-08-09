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
  let auxBol = true;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') auxBol = false; 
  }
  if (!auxBol) messageInvalid();
}
const botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', validate);
