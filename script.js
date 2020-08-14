const buttonLogin = document.querySelector('#button-login');
const inputUser = document.querySelector('#user-email-phone');
const inputName = document.querySelector('#name');
const inputSob = document.querySelector('#sob');
const inputMail = document.querySelector('#cel-email');
const inputNewPass = document.querySelector('#new-pass');
const inputPerson = document.querySelector('#personalizado');
const divGenPerson = document.querySelector('#gen-person');
const buttonRegister = document.querySelector('#facebook-register');
const inputMasc = document.querySelector('#masculino');
const inputFem = document.querySelector('#feminino');
const inputDtns = document.querySelector('#date-nsc');

function exibeUserAlert() {
  buttonLogin.addEventListener('click', function () {
    alert(inputUser.value);
  });
}
exibeUserAlert();

function createInputGenPerson() {
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
}
createInputGenPerson();

function validateInputs() {
  buttonRegister.addEventListener('click', function () {
    let validation = true;
    if (inputName.value === '' || inputSob.value === '') {
      validation = false;
    }
    if (inputMail.value === '' || inputDtns.value === '' ||
      inputNewPass.value === '') {
      validation = false;
    }
    if (inputMasc.checked === false && inputFem.checked ===
      false && inputPerson.checked === false) {
      validation = false;
    }
    if (validation === false) {
      alert('Campos inválidos');
    }
    if (inputPerson.checked === true) {
      const inputNewGenero = document.querySelector('#custom');
      if (inputNewGenero.value === '') {
        alert('Campos inválidos');
      }
    }
  });
}
validateInputs();

function inputFemRemoveGenPerson() {
  inputFem.addEventListener('click', function () {
    const elemFather = document.querySelector('#gen-person > #custom');
    if (elemFather) {
      divGenPerson.lastChild.remove();
    }
  });
}
inputFemRemoveGenPerson();

function inputMascRemoveGenPerson() {
  inputMasc.addEventListener('click', function () {
    const elemFather = document.querySelector('#gen-person > #custom');
    if (elemFather) {
      divGenPerson.lastChild.remove();
    }
  });
}
inputMascRemoveGenPerson();
