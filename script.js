const getRegisterBtn = document.querySelector('#facebook-register-btn');
const getAllInputText = document.querySelectorAll('.input-text-verify');
const getAllInputRadio = document.querySelectorAll('.input-radio-verify');
const getRightContent = document.querySelector('.right-content');
const getMainContent = document.querySelector('.main-content');

const alertFieldLogin = () => {
  const getBtnLogin = document.querySelector('#button-login');
  const getLoginValue = document.querySelector('#user-email-phone');
  getBtnLogin.addEventListener('click', () => { alert(getLoginValue.value); });
};
alertFieldLogin();

function checkIfNotEmpty(inputsText) {
  for (let i = 0; i < inputsText.length; i += 1) {
    if (inputsText[i].value === '') {
      inputsText[i].style.border = '1px solid red';
      inputsText[i].value = 'Preencha o campo !';
      return false;
    }
  }
  return true;
}

function checkIfchecked(inputsRadio) {
  for (let i = 0; i < inputsRadio.length; i += 1) {
    if (inputsRadio[i].value === '') {
      return false;
    }
  }
  return true;
}

function validateRegisterBtn() {
  getRegisterBtn.addEventListener('click', function (e) {
    const checkedTextInputs = checkIfNotEmpty(getAllInputText);
    const checkedRadioInputs = checkIfchecked(getAllInputRadio);
    if (checkedTextInputs === true && checkedRadioInputs.value !== '') {
      getMainContent.removeChild(getRightContent);
    }

    e.preventDefault();
  });
}

validateRegisterBtn();
