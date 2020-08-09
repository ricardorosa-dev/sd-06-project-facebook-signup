const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');
const registerForm = document.querySelector('.register-form');
const genderContainer = document.getElementsByClassName('gender-container');
const personalizedRadio = document.getElementById('personalizado');

login.addEventListener('click', function () {
  alert(name.value);
});

submitBtn.addEventListener('click', function () {
  let count = 0;
  for (let i = 2; i < (inputArray.length - 3); i += 1) {
    const resultCheck = inputArray[i].checkValidity();
    if (resultCheck === false) {
      count += 1;
    }
  }

  if (count !== 0) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Campos inválidos';
    registerForm.appendChild(paragraph);
  }
});

personalizedRadio.addEventListener('click', function () {
  const personalizedInput = document.createElement('input');
  personalizedInput.name = 'gender-custom';
  personalizedInput.placeholder = 'Gênero (opcional)';
  personalizedInput.className = 'gender-input';
  genderContainer[0].appendChild(personalizedInput);
});
