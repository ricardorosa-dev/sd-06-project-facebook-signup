const buttonLogin = document.querySelector('#button-login');
const emailValue = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(emailValue.value);
});

const radios = document.getElementsByName('gender');
const gender = document.querySelector('.gender');

function addCampo() {
  const inputGender = document.createElement('input');
  inputGender.setAttribute('placeholder', 'Genero(opcional)');
  inputGender.setAttribute('name', 'gender-custom');

  for (let i = 0; i < radios.length; i += 1) {
    radios[i].addEventListener('click', function () {
      if (radios[i].value === 'Personalizado') {
        gender.insertBefore(inputGender, button);
      } else {
        inputGender.remove();
      }
    });
  }
}

addCampo();
