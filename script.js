function addFeedback() {
  const FEEDBACKMESSAGE = document.createElement('div');
  FEEDBACKMESSAGE.innerText = 'Campos inválidos';
  FEEDBACKMESSAGE.classList.add('feedback-bad-action');
  document.querySelector('.sign-in-data').insertBefore(FEEDBACKMESSAGE, document.querySelector('.names'));
}

function addGenderField() {
  const GENDERCUSTOMINPUT = document.createElement('input');
  GENDERCUSTOMINPUT.classList.add('sign-in');
  GENDERCUSTOMINPUT.id = 'custom-gender';
  GENDERCUSTOMINPUT.name = 'gender-custom';
  GENDERCUSTOMINPUT.placeholder = 'Gênero (opcional)';
  GENDERCUSTOMINPUT.type = 'text';
  document.querySelector('.sign-in-data').insertBefore(GENDERCUSTOMINPUT, document.querySelector('#facebook-register'));
}

document.querySelector('#button-login').addEventListener('click', () => {
  const EMAILORPHONE = document.querySelector('#user-email-phone').value;
  alert(EMAILORPHONE);
});
document.querySelector('#facebook-register').addEventListener('click', () => {
  let invalidForm = false;
  document.querySelectorAll('.sign-in').forEach((element) => {
    if (element.value === '') {
      invalidForm = true;
    }
  });
  if (invalidForm) {
    if (!document.querySelector('.feedback-bad-action')) {
      addFeedback();
    }
  }
});
document.querySelector('#personalizado').addEventListener('click', () => {
  addGenderField();
});
