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

document.querySelector('#facebook-register').addEventListener('click', (event) => {
  event.preventDefault();
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
  } else {
    const inputs = document.querySelectorAll('.right-content input');
    let radio = '';
    inputs.forEach((element) => {
      if (element.type === 'radio' && element.checked) {
        radio = element.value;
      }
    });
    const rightContent = document.querySelector('.right-content');
    document.querySelector('.main-content').removeChild(rightContent);
    const div = document.createElement('div');
    div.className = 'right-content';
    const filho = document.createElement('div');
    filho.innerHTML = `<p>Olá, ${inputs[0].value} ${inputs[1].value}</p> <p>${inputs[2].value}</p <p>${inputs[4].value}</p <p>${radio}</p`;
    div.appendChild(filho);
    document.querySelector('.main-content').appendChild(div);
  }
});
document.querySelector('#personalizado').addEventListener('click', () => {
  addGenderField();
});
