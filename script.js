const buttonTop = document.querySelector('#button-login');
const email = document.querySelector('#user-email-phone');
const radioButtonPersonalizado = document.querySelector('#personalized');
const radioButtonMasculino = document.querySelector('#male');
const radioButtonFeminino = document.querySelector('#female');
const containerRadioButtons = document.querySelector('.radio');
const customGender = document.createElement('input');
const buttonSend = document.querySelector('#facebook-register');

buttonTop.addEventListener('click', function () {
  alert(email.value);
});

radioButtonPersonalizado.addEventListener('change', function () {
  customGender.placeholder = 'Gênero (opcional)';
  customGender.name = 'gender-custom';
  customGender.id = 'personalizado';
  containerRadioButtons.appendChild(customGender);
});

radioButtonMasculino.addEventListener('change', function () {
  const personalized = document.querySelector('#personalizado');
  if (personalized !== null) {
    containerRadioButtons.removeChild(personalized);
  }
});

radioButtonFeminino.addEventListener('change', function () {
  const personalized = document.querySelector('#personalizado');
  if (personalized !== null) {
    containerRadioButtons.removeChild(personalized);
  }
});

buttonSend.addEventListener('click', (event) => {
  const emptyInput = document.querySelectorAll('.containerInput input');
  const span = document.querySelector('.camposInvalidos');
  for (let index = 0; index < emptyInput.length; index += 1) {
    if (emptyInput[index].value === "") {
      span.innerHTML = 'Campos inválidos';
      event.preventDefault();
      index = emptyInput.length;
    }
  }
  const radios = document.querySelectorAll('.radio input');
  if (!(radios[0].checked || radios[1].checked || radios[2].checked)) {
    span.innerHTML = 'Campos inválidos';
    event.preventDefault();
  }
});
