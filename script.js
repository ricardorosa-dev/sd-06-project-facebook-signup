const buttonLogin = document.querySelector('#button-login');
const inputUser = document.querySelector('#user-email-phone');
const inputPerson = document.querySelector('#personalizado');
const divGenPerson = document.querySelector('#gen-person');
const buttonRegister = document.querySelector('#facebook-register');
const divError = document.querySelector('#error');
const inputMasc = document.querySelector('#masculino');
const inputFem = document.querySelector('#feminino');

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

function valida() {
  const inputsAll = document.querySelectorAll('input');
  let validation = true;
  if (inputsAll[2].value === '' || inputsAll[3].value === '') {
    validation = false;
    return validation;
  }
  if (inputsAll[4].value === '' || inputsAll[5].value === '' ||
    inputsAll[6].value === '') {
    validation = false;
  }
  if (inputsAll[7].checked === false && inputsAll[8].checked ===
    false && inputsAll[9].checked === false) {
    validation = false;
  }
  if (inputsAll[10]) {
    if (inputsAll[10].value === '') {
      validation = false;
    }
  }
  return validation;
}

function validateInputs() {
  let validation = valida();
  if (validation === false) {
    const elemP = document.createElement('p');
    elemP.innerHTML = 'Campos inválidos';
    divError.appendChild(elemP);
  }
  return validation;
}

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
