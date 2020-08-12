const buttonLogin = document.querySelector('#button-login');
const submitButton = document.querySelector('#facebook-register');
const genderCustom = document.querySelector('#personalizado');

buttonLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone').value;
  alert(login);
});

function storageValues(param) {
  if (param.type !== 'radio') {
    localStorage.setItem(param.name, param.value);
  } else if (param.checked) {
    localStorage.setItem(param.name, param.value);
  }
}

function criarDiv() {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `<h2>Olá, ${localStorage.getItem('firstname')} ${localStorage.getItem('lastname')}</h2>
  <p>${localStorage.getItem('phone_email')}</p>
  <p>${localStorage.getItem('birthdate')}</p>
  <p>${localStorage.getItem('gender')}</p>`;
}

submitButton.addEventListener('click', function () {
  const inputs = document.querySelectorAll('#register-form input');
  const registerForm = document.querySelector('#register-form p');
  for (let index = 0; index < inputs.length; index += 1) {
    if (!inputs[index].checkValidity()) {
      if (registerForm) {
        registerForm.remove();
      }
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'Campos inválidos';
      document.querySelector('#register-form').appendChild(paragraph);
      break;
    } else {
      storageValues(inputs[index]);
    }
  }
  criarDiv();
});

genderCustom.onclick = () => {
  const customSellection = document.querySelector('input [name = "gender-custom"]');
  if (customSellection) {
    customSellection.remove();
  }
  const genderDiv = document.createElement('input');
  genderDiv.type = 'text';
  genderDiv.name = 'gender-custom';
  genderDiv.placeholder = 'Gênero (opcional)';
  genderDiv.className = 'display-block';
  document.querySelector('#register-form').insertBefore(genderDiv, submitButton);
};
