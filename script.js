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
    while (verificadorText === 0 && verificadorBool <= 2 && i < allInputs.length-1) { // Deixa o campo input escondido de fora
      if (i < allInputs.length-4) {
        verificadorText += (allInputs[i].value === '') ? 1 : 0;
      } else {
        verificadorBool += (allInputs[i].checked === false) ? 1 : 0;
      }
      i += 1;
    }
    if (verificadorText !== 0 || verificadorBool !== 2) {
      window.alert('Campos inválidos');
    }
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
