const btnLogin = document.querySelector('#button-login');
const inputBox = document.querySelector('#user-email-phone');
const genderCuston = document.querySelector('#gender-person');

btnLogin.addEventListener('click', function () {
  alert(inputBox.value);
});

genderCuston.addEventListener('checked', function () {
  let newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'gender-custon');
  newInput.setAttribute('placeholder', 'Gênero (opcional)');
  document.getElementById('input-gender-custon').appendChild(newInput);
})