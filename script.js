const fNameInput = document.getElementById('fName-input');
const lNameInput = document.getElementById('lName-input');
const celularEmailInput = document.getElementById('celular-email-input');
const passwordInput = document.getElementById('password-input');
const birthdateInput = document.getElementById('birthdate');
const fGenderRadio = document.getElementById('gender-female');
const mGenderRadio = document.getElementById('gender-male');
const pGenderRadio = document.getElementById('gender-personalized');
const answers = document.getElementById('answers');
const genderDiv = document.getElementsByClassName('user-gender')[0];
let genderValue;


function buttonLogin() {
  const botaoEntrar = document.getElementById('button-login');
  const inputEmail = document.getElementById('user-email-phone');

  botaoEntrar.addEventListener('click', function () {
    if (inputEmail.value !== '') {
      window.alert(inputEmail.value);
    }
  });
}

function showGenderCustom() {
  genderDiv.addEventListener('click', function (e) {
    if (e.target.value === 'Personalizado') {
      genderValue = 'Personalizado';
    } else {
      genderValue = e.target.value;
    }
  });
}

function buttonSubmit() {
  const botaoSubmit = document.getElementById('facebook-register');

  botaoSubmit.addEventListener('click', function (event) {
    if (fNameInput.value === '') {
      answers.innerText = 'Campos inválidos';
    } else if (lNameInput.value === '') {
      answers.innerText = 'Campos inválidos';
    } else if (celularEmailInput.value === '') {
      answers.innerHTML = 'Campos inválidos';
    } else if (passwordInput.value === '') {
      answers.innerHTML = 'Campos inválidos';
    } else if (birthdateInput.value === '') {
      answers.innerHTML = 'Campos inválidos';
    } else if (!fGenderRadio.checked && !mGenderRadio.checked && !pGenderRadio.checked) {
      answers.innerHTML = 'Campos inválidos';
    } else {
      // O que acontece se o botão de submit der certo?
      event.preventDefault();

      const formRegister = document.getElementById('form-register');
      formRegister.innerHTML = `Olá, ${fNameInput.value} ${lNameInput.value} <br>
      ${celularEmailInput.value} <br>
      ${birthdateInput.value} <br>
      ${genderValue}`;
    }
  });
}

window.onload = function () {
  buttonLogin();
  buttonSubmit();
  showGenderCustom();
};
