// função para tratar evento do botão para exibir alert
const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const inputEmail = document.getElementById('user-email-phone').value;
  window.alert(inputEmail);
  inputEmail.innerHTML = '';
});
// CONJUNTO DE FUNÇÕES PARA TRATAR GENDER-CUSTON
// criar elemento que receberá texto
function createInput() {
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.name = 'gender-custom';
  inputElement.placeholder = 'Gênero (opcional)';
  inputElement.className = 'gender-custom';
  return inputElement;
}
// adicionar elemento quando opção personalizado e já não existir
function addInput() {
  const extraGender = document.querySelector('#input-personalizado');

  if (extraGender.hasChildNodes() === false) {
    const inputElement = createInput();
    extraGender.appendChild(inputElement);
  }
}
// remover elemento quando opção diferente de personalizado
function removeInput() {
  const extraGender = document.querySelector('#input-personalizado');
  if (extraGender.hasChildNodes()) {
    extraGender.removeChild(extraGender.firstChild);
  }
}
// tratar addEventListener, testar se personalizado chamando função adequada
function handleGenderOption() {
  const customize = document.getElementById('personalizado');
  if (customize.checked) {
    addInput();
  } else {
    removeInput();
  }
}
// escutar addEventListener e chamar a função que vai tratar
const genderOption = document.querySelector('.form-group-4');
genderOption.addEventListener('change', handleGenderOption);
// CONJUNTO DE FUNÇÕES PARA OBTER VALORES DOS INPUTS
// obter valores dos inputs tipo text da right-content
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
// obter valor do input tipo password da right-content
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
// obter valores dos inputs tipo radio da right-content
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
// obter valor do input tipo date da right-content
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
// CONJUNTO DE FUNÇÕES PARA MONTAR E APRESENTAR MENSAGENS
// substituir conteúdo pela mensagem na div right-content
const renderOutput = (input) => {
  const rightContentDiv = document.querySelector('.right-content');

  rightContentDiv.innerHTML = '';
  rightContentDiv.innerHTML = `<p>${input}</p>`;
};
// apresentar mensagem de campos inválidos
const renderMessage = (input) => {
  const renderMessageDiv = document.querySelector('#render-message');
  renderMessageDiv.classList.remove('hidden');
  renderMessageDiv.innerHTML = `<span>${input}</span>`;
};
// escutar addEventListener do botão, testar se inputs OK e montar mensagens.
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
