const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  const inputUser = document.querySelector('input#user-email-phone').value;
  alert(inputUser);
});

function putMenssagem() {
  const mensagem = document.createElement('p');
  mensagem.innerHTML = 'Campos inválidos';
  document.querySelector('#form').appendChild(mensagem);
}

function formValues() {
  const valuesInput = document.querySelectorAll('right-content input');
  let valueUndefined = false;
  for (let i = 0; i < valuesInput.length - 3; i += 1) {
    if (valuesInput[i].value === '') {
      valueUndefined = true;
    }
  }
  if (valueUndefined === true) {
    putMenssagem();
    }
}

function chechRadio() {
  const valueGender = false;
  let gender = document.querySelectorAll('.gender');
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked === true) {
      valueGender = true;
    }
  }
  return valueGender;
}

const buttonRegister = document.querySelector('#facebook-register');
buttonRegister.addEventListener('click', function () {
  if (chechRadio() === true) {
    formValues()
  }
  else {
    putMenssagem();
  }
});
