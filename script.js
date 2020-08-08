document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));

function setNewErrorMsg(formField) {
  formField.setCustomValidity('Campos inválidos');
  formField.addEventListener('focus', () => {
    formField.setCustomValidity('');
  });
}

const formFields = document.querySelectorAll('.form-input');
formFields.forEach(setNewErrorMsg);
