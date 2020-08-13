const createAccountForm = document.querySelector('#create-account-form');

function validateTextInput(formInputs) {
  let inputTextValidate = true;
  for (let i = 0; i < formInputs.length; i += 1) {
    if (formInputs[i].type !== 'radio' && formInputs[i].value === '') {
      inputTextValidate = false;
    }
  }
  return inputTextValidate;
}

function validateRadioInput(formInputs) {
  let inputRadioValidate = false;
  for (let i = 0; i < formInputs.length; i += 1) {
    if ((formInputs[i].type === 'radio') && (formInputs[i].checked)) {
      inputRadioValidate = true;
    }
  }
  return inputRadioValidate;
}

function showData() {
  const rightContent = document.querySelector('.right-content');
  const formElements = createAccountForm.elements;
  const firstName = formElements.firstname.value;
  const lastName = formElements.lastname.value;
  const phoneEmail = formElements.phone_email.value;
  const birthdate = formElements.birthdate.value;
  const gender = formElements.gender.value;
  rightContent.innerHTML = `<p>Olá, ${firstName} ${lastName}<br>
  Nascido em ${birthdate}<br>
  Seu email/telefone é ${phoneEmail}<br>
  O gênero selecionado foi ${gender}</p>`;
}

function validateAccountForm(event) {
  const formInputs = createAccountForm.getElementsByTagName('input');
  const errorMsg = document.querySelector('#isFormValid');
  event.preventDefault();
  if (!validateTextInput(formInputs) || !validateRadioInput(formInputs)) {
    errorMsg.style.color = 'red';
    errorMsg.innerHTML = 'Campos inválidos';
  } else {
    showData();
  }
}

function addGenderOptions() {
  const customOptions = document.querySelector('#custom-options');
  if (customOptions.children.length === 0) {
    const genderCustom = document.createElement('input');
    genderCustom.name = 'gender-custom';
    genderCustom.placeholder = 'Gênero (opcional)';
    genderCustom.className = 'input';
    customOptions.appendChild(genderCustom);
  }
}

window.onload = function () {
  const birthdateInput = document.querySelector('#birthdate');
  birthdateInput.DatePickerX.init({
    format: 'dd/mm/yyyy',
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    todayButton: false,
    clearButton: false,
  });
  const loginButton = document.querySelector('#button-login');
  const customInput = document.querySelector('#custom-input');
  const submitButton = document.querySelector('#facebook-register');
  const emailPhoneInput = document.querySelector('#user-email-phone');

  loginButton.addEventListener('click', () => alert(emailPhoneInput.value));
  customInput.addEventListener('click', addGenderOptions);
  submitButton.addEventListener('click', validateAccountForm);
};
