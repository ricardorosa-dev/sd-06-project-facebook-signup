// Funções
const functionalities = {
  popUpEmailField: function popUpEmailField() {
    const msg = document.querySelector('#user-email-phone').value;
    window.alert(msg);
  },
  showOrHideCustomGenderBox: function customGenderBox() {
    if (event.target.value === 'Personalizado') {
      const optionalGenderElement = document.querySelector('#gender-opt');
      optionalGenderElement.classList = 'selected';
    } else {
      const optionalGenderElement = document.querySelector('#gender-opt');
      optionalGenderElement.classList = 'g-custom';
    }
  },
  verifyFields: function verifyFields() {
    event.preventDefault();
    const allInputs = document.querySelectorAll('.right-content form input');
    const verificadorText = functionalities.verifyTextInputs(allInputs);
    const verificadorBool = functionalities.verifyBooleanInputs(allInputs);
    functionalities.selectorOfAction(verificadorText, verificadorBool);
  },
  verifyTextInputs: function verifyTextInputs(allInputs) {
    let verificadorText = 0;
    let i = 0;
    while (verificadorText === 0 && i < allInputs.length - 4) {
      verificadorText += (allInputs[i].value === '') ? 1 : 0;
      i += 1;
    }
    return verificadorText;
  },
  verifyBooleanInputs: function verifyBooleans(allInputs) {
    let verificadorBool = 0;
    let i = allInputs.length - 4;
    while (verificadorBool <= 2 && i < allInputs.length - 1) {
      verificadorBool += (allInputs[i].checked === false) ? 1 : 0;
      i += 1;
    }
    return verificadorBool;
  },
  selectorOfAction: function selectorOfAction(checkText, checkBool) { // Para evitar complexidade
    if (checkText !== 0 || checkBool !== 2) {
      const form = document.querySelector('.right-content form');
      const alert = document.createElement('p');
      alert.innerHTML = 'Campos inválidos';
      form.appendChild(alert);
    } else {
      functionalities.changeContent();
    }
  },
  changeContent: function changeContent() {
    // Exclusão do conteúdo
    const rightContentHeader = document.querySelector('.right-content .header');
    const rightContentForm = document.querySelector('.right-content form');
    rightContentHeader.style.display = 'none';
    rightContentForm.style.display = 'none';

    // Montagem do conteúdo novo
    const allInputs = document.querySelectorAll('.right-content form input');
    const name = ('Olá, ').concat(allInputs[0].value).concat(' ').concat(allInputs[1].value);
    const emailPhone = ('<br>').concat(allInputs[2].value);
    const birthDate = ('<br>').concat(allInputs[4].value);
    let gender;
    if (allInputs[5].checked === true) {
      gender = ('<br>').concat(allInputs[5].value);
    } else if (allInputs[6].checked === true) {
      gender = ('<br>').concat(allInputs[6].value);
    } else {
      gender = ('<br>').concat(allInputs[7].value);
    }
    // Criando na DOM
    const newContentString = name.concat(emailPhone).concat(birthDate).concat(gender);
    const newContent = document.createElement('p');
    newContent.innerHTML = newContentString;
    const rightContent = document.querySelector('.right-content');
    rightContent.appendChild(newContent);
  },
};

window.onload = function () {
  // Elementos
  const buttonLogin = document.querySelector('button');
  const radiosButton = document.querySelectorAll('.radios input');
  const registerButton = document.querySelector('#facebook-register');

  // Eventos
  buttonLogin.addEventListener('click', functionalities.popUpEmailField);
  radiosButton[0].addEventListener('click', functionalities.showOrHideCustomGenderBox);
  radiosButton[1].addEventListener('click', functionalities.showOrHideCustomGenderBox);
  radiosButton[2].addEventListener('click', functionalities.showOrHideCustomGenderBox);
  registerButton.addEventListener('click', functionalities.verifyFields);
};
