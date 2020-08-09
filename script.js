fNameInput = document.getElementById('fName-input');
lNameInput = document.getElementById('lName-input');
celularEmailInput = document.getElementById('celular-email-input');
passwordInput = document.getElementById('password-input');
birthdateInput = document.getElementById('birthdate');
fGenderRadio = document.getElementById('gender-female');
mGenderRagio = document.getElementById('gender-male');
pGenderRadio = document.getElementById('gender-personalized');
answers = document.getElementById('answers');

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
    if (fNameInput.value == '') {
      answers.innerText = "Campos inválidos"
    } else if (lNameInput.value == '') {
      answers.appendChild(createSpan);
      createSpan.innerText = "Campos inválidos"
    } else if (celularEmailInput.value == '') {
      answers.innerHTML = "Campos inválidos"
    } else if (passwordInput.value == '') {
      answers.innerHTML = "Campos inválidos"
    } else if (birthdateInput.value == '') {
      answers.innerHTML = "Campos inválidos"
    } else if (fGenderRadio.checked == false && mGenderRagio.checked == false && pGenderRadio.checked == false) {
      answers.innerHTML = "Campos inválidos"
    } else {
      // O que acontece se o botão de submit der certo?
    }
  });
}

window.onload = function () {
  buttonLogin();
  buttonSubmit();
};
