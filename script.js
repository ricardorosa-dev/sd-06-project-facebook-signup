const loginButton = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const fGender = document.querySelector('#feminine');
const mGender = document.querySelector('#masculine');
const customGenderInput = document.querySelector('#custom');
const registerButton = document.querySelector('#facebook-register');
let clickInCustomGender = 0;

loginButton.addEventListener('click', function () {
  alert(emailInput.value);
});

fGender.addEventListener('click', function () {
  clickInCustomGender = 0;
  if (document.querySelector('#gender-custom')) {
    document.querySelector('#gender-custom').parentNode.removeChild(document.querySelector('#gender-custom'));
  }
});

mGender.addEventListener('click', function () {
  clickInCustomGender = 0;
  if (document.querySelector('#gender-custom')) {
    document.querySelector('#gender-custom').parentNode.removeChild(document.querySelector('#gender-custom'));
  }
});

customGenderInput.addEventListener('click', function () {
  clickInCustomGender += 1;
  if (clickInCustomGender === 1) {
    const customInput = document.createElement('input');
    customInput.name = 'gender-custom';
    customInput.placeholder = 'Gênero (opcional)';
    customInput.id = 'gender-custom';
    document.querySelector('.input-gender-container').appendChild(customInput);
  }
});

function getInputs() {
  const allInputs = document.querySelectorAll('input');
  const inputs = [];

  allInputs.forEach(function (item, index) {
    if (index > 1 && item.type !== 'radio') {
      inputs.push(item);
    }
    if (item.type === 'radio' && item.checked) {
      inputs.push(item);
    }
  });

  return inputs;
}

function checkInputs(inputs) {
  inputs.forEach(function (item) {
    if (!item.value) {
      document.querySelector('#invalid-inputs').innerHTML = 'Campos inválidos';
    }
  });
}

registerButton.addEventListener('click', function (event) {
  document.querySelector('#invalid-inputs').innerHTML = '';
  const inputs = getInputs();
  checkInputs(inputs);
  event.preventDefault();
});
