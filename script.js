const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  alert('Email ou telefone');
});
function generateErrorElement() {
  const errorElement = document.querySelector('.error');
  if (errorElement == null) {
    const parentElement = document.querySelector('#signUp');
    const errorElement = document.createElement('div');
    errorElement.classList = 'error';
    errorElement.innerText = 'Campos inválidos';
    parentElement.append(errorElement);
  }
}

function validateInputs(e, inputs) {
  const errorElements = document.querySelectorAll('.error');
  if (errorElements.length === 0) {
    isFilledInputs(e, inputs);
    setFilledState(inputs);
  }
}

function removeErrorElement() {
  const errorElement = document.querySelector('.error');
  if (errorElement.length > 0) {
    errorElement.parentElement.removeChild(errorElement);
  }
}

function isFilledInputs(e, inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value !== '' && inputs[i] === e.currentTarget) {
      inputs[i].setAttribute('filled','true');
    }
    else if (inputs[i].value === '' && inputs[i] === e.currentTarget) {
      inputs[i].setAttribute('filled','false');
    }
  }
}

function getData () {
  const inputs = document.querySelectorAll('main input');
  let dataMap = new Map();
  for (let i = 0; i < inputs.length; i += 1) {
    if (i <= 4) {
      dataMap.set(inputs[i].name,inputs[i].value);
    }
    if (inputs[i].checked) {
      dataMap.set(inputs[i].name,inputs[i].value)
    }
  }
  return dataMap
}

function createDataContainer (map) {
  const rightContainer = document.getElementsByClassName('right-content')[0];
  for (let value of map.values()) {
    let newElement = document.createElement('div');
    newElement.classList = 'new-element';
    newElement.innerText = value;
    rightContainer.appendChild(newElement);
  }
}

function removeDataContainer () {
 const forms = document.getElementById('signUp');
 console.log(forms);
 document.getElementsByClassName('right-content')[0].removeChild(forms);
}

function showData() {
  const dataMap = getData();
  console.log(dataMap);
  removeDataContainer();
  createDataContainer(dataMap);
}

function setFilledState(inputs) {
  let filledElements = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    const  currentState = inputs[i].getAttribute('filled');
    if(currentState !== 'true') {
      generateErrorElement();
    }
    else {
      filledElements += 1;
    }
  }
  if (filledElements >= (inputs.length)-2) {
    removeErrorElement();
    showData();
  }
}

function initAttributes(inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].setAttribute('filled','false');
  }
}

function buttonEvents() {
  const inputs = document.querySelectorAll('main input');
  const buttonConclude = document.getElementById('facebook-register');
  buttonConclude.addEventListener('click', function (e) {
    validateInputs(e, inputs);
    e.preventDefault();
  });
}

function inputEvents() {
  const inputs = document.querySelectorAll('main input');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].addEventListener('blur', function (e) {
      isFilledInputs(e, inputs);
      setFilledState(inputs);
    });
  }
}

window.onload = () => {
  buttonEvents();
  inputEvents();
};
