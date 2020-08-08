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
  let checked = true;
  inputs.forEach(function (item) {
    if (!item.value) {
      document.querySelector('#invalid-inputs').innerHTML = 'Campos inválidos';
      checked = false;
    }
  });
  return checked;
}

function removeRightContent() {
  const rightDiv = document.querySelector('.right-content');
  rightDiv.innerHTML = '';
}

function fillRightDiv(inputs) {
  const rightDiv = document.querySelector('.right-content');
  const name = inputs[0].value;
  const lastname = inputs[1].value;
  const fullname = `${name} ${lastname}`;
  const emailPhone = inputs[2].value;
  const birthdate = inputs[4].value;
  const gender = inputs[5].value;

  rightDiv.innerHTML = `Olá, ${fullname}`;

  // const title = document.createElement('h2');
  // title.innerHTML = `Olá, ${fullname}`;
  // title.className = 'title';
  const paragraph1 = document.createElement('p');
  paragraph1.innerHTML = emailPhone;
  paragraph1.className = 'paragraph';
  const paragraph2 = document.createElement('p');
  paragraph2.innerHTML = birthdate;
  paragraph2.className = 'paragraph';
  const paragraph3 = document.createElement('p');
  paragraph3.innerHTML = gender;
  paragraph3.className = 'paragraph';

  // rightDiv.appendChild(title);
  rightDiv.appendChild(paragraph1);
  rightDiv.appendChild(paragraph2);
  rightDiv.appendChild(paragraph3);
}

registerButton.addEventListener('click', function (event) {
  document.querySelector('#invalid-inputs').innerHTML = '';
  const inputs = getInputs();
  if (checkInputs(inputs)) {
    removeRightContent();
    fillRightDiv(inputs);
  }
  event.preventDefault();
});
