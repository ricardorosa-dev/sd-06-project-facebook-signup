const buttonLogin = document.querySelector('#button-login');
const emailValue = document.querySelector('#user-email-phone');
const form = document.querySelector('#formulary');
const button = document.querySelector('#facebook-register');

buttonLogin.addEventListener('click', function () {
  alert(emailValue.value);
});

const radios = document.getElementsByName('gender');

function addCampo() {
  const inputGender = document.createElement('input');
  inputGender.setAttribute('placeholder', 'Genero(opcional)');

    for (let i = 0; i < radios.length; i += 1) {
      radios[i].addEventListener('click', function () {
          if (radios[i].value === 'Personalizado') {
              form.insertBefore(inputGender, button);
          } else {
              inputGender.remove();
          }
      });
  }
}

addCampo();

