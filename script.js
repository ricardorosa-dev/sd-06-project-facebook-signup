function generateErrorElement () {
  const  parentElement = document.querySelector('#signUp');
  const  errorElement = document.createElement('div');
  errorElement.classList = 'error';
  errorElement.innerText = 'Campos inválidos';
  parentElement.append(errorElement);
}

function isEmpty (nodeElement, action,once) {
  for (let i = 0; nodeElement.length; i += 1) {
    if (nodeElement[i].value == '') {
      action;
      console.log('done')
      if (once == true) {
        break;
      }
    }
  }
}

function validateInputs () {
  const inputs = document.querySelectorAll('main input');
  const errorElements = document.querySelectorAll('.error');
  if (errorElements.length == 0) {
    isEmpty(inputs,generateErrorElement(),true);
  }
}

function buttonEvents () {
  let buttonConclude = document.getElementById('facebook-register');
  buttonConclude.addEventListener('click', function (e) {
    validateInputs();
  });
}

window.onload = () => {
  buttonEvents();
};
