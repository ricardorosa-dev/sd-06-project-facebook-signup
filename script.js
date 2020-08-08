// Funções
const functionalities = {
  popUpEmailField: function popUpEmailField() {
    const msg = document.querySelector('#user-email-phone').value;
    window.alert(msg);
  },
  showCustomGenderBox: function customGenderBox() {
    if (event.target.value === 'Personalizado') {
      const optionalGenderElement = document.querySelector('#gender-opt');
      optionalGenderElement.classList = 'selected';
    } else {
      const optionalGenderElement = document.querySelector('#gender-opt');
      optionalGenderElement.classList = 'g-custom';
    }
  }
};

window.onload = function () {
  // Elementos
  const buttonLogin = document.querySelector('button');
  const radiosButton = document.querySelectorAll('.radios input');

  // Eventos
  buttonLogin.addEventListener('click', functionalities.popUpEmailField);
  radiosButton[0].addEventListener('click', functionalities.showCustomGenderBox);
  radiosButton[1].addEventListener('click', functionalities.showCustomGenderBox);
  radiosButton[2].addEventListener('click', functionalities.showCustomGenderBox);
};
