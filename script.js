const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const inputEmail = document.getElementById('user-email-phone').value;
  window.alert(inputEmail);
  inputEmail.innerHTML = '';
});

function createInput() {
  const inputElement = document.createElement('input');
  inputElement.name = 'gender-custom';
  inputElement.placeholder = 'Gênero (opcional)';
  inputElement.className = 'gender-custom';
  return inputElement;
}

function addInput() {
  const extraGender = document.querySelector('#input-personalizado');
  const inputElement = createInput();
  extraGender.appendChild(inputElement);
}

function removeInput() {
  const extraGender = document.querySelector('#input-personalizado');
  if (extraGender.hasChildNodes()) {
    extraGender.removeChild(extraGender.firstChild);
  }
}

function handleGenderOption() {
  if (document.getElementById('personalizado').checked) {
    addInput();
  } else {
    removeInput();
  }
}
const genderOption = document.querySelector('.form-group-4');
genderOption.addEventListener('change', handleGenderOption);

const getText = () => {
  const allText = [];
  const inputText = document.querySelectorAll('input[type=text]');

  for (let i = 0; i < inputText.length; i += 1) {
    const input = inputText[i].value;
    if (input === null || input === '') {
      allText.push(null);
    } else {
      allText.push(input);
    }
  }
  return allText;
};

const getPassword = () => {
  const allPassword = [];
  const inputPassword = document.querySelector('input[type=password]').value;

  if (inputPassword === null || inputPassword === '') {
    allPassword.push(null);
  } else {
    allPassword.push('password');
  }
  return allPassword;
};

const getRadio = () => {
  const allRadio = [];
  const inputRadio = document.querySelectorAll('input[type=radio]');

  let count = 1;
  for (let i = 0; i < inputRadio.length; i += 1) {
    if (inputRadio[i].checked) {
      const radio = inputRadio[i].labels[0].innerHTML;
      allRadio.push(radio);
      count -= 1;
    }
  }

  if (count === 1) {
    allRadio.push(null);
  }
  return allRadio;
};

const getDate = () => {
  const allDate = [];
  const inputDate = document.querySelector('input[type=date]').value;

  if (inputDate === null || inputDate === '') {
    allDate.push(null);
  } else {
    allDate.push(inputDate);
  }
  return allDate;
};

const renderOutput = (inputs) => {
  const renderOutputDiv = document.querySelector('#render-output');
  const rightContentDiv = document.querySelector('.right-content');

  renderOutputDiv.classList.remove('hidden');
  rightContentDiv.classList.remove('right-content');
  rightContentDiv.classList.add('hidden');

  for (let i = 0; i < inputs.length; i += 1) {
    renderOutputDiv.innerHTML += `<div><p>${inputs[i]}</p></div>`;
  }
};

const renderMessage = (input) => {
  const renderMessageDiv = document.querySelector('#render-message');
  renderMessageDiv.classList.remove('hidden');
  renderMessageDiv.innerHTML = `<span>${input}</span>`;
};

const submitBtn = document.querySelector('button[type = submit]');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const allText = getText();
  const allPassword = getPassword();
  const allRadio = getRadio();
  const allDate = getDate();
  const allInputs = allText.concat(allPassword, allRadio, allDate);

  let testResult = 0;
  for (let i = 0; i < allInputs.length; i += 1) {
    if (allInputs[i] === null) {
      testResult += 1;
    }
  }
  const OutputArray = [];

  if (testResult !== 0) {
    const MessageString = 'Campos inválidos';
    renderMessage(MessageString);
  } else {
    OutputArray[0] = `Olá ${allInputs[0]} ${allInputs[1]}`;
    OutputArray[1] = allInputs[2];
    OutputArray[2] = allInputs[4];
    renderOutput(OutputArray);
  }
});
