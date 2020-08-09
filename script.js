const fNameInput = document.getElementById('fName-input');
const lNameInput = document.getElementById('lName-input');
const celularEmailInput = document.getElementById('celular-email-input');
const passwordInput = document.getElementById('password-input');
const birthdateInput = document.getElementById('birthdate');
const fGenderRadio = document.getElementById('gender-female');
const mGenderRagio = document.getElementById('gender-male');
const pGenderRadio = document.getElementById('gender-personalized');
const answers = document.getElementById('answers');

function buttonLogin() {
  const botaoEntrar = document.getElementById('button-login');
  const inputEmail = document.getElementById('user-email-phone');

  botaoEntrar.addEventListener('click', function () {
    if (inputEmail.value !== '') {
      window.alert(inputEmail.value);
    }
  });
}

function buttonSubmit() {
  const botaoSubmit = document.getElementById('facebook-register');

  botaoSubmit.addEventListener('click', function () {
    if (fNameInput.value === '') {
      answers.innerText = 'Campos inválidos';
    } else if (lNameInput.value === '') {
      answers.appendChild(createSpan);
      createSpan.innerText = 'Campos inválidos';
    } else if (celularEmailInput.value === '') {
      answers.innerHTML = 'Campos inválidos';
    } else if (passwordInput.value === '') {
      answers.innerHTML = 'Campos inválidos';
    } else if (birthdateInput.value === '') {
      answers.innerHTML = 'Campos inválidos';
    } else if (!fGenderRadio.checked && !mGenderRagio.checked && !pGenderRadio.checked) {
      answers.innerHTML = 'Campos inválidos';
    } else {
      // O que acontece se o botão de submit der certo?
    }
  });
}

window.onload = function () {
  buttonLogin();
  buttonSubmit();
};
