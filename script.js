const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  alert('Email ou telefone');
});
function generateErrorElement() {
  const parentElement = document.querySelector('#signUp');
  const errorElement = document.createElement('div');
  errorElement.classList = 'error';
  errorElement.innerText = 'Campos inválidos';
  parentElement.append(errorElement);
}

function isEmpty(inputs) {
  let boolean = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value !== '') {
      boolean += 1;
    }
  }
  if (boolean < 5) {
    generateErrorElement();
  }
  return boolean;
}

function validateInputs() {
  const inputs = document.querySelectorAll('main input');
  const errorElements = document.querySelectorAll('.error');
  if (errorElements.length === 0) {
    isEmpty(inputs);
  }
}

function buttonEvents() {
  const buttonConclude = document.getElementById('facebook-register');
  buttonConclude.addEventListener('click', function () {
    validateInputs();
  });
}

window.onload = () => {
  buttonEvents();
};