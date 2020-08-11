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

  if (extraGender.hasChildNodes() === false) {
    const inputElement = createInput();
    extraGender.appendChild(inputElement);
  }
}

function removeInput() {
  const extraGender = document.querySelector('#input-personalizado');
  if (extraGender.hasChildNodes()) {
    extraGender.removeChild(extraGender.firstChild);
  }
}

function handleGenderOption() {
  const customize = document.getElementById('personalizado');
  if (customize.checked) {
    addInput();
  } else {
    removeInput();
  }
}
const genderOption = document.querySelector('.form-group-4');
genderOption.addEventListener('change', handleGenderOption);

const getText = () => {
  const allText = [];
  const inputText = document.querySelectorAll('.selected-input');

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
  const inputPassword = document.querySelector('#password').value;

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

const renderOutput = (input) => {
  const rightContentDiv = document.querySelector('.right-content');

  rightContentDiv.innerHTML = '';
  rightContentDiv.innerHTML = `<p>${input}</p>`;
};

const renderMessage = (input) => {
  const renderMessageDiv = document.querySelector('#render-message');
  renderMessageDiv.classList.remove('hidden');
  renderMessageDiv.innerHTML = `<span>${input}</span>`;
};

const submitBtn = document.querySelector('#facebook-register');
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

  if (testResult !== 0) {
    const MessageString = 'Campos inválidos';
    renderMessage(MessageString);
  } else {
    const okMessage = `Olá ${allInputs[0]} ${allInputs[1]}, seu Email ou telefone é ${allInputs[2]} e você selecionou o gênero ${allInputs[4]}.`;
    renderOutput(okMessage);
  }
});
