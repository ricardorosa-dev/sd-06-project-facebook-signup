const buttonLogin = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');
const clickPersonalizado = document.getElementsByClassName('gender')[2];
const divNewOption = document.getElementById('new-option');

function buttonAlert() {
  alert(inputEmail.value);
}

function newOption() {
  const newElement = document.createElement('input');
  newElement.type = 'text';
  newElement.name = 'gender-custom';
  newElement.placeholder = 'Gênero (opcional)';
  divNewOption.appendChild(newElement);
}

window.onload = function () {
  buttonLogin.addEventListener('click', buttonAlert);
  clickPersonalizado.addEventListener('click', newOption);
};
