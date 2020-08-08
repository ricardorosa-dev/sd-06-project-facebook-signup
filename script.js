const btn = document.querySelector('#button-login');
const check = document.querySelector('.validation-check');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

 function person() {
  if (document.getElementById('p').checked == true) {
    const customInput = document.createElement('input');
    customInput.name = 'gender-custom';
    customInput.placeholder = 'Gênero (opcional)';
    customInput.id = 'gender-custom';
    document.querySelector('.checkPerson').appendChild(customInput);
  }
 }
