const emailText = document.querySelector('#user-email-phone');
const btnLogIn = document.querySelector('#button-login');
btnLogIn.addEventListener('click', () => {
  alert(emailText.value);
});

const btnRadioPersonal = document.querySelector('#personalizado');
const spanPersonal = document.querySelector('#input-personalizado');
btnRadioPersonal.addEventListener('click', () => {
  event.preventDefault();
  const inputGender = document.createElement('input');
  inputGender.placeholder = 'Gênero (opcional)';
  inputGender.name = 'gender-custom';
  spanPersonal.appendChild(inputGender);
});
