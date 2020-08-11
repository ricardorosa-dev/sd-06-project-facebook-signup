const buttonLogin = document.querySelector('#button-login');
const emailValue = document.querySelector('#user-email-phone');
const form = document.querySelector('#formulary');
const button = document.querySelector('#facebook-register');
const inputs = document.querySelectorAll('#formulary input');


buttonLogin.addEventListener('click', function () {
  alert(emailValue.value);
});

const radios = document.getElementsByName('gender');

function addCampo() {
  const inputGender = document.createElement('input');
  inputGender.setAttribute('placeholder', 'Genero(opcional)');
  inputGender.setAttribute('name', 'gender-custom');

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

function validateData() {
  const p = document.createElement('p');
  event.preventDefault();

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      p.innerHTML = 'Campos invalidos';
      form.appendChild(p);
    }
  }

  if (!(radios[0].checked || radios[1].checked || radios[2].checked)) {
    p.innerHTML = 'Campos invalidos';
    form.appendChild(p);
  }
}

button.addEventListener('click', validateData);
