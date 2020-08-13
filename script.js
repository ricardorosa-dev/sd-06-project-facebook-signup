const buttonLogin = document.getElementById('button-login');
const buttonSignUp = document.getElementById('facebook-register');
const emailInput = document.getElementById('user-email-phone');
const form = document.getElementById('formSignUp');
const altGender = document.getElementById('gender');
const ids = ['firstname', 'lastname', 'phone_email', 'password', 'birthdate'];
const invalid = document.createElement('div');
let isEmpty = 5;
let wasEmpty = 0;

function invalidFields() {
  if (wasEmpty === 1) {
    return;
  }
  buttonSignUp.type = 'reset';
  invalid.innerHTML = 'Campos inválidos';
  form.appendChild(invalid);
  invalid.classList.add('campo-invalido');
}

function checkFields() {
  for (let i = 0; i < ids.length; i += 1) {
    if (document.getElementById(ids[i]).value === '') {
      isEmpty = 5;
    }
    if (document.getElementById(ids[i]).value !== '') {
      isEmpty -= 1;
    }
  }
}

function showEntries() {
  const text1 = document.createElement('div');
  text1.innerHTML = `Olá, ${document.getElementById('firstname').value} ${document.getElementById('lastname').value}`;
  const text2 = document.createElement('div');
  text2.innerHTML = document.getElementById('phone_email').value;
  const text3 = document.createElement('div');
  text3.innerHTML = document.getElementById('birthdate').value;
  const text4 = document.createElement('div');
  if (document.getElementById('female').checked === true) {
    text4.innerHTML = 'Feminino';
  } else if (document.getElementById('male').checked === true) {
    text4.innerHTML = 'Masculino';
  } else if (document.getElementById('other').checked === true) {
    text4.innerHTML = 'Personalizado';
  }
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
  form.appendChild(text1);
  form.appendChild(text2);
  form.appendChild(text3);
  form.appendChild(text4);
}

function checkEmpty() {
  isEmpty = 5;
  checkFields();
  if (isEmpty > 0) {
    invalidFields();
  }
  if (isEmpty === 0) {
    buttonSignUp.type = 'submit';
    isEmpty = 5;
    if (wasEmpty === 1) {
      const temp = document.getElementsByClassName('campo-invalido');
      form.removeChild(temp[0]);
      wasEmpty = 0;
    }
    showEntries();
  }
}

buttonLogin.addEventListener('click', function () {
  window.alert(emailInput.value);
});

buttonSignUp.addEventListener('click', function () {
  checkEmpty();
});

altGender.addEventListener('change', function () {
  if (document.getElementById('other').checked === true) {
    const elementInput = document.createElement('input');
    const genderOptions = document.getElementsByClassName('gender')[0];
    elementInput.type = 'text';
    elementInput.name = 'gender-custom';
    elementInput.placeholder = 'Gênero (opcional)';
    genderOptions.appendChild(elementInput);
    elementInput.classList.add('alt-gender');
  } else {
    const temp = document.getElementsByClassName('alt-gender');
    if (temp.length) {
      altGender.removeChild(temp[0]);
    }
  }
});
