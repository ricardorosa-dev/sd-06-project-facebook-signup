// Botão Entrar
const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const inputEmail = document.getElementById('user-email-phone').value;
  if (inputEmail === '') {
    window.alert('Por favor, preencha seu email');
  } else {
    window.alert(inputEmail);
    inputEmail.innerHTML = '';
  }
});

// CONJUNTO DE FUNÇÕES PARA TRATAR GENDER-CUSTON.
// criar elemento que receberá texto.
function createInput() {
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.name = 'gender-custom';
  inputElement.placeholder = 'Gênero (opcional)';
  inputElement.className = 'gender-custom';
  return inputElement;
}

// adicionar elemento quando opção personalizado E input não existir.
function addInput() {
  const extraGender = document.querySelector('#input-personalizado');
  if (extraGender.hasChildNodes() === false) {
    const inputElement = createInput();
    extraGender.appendChild(inputElement);
  }
}

// remover elemento quando opção for diferente de personalizado.
function removeInput() {
  const extraGender = document.querySelector('#input-personalizado');
  if (extraGender.hasChildNodes()) {
    extraGender.removeChild(extraGender.firstChild);
  }
}

// escutar addEventListener e chamar a função que vai tratar.
const genderOption = document.querySelector('.form-group-4');
genderOption.addEventListener('change', function () {
  const customize = document.getElementById('personalizado');
  if (customize.checked) {
    addInput();
  } else {
    removeInput();
  }
});

// CONJUNTO DE FUNÇÕES PARA OBTER VALORES DOS INPUTS.
// obter valores dos inputs tipo text da right-content.
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

// obter valor do input tipo password da right-content.
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

// obter valor do input tipo radio selecionada da right-content.
const getRadio = () => {
  const allRadio = [];
  const inputRadio = document.querySelectorAll('input[type=radio]');
  let count = 1;
  for (let i = 0; i < inputRadio.length; i += 1) {
    if (inputRadio[i].checked) {
      const radio = inputRadio[i].value;
      allRadio.push(radio);
      count -= 1;
    }
  }
  if (count === 1) {
    allRadio.push(null);
  }
  return allRadio;
};

// CONJUNTO DE FUNÇÕES PARA MONTAR E APRESENTAR AS MENSAGENS OK OU NOK.
// limpar conteudo atual da div right-content.
function cleanRightContentDiv() {
  const rightContentDiv = document.querySelector('.right-content');
  rightContentDiv.innerHTML = '';
}

// criar o elementoP que receberá a mensagem quando tudo OK.
function createElementP() {
  const pElement = document.createElement('p');
  return pElement;
}

// mostrar mensagem de OK na div right-content.
function showElementP(input) {
  const rightContentDiv = document.querySelector('.right-content');
  const pElement = createElementP();
  pElement.appendChild(document.createTextNode(input));
  rightContentDiv.appendChild(pElement);
}

// mostrar mensagem de NOK (campos inválidos).
const renderMessage = (input) => {
  const renderMessageDiv = document.querySelector('#render-message');
  renderMessageDiv.classList.remove('hidden');
  renderMessageDiv.innerHTML = `<span>${input}</span>`;
};

// addEventListener do botão, chamar funções, testar inputs e montar mensagens.
const submitBtn = document.querySelector('#facebook-register');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const allText = getText();
  const allPassword = getPassword();
  const allRadio = getRadio();
  const allInputs = allText.concat(allPassword, allRadio);

  let testResult = 0;
  for (let i = 0; i < allInputs.length; i += 1) {
    if (allInputs[i] === null) {
      testResult += 1;
    }
  }

  if (testResult !== 0) {
    const messageNok = 'Campos inválidos';
    renderMessage(messageNok);
  } else {
    const messageOK = `Olá, ${allInputs[0]} ${allInputs[1]}, você nasceu em ${allInputs[3]}, seu email ou telefone é ${allInputs[2]} e selecionou o gênero ${allInputs[5]}.`;
    cleanRightContentDiv();
    showElementP(messageOK);
  }
});
