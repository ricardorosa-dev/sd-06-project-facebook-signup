
// window.onload = function () {
//   let picker = new Pikaday({
//     field: document.getElementById('birthdate'),
//   });
// };

const emailPhoneInput = document.querySelector('#user-email-phone');
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  alert(emailPhoneInput.value);
});

function validateInputs(inputs) {
  let validate = true;
  for (let index = 0; index < inputs.length; index += 1) {
    if ((inputs[index].type === 'text') && (inputs[index].value === '')) {
      validate = false;
    }
  }
  return validate;
}

function checkRadios(inputs) {
  let radioChecked = false;
  for (let index = 0; index < inputs.length; index += 1) {
    if ((inputs[index].type === 'radio') && (inputs[index].checked)) {
      radioChecked = true;
    }
  }
  return radioChecked;
}

const buttonSubmit = document.querySelector('#facebook-register');
buttonSubmit.addEventListener('click', function (event) {
  event.preventDefault();

  const registrationForm = document.querySelector('.registration-form');
  const inputs = registrationForm.getElementsByTagName('input');
  const divError = document.querySelector('.error');
  if ((!validateInputs(inputs)) || (!checkRadios(inputs))) {
    divError.innerHTML = 'Campos inválidos';
  } else {
    divError.innerHTML = '';
  }
});
