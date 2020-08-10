document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));
const formFields = document.querySelectorAll('.form-input');

const errorField = document.querySelector('#error-field');

function setNewErrorMsg(formField) {
  if (formField.value === '') {
    errorField.innerHTML = 'Campos inválidos';
    formField.addEventListener('click', () => {
      errorField.innerHTML = '';
    });
  }
}

function checkGender(gender) {
  if (gender === 'Personalizado') {
    gender = document.querySelector('#gender-custom-input').value;
  }
  return gender;
}

document.querySelector('#facebook-register').addEventListener('click', () => {
  event.preventDefault();
  formFields.forEach(setNewErrorMsg);
  let gender = 'custom';
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const userEmail = document.querySelector('#user-email').value;
  const userBirth = document.querySelector('#user-birthdate').value;
  gender = document.querySelector('input:checked').value;
  const showInfo = document.querySelector('.right-content');
  gender = checkGender(gender);
  if (errorField.innerHTML === '') {
    showInfo.innerHTML = `Olá ${firstName} ${lastName}<br>Seu email: ${userEmail}<br>Nascimento: ${userBirth}<br>${gender}`;
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
