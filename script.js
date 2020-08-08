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
    const allInputs = document.querySelectorAll('.right-content form input');
    let i = 0;
    let verificadorText = 0;
    let verificadorBool = 0;
    while (verificadorText === 0 && i < allInputs.length - 4) {
      verificadorText += (allInputs[i].value === '') ? 1 : 0;
      i += 1;
    }
    i = 0;
    while (vverificadorBool <= 2 && i < allInputs.length - 1) {
      verificadorBool += (allInputs[i].checked === false) ? 1 : 0;
      i += 1;
    }
    
    if (verificadorText !== 0 || verificadorBool !== 2) {
      window.alert('Campos inválidos');
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
    const firstName = allInputs[0].value;
    const lastName = allInputs[1].value;
    const emailPhone = allInputs[2].value;
    const birthDate = allInputs[4].value;
    if (allInputs[5].checked) {
      const gender = allInputs[5].value;
    } else if (allInputs[6].checked) {
      const gender = allInputs[6].value;
    } else {
      const gender = allInputs[7].value;
    }
    
    // Criando na DOM
    const newContentString = 'Olá, ' + firstName + ' ' + lastName + '<br>' + emailPhone + '<br>' + birthDate + '<br>' + gender; 
    const newContent = document.createElement('div');
    newContent.innerHTML = newContentString;
    const rightContent = document.querySelector('.right-content');
    rightContent.appendChild(newContent);
  }
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
