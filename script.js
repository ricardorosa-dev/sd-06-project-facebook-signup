const buttonLogin = document.querySelector('#button-login');
const inputUser = document.querySelector('#user-email-phone');
const inputPerson = document.querySelector('#personalizado');
const divGenPerson = document.querySelector('#gen-person');

buttonLogin.addEventListener('click', function () {
  alert(inputUser.value);
});

inputPerson.addEventListener('click', function () {
  const elemFather = document.querySelector('#gen-person > #custom');
  if (!elemFather) {
    const inputGenPerson = document.createElement('input');
    inputGenPerson.type = 'text';
    inputGenPerson.name = 'gender-custom';
    inputGenPerson.id = 'custom';
    inputGenPerson.placeholder = 'Gênero (opcional)';
    inputGenPerson.style.width = '295px';
    divGenPerson.appendChild(inputGenPerson);
  }
});
