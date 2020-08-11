const buttonLogin = document.querySelector('#button-login');
const userLogin = document.querySelector('#user-email-phone');
const fName = document.querySelector('#first-name');
const lName = document.querySelector('#last-name');
const phoneEmail = document.querySelector('#phone-email');
const password = document.querySelector('#password');
const birth = document.querySelector('#birth-date');
const genderFemale = document.querySelector('#female');
const genderMale = document.querySelector('#male');
const genderOther = document.querySelector('#other');
const buttonFacebookRegister = document.querySelector('#facebook-register');
const message = document.querySelector('#error-msg');
const genderCustom = document.querySelector('#gender-custom');
const genderOptions = document.querySelector('.gender-options');
const rightContent = document.querySelector('.right-content');

buttonLogin.addEventListener('click', function () {
  alert(userLogin.value);
});

function verifyData() {
  let errorCounter = 0;
  const valData = [fName.value, lName.value, phoneEmail.value, password.value, birth.value];

  for (let i = 0; i < valData.length; i += 1) {
    if (!valData[i]) {
      errorCounter += 1;
    }
  }

  return errorCounter;
}

function verifyGender() {
  let errorCounter = 0;
  const valGender = [genderFemale.checked, genderMale.checked, genderOther.checked];

  if (valGender[0] === false && valGender[1] === false && valGender[2] === false) {
    errorCounter += 1;
  }

  return errorCounter;
}

function selectedGender() {
  let selected;

  if (genderFemale.checked) {
    selected = 'Feminino';
  } else if (genderMale.checked) {
    selected = 'Masculino';
  } else if (genderOther.checked) {
    selected = `Personalizado ${genderCustom.value}.`;
  }
  return selected;
}

function consolidate() {
  const consolidateText = `Olá, ${fName.value} ${lName.value}.
  Seu usuário será ${phoneEmail.value}.
  Sua data de nascimento é ${birth.value}.
  O gênero selecionado é ${selectedGender()}`;
  return consolidateText;
}

function validateData() {
  event.preventDefault();
  const totalError = verifyData() + verifyGender();

  if (totalError > 0) {
    message.innerHTML = 'Campos inválidos';
  } else {
    rightContent.innerHTML = consolidate();
    rightContent.style.display = 'block';
  }
}

buttonFacebookRegister.addEventListener('click', validateData);

genderOptions.addEventListener('click', () => {
  const targetEvent = event.target;

  if (targetEvent.id === 'other') {
    genderCustom.className = '';
  } else {
    genderCustom.className = 'disable';
  }
});
