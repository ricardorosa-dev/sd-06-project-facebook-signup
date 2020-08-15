const buttonLogin = document.querySelector('#button-login');
const inputUser = document.querySelector('#user-email-phone');
const inputPerson = document.querySelector('#personalizado');
const divGenPerson = document.querySelector('#gen-person');
const divError = document.querySelector('#error');
const inputMasc = document.querySelector('#masculino');
const inputFem = document.querySelector('#feminino');
const buttonRegister = document.querySelector('#facebook-register');

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
      inputGenPerson.className = 'text';
      inputGenPerson.id = 'custom';
      inputGenPerson.placeholder = 'Gênero (opcional)';
      inputGenPerson.style.width = '295px';
      divGenPerson.appendChild(inputGenPerson);
    }
  });
}
createInputGenPerson();

function validaInputsText() {
  const inputsText = document.querySelectorAll('.text');
  let validation = true;
  for (let i = 0; i < inputsText.length; i += 1) {
    if (inputsText[i].value === '') {
      validation = false;
    }
  }
  return validation;
}

function validaInputsRadio() {
  const inputsRadio = document.querySelectorAll('.radio');
  let validation = true;
  let checked = 0;
  for (let i = 0; i < inputsRadio.length; i += 1) {
    if (inputsRadio[i].checked === false) {
      checked += 1;
    }
    if (checked === inputsRadio.length) {
      validation = false;
    }
  }
  return validation;
}

function validateInputs() {
  let validation = true;
  const validationInpText = validaInputsText();
  const validationInpRadio = validaInputsRadio();
  if (validationInpRadio === false || validationInpText === false) {
    validation = false;
  }
  if (validation === false) {
    const elementoP = document.querySelector('#menssager');
    if (!divError.contains(elementoP)) {
      const elemP = document.createElement('p');
      elemP.id = 'menssager';
      elemP.innerHTML = 'Campos inválidos';
      divError.appendChild(elemP);
    }
  }
  return validation;
}
buttonRegister.addEventListener('click', validateInputs);

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
