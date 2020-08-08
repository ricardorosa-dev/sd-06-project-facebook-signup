const buttonEnter = document.getElementById('button-login');
const inputEmailOrPhone = document.getElementById('user-email-phone');

buttonEnter.addEventListener('click', () => {
  alert(inputEmailOrPhone.value);
});

const nameForm = document.getElementsByClassName('name');
const lastnameForm = document.getElementsByClassName('lastname');
const emailPhoneForm = document.getElementsByClassName('email-phone');
const passwordForm = document.getElementsByClassName('senha');
const birthForm = document.getElementsByClassName('birth');

const log = document.getElementById('log');

function logSubmit(event) {
  const arrayDateForm = [nameForm, lastnameForm, emailPhoneForm, passwordForm, birthForm];
  arrayDateForm.forEach(element => {
    element.value = '';
    log.innerHTML = 'Campos inválidos';
    event.preventDefault();
  });
}

const maleForm = document.getElementById('masculino');
const femaleForm = document.getElementById('feminino');
const otherForm = document.getElementById('personalizado');

function logSubmitGender(event) {
  if (maleForm.value || femaleForm.value || otherForm.value === '') {
    log.innerHTML = 'Campos inválidos';
    event.preventDefault();
  }
}
const getGender = document.querySelector('.Gender');
const buttonForm = document.getElementById('facebook-register');
function makeDivPersonal(event) {
  if (otherForm.value !== '') {
    const inputPersonal = document.createElement('input');
    inputPersonal.name = 'gender-custom';
    inputPersonal.placeholder = 'Gênero (opcional)';
    getGender.appendChild(inputPersonal);
    event.preventDefault();
  }
}

buttonForm.addEventListener('click', logSubmit);
buttonForm.addEventListener('click', logSubmitGender);
otherForm.addEventListener('click', makeDivPersonal);