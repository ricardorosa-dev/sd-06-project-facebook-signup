const btnLogin = document.querySelector('#button-login');
const inputBox = document.querySelector('#user-email-phone');
const genderCuston = document.getElementById('gender-person');
const alternativeGender = document.getElementById('input-gender-custon');

function newElement() {
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'gender-custon');
  newInput.setAttribute('placeholder', 'Gênero (opcional)');
  alternativeGender.appendChild(newInput);
}

window.onload = function () {
  genderCuston.addEventListener('click', newElement);
  btnLogin.addEventListener('click', function () {
    alert(inputBox.value);
  });
};
