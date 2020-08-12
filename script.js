function generateErrorElement() {
  let errorElement = document.querySelector('.error');
  const parentElement = document.querySelector('#signUp');
  if (errorElement == null) {
    errorElement = document.createElement('div');
    errorElement.classList = 'error';
    errorElement.innerText = 'Campos inválidos';
    parentElement.append(errorElement);
  }
}

function removeErrorElement() {
  const errorElement = document.querySelector('.error');
  if (errorElement.length > 0) {
    errorElement.parentElement.removeChild(errorElement);
  }
}

function createDataContainer(map) {
  const rightContainer = document.createElement('article');
  const mainContainer = document.getElementsByClassName('main-content')[0];
  rightContainer.classList = 'right-content';
  mainContainer.appendChild(rightContainer);
  const newElement = document.createElement('h1');
  newElement.classList = 'new-element';
  newElement.innerText = `Olá, ${map.get('firstname')} ${map.get('lastname')}`;
  rightContainer.appendChild(newElement);
}

function removeDataContainer() {
  const parentElemen = document.getElementsByClassName('main-content')[0];
  const childElement = document.getElementById('article');
  parentElemen.removeChild(childElement);
}

function getData() {
  const inputs = document.querySelectorAll('main input');
  const dataMap = new Map();
  for (let i = 0; i < inputs.length; i += 1) {
    if (i <= 4) {
      dataMap.set(inputs[i].name, inputs[i].value);
    }
    if (inputs[i].checked) {
      dataMap.set(inputs[i].name, inputs[i].value);
    }
  }
  return dataMap;
}

function showData() {
  const dataMap = getData();
  removeDataContainer();
  createDataContainer(dataMap);
}

function setFilledState(inputs) {
  let filledElements = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    const currentState = inputs[i].getAttribute('filled');
    if (currentState !== 'true') {
      generateErrorElement();
    } else {
      filledElements += 1;
    }
  }
  if (filledElements >= (inputs.length) - 2) {
    removeErrorElement();
    showData();
  }
}

function isFilled(inputs, e) {
  if (inputs.value !== '' && inputs === e.currentTarget) {
    inputs.setAttribute('filled', 'true');
  }
}

function isFilledInputs(e, inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    isFilled(inputs[i], e);
    if (inputs[i].value === '' && inputs[i] === e.currentTarget) {
      inputs[i].setAttribute('filled', 'false');
    }
  }
}

function validateInputs(e, inputs) {
  const errorElements = document.querySelectorAll('.error');
  if (errorElements.length === 0) {
    isFilledInputs(e, inputs);
    setFilledState(inputs);
  }
}

function initAttributes(inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].setAttribute('filled', 'false');
  }
}

function generateCustomInput() {
  const newInput = document.createElement('input');
  const buttonArea = document.querySelector('.button-area');
  newInput.type = Text;
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  newInput.classList = 'input-gender input';
  newInput.id = 'custom-input';
  newInput.style.marginBottom = '10px';
  buttonArea.insertAdjacentElement('beforebegin', newInput);
}

function removeCustomInput() {
  const customInput = document.querySelector('#custom-input');
  const parentElement = customInput.parentNode;
  parentElement.removeChild(customInput);
}

function validateCustomInputRemoval(inputsGender) {
  for (let i = 0; i < inputsGender.length; i += 1) {
    inputsGender[i].addEventListener('change', () => {
      const customInput = document.getElementById('custom-input');
      if (!inputsGender[2].checked && customInput) {
        removeCustomInput();
      }
    });
  }
}

function generateCustomInputEvent(inputsGender) {
  inputsGender[2].addEventListener('click', function () {
    generateCustomInput(inputsGender[2]);
  });
  validateCustomInputRemoval(inputsGender);
}

function inputEvents() {
  const inputs = document.querySelectorAll('main input');
  const inputsGender = document.querySelectorAll('.input-gender');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].addEventListener('blur', function (e) {
      isFilledInputs(e, inputs);
      setFilledState(inputs);
    });
  }
  generateCustomInputEvent(inputsGender);
}

function buttonEvents() {
  const inputs = document.querySelectorAll('main input');
  const buttonLogin = document.getElementById('button-login');
  const buttonConclude = document.getElementById('facebook-register');
  buttonConclude.addEventListener('click', function (e) {
    initAttributes(inputs);
    validateInputs(e, inputs);
    e.preventDefault();
  });
  buttonLogin.addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });
}

window.onload = () => {
  buttonEvents();
  inputEvents();
};
