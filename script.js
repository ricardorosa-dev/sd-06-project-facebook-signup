const btn = document.querySelector('#button-login');
const check =  document.querySelector('.validation-check');
const right = document.querySelector('.teste');
const aux = '';

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});
console.log("teste 1");

const botaoRegistro = document.querySelector('#facebook-register');
botaoRegistro.addEventListener('click', validate);

const perso = document.querySelector('#p');
const todos = document.querySelector('.generos');
perso.addEventListener('click', function () {
  const novoInput = document.createElement('input');
  novoInput.type = 'text';
  novoInput.name = 'gender';
  novoInput.placeholder = 'Gênero (opcional)';
  todos.appendChild(novoInput);
});
 

 

// console.log(right.element);