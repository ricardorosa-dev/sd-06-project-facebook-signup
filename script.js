const btn = document.querySelector('#button-login');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

document.querySelector('#p').addEventListener('click', function () {
  if (document.querySelector('.radio-buttons').lastElementChild.className === '') {
    const aux = document.createElement('input');
    aux.placeholder = 'Gênero (opcional)';
    aux.name = 'gender-custom';
    document.querySelector('.radio-buttons').appendChild(aux);
  }
});
