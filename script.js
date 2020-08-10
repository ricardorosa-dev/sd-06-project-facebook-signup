document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));
const formFields = document.querySelectorAll('.form-input');
let fullForm = false;

function setNewErrorMsg(formField) {
  if (formField.value === '') {
    fullForm = false;
    document.querySelector('#error-field').innerHTML = 'Campos inválidos';
  } {fullForm = true}
}

document.querySelector('#facebook-register').addEventListener('click', () => {
  event.preventDefault();
  if (fullForm === false) {
    formFields.forEach(setNewErrorMsg);
  } else {
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const userEmail = document.querySelector('#user-email').value;
    const userBirth = document.querySelector('#user-birthdate').value;
    const showInfo = document.querySelector('.right-content');
    showInfo.innerHTML = `Olá ${firstName} ${lastName}<br>Seu email: ${userEmail}<br>Nascimento: ${userBirth}`;
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
