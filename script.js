const btn = document.querySelector('#button-login');
const check = document.querySelector('.validation-check');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

document.querySelector('#p').addEventListener('click', function () {
  if (document.querySelector('.radio-buttons').lastElementChild.className === '') {
    const aux = document.createElement('input');
    aux.placeholder = 'Gênero (opcional)';
    aux.name = 'gender-custom';
    aux.className = 'gender-custom-input';
    document.querySelector('.radio-buttons').appendChild(newField);
  }
});
