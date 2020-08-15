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

function selectRadioChecked() {
  let check = '';
  const inputsRadio = document.querySelectorAll('.radio');
  for (let i = 0; i < inputsRadio.length; i += 1) {
    if (inputsRadio[i].checked === true) {
      check = inputsRadio[i].value;
    }
  }
  return check;
}

function setLocalStorage() {
  const control = validateInputs();
  if (control === true) {
    const check = selectRadioChecked();
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#sob');
    const mailPhone = document.querySelector('#cel-email');
    const date = document.querySelector('#date-nsc');
    localStorage.setItem('control', 'true');
    localStorage.setItem('nome', name.value);
    localStorage.setItem('sob', lastName.value);
    localStorage.setItem('contato', mailPhone.value);
    localStorage.setItem('nsc', date.value);
    localStorage.setItem('genero', check);
    alert('salvo');
  }
}

window.onload = function () {
  function getLocalStorage() {
    const rigthContent = document.querySelector('.right-content');
    if (localStorage.getItem('control') === 'true') {
      document.querySelector('#register-form').style.display = 'none';
      for (let i = 0; i < localStorage.length - 2; i += 1) {
        const elementoLi = document.createElement('li');
        elementoLi.style.marginTop = '15px';
        elementoLi.style.listStyleType = 'none';
        elementoLi.style.color = 'red';
        rigthContent.appendChild(elementoLi);
      }
      const elementoLi = document.querySelectorAll('li');
      elementoLi[0].innerText = `Olá, ${localStorage.getItem('nome')} ${localStorage.getItem('sob')}`;
      elementoLi[1].innerText = localStorage.getItem('contato');
      elementoLi[2].innerText = localStorage.getItem('nsc');
      elementoLi[3].innerText = localStorage.getItem('genero');
      localStorage.setItem('control', 'false');
    }
  }
  getLocalStorage();
};

buttonRegister.addEventListener('click', function () {
  validateInputs();
  setLocalStorage();
});
