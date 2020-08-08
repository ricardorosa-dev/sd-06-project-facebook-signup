const emailText = document.querySelector('#user-email-phone');
const btnLogIn = document.querySelector('#button-login');
btnLogIn.addEventListener('click', () => {
  alert(emailText.value);
});

const btnRadioPersonal = document.querySelector('#personalizado');
const spanPersonal = document.querySelector('#text-area-personalizado');
// const btnRegister = document.querySelector('#facebook-register');
btnRadioPersonal.addEventListener('click', () => {
  event.preventDefault();
  const txtArea = document.createElement('textarea');
  txtArea.placeholder = 'Gênero (opcional)';
  txtArea.name = 'gender-custom';
  spanPersonal.appendChild(txtArea);
});
