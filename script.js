document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));
const formFields = document.querySelectorAll('.form-input');
let fullForm = true;
function setNewErrorMsg(formField) {
  if (formField.value === '') {
    document.querySelector('#error-field').innerHTML = 'Campos inválidos';
    fullForm = false;
  }
}

document.querySelector('#facebook-register').addEventListener('click', () => {
  if (fullForm) {
    event.preventDefault();
    formFields.forEach(setNewErrorMsg);
  } else {
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    document.querySelector('.right-content').innerHTML = `Olá ${firstName} ${lastName}`;
  }
});

document.querySelector('#gender-custom').addEventListener('click', () => {
  const customGenderInput = document.createElement('input');
  Object.assign(customGenderInput, {
    id: 'gender-custom-input',
    type: 'text',
    placeholder: 'Gênero (opcional)',
    name: 'gender-custom',
  });
  document.querySelector('#gender-custom-span').appendChild(customGenderInput);
});
