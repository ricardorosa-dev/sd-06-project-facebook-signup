// Funções
const functionalities = {
  popUpEmailField: function popUpEmailField() {
    const msg = document.querySelector('#user-email-phone').value;
    window.alert(msg);
  },
};

window.onload = function () {
  // Elementos
  const buttonLogin = document.querySelector('button');

  // Eventos
  buttonLogin.addEventListener('click', functionalities.popUpEmailField);
};
