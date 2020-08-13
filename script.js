const loginButton = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const customGender = document.querySelector('#custom');


//  Consulta realizada no PullRequest https://github.com/tryber/sd-06-project-facebook-signup/pull/117/files como referência

function clickButton() {
  alert(userEmailPhone.value);
}

function customField() {
  const genderParent = document.querySelector('.new-gender-field');
  const newGender = document.createElement('input');
  genderParent.appendChild(newGender);
  newGender.setAttribute('type', 'text');
  newGender.setAttribute('name', 'gender-custom');
  newGender.setAttribute('placeholder', 'Gênero (opcional)');
  newGender.setAttribute('type', 'text');
}

window.onload = function () {
  loginButton.addEventListener('click', clickButton);
};

customGender.addEventListener('change', customField);
