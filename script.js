const loginButton = document.querySelector('#button-login');
const submitButton = document.querySelector('#facebook-register');
const emailPhoneInput = document.querySelector('#user-email-phone');
const createAccountForm = document.querySelector('#create-account-form');

function validateTextInput(formInputs) {
  let inputTextValidate = true;
  for (let i = 0; i < formInputs.length; i += 1) {
    if (formInputs[i].type !== 'radio' && formInputs[i].value === '') {
      inputTextValidate = false;
    }
  }
  return inputTextValidate;
}

function validateRadioInput(formInputs) {
  let inputRadioValidate = false;
  for (let i = 0; i < formInputs.length; i += 1) {
    if ((formInputs[i].type === 'radio') && (formInputs[i].checked)) {
      inputRadioValidate = true;
    }
  }
  return inputRadioValidate;
}

window.onload = function () {
  loginButton.addEventListener('click', () => alert(emailPhoneInput.value));
  submitButton.addEventListener('click', (event) => {
    const formInputs = createAccountForm.getElementsByTagName('input');
    const errorMsg = document.querySelector('#isFormValid');
    event.preventDefault();
    if (!validateTextInput(formInputs) || !validateRadioInput(formInputs)) {
      errorMsg.style.color = 'red';
      errorMsg.innerHTML = 'Campos inválidos';
    } else {
      errorMsg.innerHTML = '';
    }
  });
};

// function ajustDayMonth(num) {
//   let newNum = `${num}`;
//   if (newNum.length < 2) {
//     newNum = `0${newNum}`;
//   }
//   return newNum;
// }

// let picker = new window.Pikaday({
//   field: document.getElementById('birthdate'),
//   toString(date) {
//     // you should do formatting based on the passed format,
//     // but we will just return 'D/M/YYYY' for simplicity
//     const day = ajustDayMonth(date.getDate());
//     const month = ajustDayMonth(date.getMonth() + 1);
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   },
//   parse(dateString) {
//     // dateString is the result of `toString` method
//     const parts = dateString.split('/');
//     const day = parseInt(parts[0], 10);
//     const month = parseInt(parts[1], 10) - 1;
//     const year = parseInt(parts[2], 10);
//     return new Date(year, month, day);
//   },
// });
