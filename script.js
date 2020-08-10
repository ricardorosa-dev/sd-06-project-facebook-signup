function generateErrorElement() {
  const parentElement = document.querySelector('#signUp');
  const errorElement = document.createElement('div');
  errorElement.classList = 'error';
  errorElement.innerText = 'Campos inválidos';
  parentElement.append(errorElement);
}

function validateInputs() {
  const inputs = document.querySelectorAll('main input');
  const errorElements = document.querySelectorAll('.error');
  if (errorElements.length === 0) {
    for (let i = 0; i < inputs.length ; i += 1) {
      if (inputs[i] === '') {
        generateErrorElement();
      }
    }
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
