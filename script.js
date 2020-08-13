function buttonAlert() {
  const inputEmail = document.getElementById('user-email-phone');
  alert(inputEmail.value);
}

function newOption() {
  const divNewOption = document.getElementById('new-option');
  const newElement = document.createElement('input');
  newElement.type = 'text';
  newElement.name = 'gender-custom';
  newElement.placeholder = 'Gênero (opcional)';
  divNewOption.appendChild(newElement);
}

function dataValidation(event) {
  event.preventDefault();

  if ((document.getElementById('first-name').value === '') || (document.getElementById('last-name').value === '') || (document.getElementById('phone-email') === '') || (document.getElementById('new_password') === '') || (document.getElementById('birth-date') === '')) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = 'Campos inválidos';
  }
}


window.onload = function () {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', buttonAlert);

  const clickPersonalizado = document.getElementsByClassName('gender')[2];
  clickPersonalizado.addEventListener('click', newOption);

  const buttonRegister = document.getElementById('facebook-register');
  buttonRegister.addEventListener('click', dataValidation);
};
