document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));

function setNewErrorMsg(formField) {
  if (formField.value === '') {
    document.querySelector('#error-field').innerHTML = 'Campos inválidos';
  }
}

const formFields = document.querySelectorAll('.form-input');

document.querySelector('#facebook-register').addEventListener('click', () => {
  event.preventDefault();
  formFields.forEach(setNewErrorMsg);
});

document.querySelector('#custom-gender').addEventListener('click', () => {
  const customGenderInput = document.createElement('input');
  customGenderInput.id = 'custom-gender-input';
  customGenderInput.setAttribute('type', 'text');
  customGenderInput.setAttribute('placeholder', 'Gênero (opcional)');
  document.querySelector('#custom-gender-span').appendChild(customGenderInput);
});
