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

function getInputGenderData(input) {
  const inputGenderMap = new Map();
  const customInput = document.querySelector('#custom-input');
  if (input.checked) {
    if (customInput) {
      inputGenderMap.set(input.name, customInput.value);
    } else {
      inputGenderMap.set(input.name, input.value);
    }
  }
  return inputGenderMap
}

function getData() {
  const inputs = document.querySelectorAll('main input');
  let inputsMap = new Map();
  const dataMap = new Map();
  for (let i = 0; i < inputs.length; i += 1) {
    if (i <= 4) {
      dataMap.set(inputs[i].name, inputs[i].value);
    }
    else {
      // reference  https://stackoverflow.com/questions/36959923/javascript-concat-two-map-objects //
      inputsMap = new Map([...inputsMap].concat([...getInputGenderData(inputs[i])]));
    }
  }
  inputsMap = new Map([...dataMap].concat([...inputsMap]));

  return inputsMap;
}

function showData(filledElements, inputs) {
  if (filledElements >= (inputs.length) - 2) {
    const dataMap = getData();
    removeErrorElement();
    removeDataContainer();
    createDataContainer(dataMap);
  }
}

function setFilledState(inputs) {
  let filledElements = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    const currentState = inputs[i].getAttribute('filled');
    if (currentState !== 'true') {
      generateErrorElement();
    } else if (!inputs[i].classList.contains('input-gender')) {
      filledElements += 1;
    }
  }
  filledElements += 1;
  showData(filledElements, inputs);
}

function isFilled(inputs) {
  if ((inputs.value !== '' && inputs.value !== undefined) || inputs.checked) {
    inputs.setAttribute('filled', 'true');
  }
}

function isFilledTextInput(inputText) {
  isFilled(inputText);
  if (inputText.value === '' || inputText.value === undefined ) {
    inputText.setAttribute('filled', 'false');
  }
}

function isFilledRadioInput(inputRadio) {
  isFilled(inputRadio);
  if (!inputRadio.checked) {
    inputRadio.setAttribute('filled', 'false');
  }
}

function isFilledInputs(inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text') {
      isFilledTextInput(inputs[i]);
    } else if (inputs[i].type === 'radio') {
      isFilledRadioInput(inputs[i]);
    }
  }
}

function validateInputs(inputs) {
  isFilledInputs(inputs);
  setFilledState(inputs);
}

function initAttributes(inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].setAttribute('filled', 'false');
  }
}

function checkCustomInputExistence() {
  const customInput = document.getElementById('custom-input');
  if (customInput) {
    return true;
  }
    return false;
  }


function generateCustomInput() {
  const existent = checkCustomInputExistence();
  if (!existent) {
    const newInput = document.createElement('input');
    const buttonArea = document.querySelector('.button-area');
    newInput.type = Text;
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    newInput.classList = 'input-gender input';
    newInput.id = 'custom-input';
    newInput.style.marginBottom = '10px';
    buttonArea.insertAdjacentElement('beforebegin', newInput);
    newInput.addEventListener('blur', () => {
      isFilledInputs(newInput);
    });
  }
}

function removeCustomInput() {
  const customInput = document.querySelector('#custom-input');
  const parentElement = customInput.parentNode;
  parentElement.removeChild(customInput);
}

function validateCustomInputRemoval(inputsGender) {
  for (let i = 0; i < inputsGender.length; i += 1) {
    inputsGender[i].addEventListener('blur', () => {
      const customInput = document.getElementById('custom-input');
      if (!inputsGender[2].checked && customInput) {
        removeCustomInput();
      }
    });
  }
}

function addCustomInputEvent(inputsGender) {
  inputsGender[2].addEventListener('click', function (e) {
    generateCustomInput(inputsGender[2], e);
  });
  validateCustomInputRemoval(inputsGender);
}

function inputEvents() {
  const inputs = document.querySelectorAll('main input');
  const inputsGender = document.querySelectorAll('.input-gender');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].addEventListener('blur', function () {
      isFilledInputs(inputs);
    });
  }
  addCustomInputEvent(inputsGender);
}

function buttonEvents() {
  const inputs = document.querySelectorAll('main input');
  const buttonLogin = document.getElementById('button-login');
  const buttonConclude = document.getElementById('facebook-register');
  buttonConclude.addEventListener('click', function (e) {
    initAttributes(inputs);
    validateInputs(inputs);
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
