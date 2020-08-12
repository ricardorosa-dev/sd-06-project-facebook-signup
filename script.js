const userEmailPhone = document.getElementById('user-email-phone');
const btnLogin = document.getElementById('button-login');
const invalidMessage = document.querySelector('.invalid-input')
const genderOptions = document.getElementById('gender');
const genderCustom = document.querySelector('.custom-option');
const btnSingUp = document.getElementById('facebook-register');

function clickLoginButton() {
  alert(userEmailPhone.value);
}

function createNewInput() {
  const customInput = document.createElement('input');
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero (opcional)';
  customInput.autocomplete = 'off';
  genderCustom.appendChild(customInput);
}

function genderCheck(event) {
  const optionCheck = event.target;
  if (optionCheck.value === 'Personalizado') {
    genderCustom.style.display = 'flex';
  } else {
    genderCustom.style.display = 'none';
  }
}

function validateForm() {
  const allInputsRequired = document.querySelectorAll('.input-group');
  for (let index = 0; index < allInputsRequired.length; index += 1) {
    if (!allInputsRequired[index].checked || allInputsRequired[index] === '') {
      invalidMessage.innerHTML = 'Campos inválidos';
    }
  }
}

window.onload = () => {
  btnLogin.addEventListener('click', clickLoginButton);
  genderOptions.addEventListener('change', genderCheck);
  btnSingUp.addEventListener('click', validateForm);
  createNewInput();
  genderCustom.style.display = 'none';
};
