const btn = document.querySelector('#button-login');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

// document.querySelector('#p').addEventListener('click', function () {
//   if (document.querySelector('.radio-buttons').lastElementChild.className === '') {
//     const aux = document.createElement('input');
//     aux.placeholder = 'Gênero (opcional)';
//     aux.name = 'gender-custom';
//     aux.className = 'gender-custom-input';
//     document.querySelector('.radio-buttons').appendChild(aux);
//   }
// });
function messageInvalid() {
  const messageError = document.querySelector('.divMessage');
  messageError.innerText = 'Campos inválidos';
}

function validate() {
  const aux = '';
  const inputs = document.querySelectorAll('input');
  let auxBol = true;
  for (let index = 0; i < inputs.length; i += 1) {
    if (inputs[index].value === aux) auxBol = false;
  }
  if (!auxBol) messageInvalid();
}
const botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', validate);
