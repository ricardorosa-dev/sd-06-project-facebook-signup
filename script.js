const inputs = document.querySelectorAll('input');
const buttonLogin = document.querySelector('#button-login');
const submitButton = document.querySelector('#facebook-register');
const customizedButton = inputs[9];
const maleFemaleButtons = [];
maleFemaleButtons.push(inputs[7]);
maleFemaleButtons.push(inputs[8]);

buttonLogin.addEventListener('click', function () {
  alert(inputs[0].value);
});

submitButton.addEventListener('click', function (event) {
  const errorMessage = document.querySelector('span');
  let isEmpty = true;

  for (let i = 2; i < inputs.length - 3; i += 1) {
    if (inputs[0].checked || inputs[1].checked || inputs[2].checked) {
      isEmpty = false;
    }

    if (inputs[i].value === '') {
      errorMessage.innerText = 'Campos inválidos';
      errorMessage.style.display = 'inline';
      isEmpty = true;
      break;
    } else {
      isEmpty = false;
    }
  }

  if (isEmpty) {
    event.preventDefault();
  }
});

customizedButton.addEventListener('change', function () {
  const span = document.querySelector('span:first-of-type');
  span.style.display = 'inline';
});

for (let i = 0; i < maleFemaleButtons.length; i += 1) {
  maleFemaleButtons[i].addEventListener('change', function () {
    const span = document.querySelector('span:first-of-type');
    span.style.display = 'none';
  });
}
