const getRegisterBtn = document.querySelector('#facebook-register-btn');
const getAllInputText = document.querySelectorAll('.input-text-verify');
const getAllInputRadio = document.querySelectorAll('.input-radio-verify');
const getRightContent = document.querySelector('.right-content');

const alertFieldLogin = () => {
  const getBtnLogin = document.querySelector('#button-login');
  const getLoginValue = document.querySelector('#user-email-phone');
  getBtnLogin.addEventListener('click', () => { alert(getLoginValue.value); });
};
alertFieldLogin();

function checkIfNotEmpty(inputsText) {
  for (let i = 0; i < inputsText.length; i += 1) {
    if (inputsText[i].value === '') {
      alert('Preencha todos os campos !');
    }
  }
  return 1;
}

function checkIfChecked(inputsRadio) {
  for (let i = 0; i < inputsRadio.length; i += 1) {
    if (inputsRadio[i].checked === true) {
      alert('Selecione ao menos uma opção !');
    }
  }
  return 1;
}

function validateRegisterBtn() {
  getRegisterBtn.addEventListener('click', function (e) {
    const checkedTextInputs = checkIfNotEmpty(getAllInputText);
    const checkedRadioInputs = checkIfChecked(getAllInputRadio);

    if (checkedTextInputs === 1 && checkedRadioInputs === 1) {
      const removeRightContent = () => getRightContent.remove();
      removeRightContent();
    }
    e.preventDefault();
  });
}

validateRegisterBtn();
