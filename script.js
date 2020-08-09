const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');
const registerForm = document.querySelector('.register-form');
const genderCustomCtn = document.querySelector('.gender-custom-container');
const radioGenderPersonalized = document.querySelector('#personalizado');

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

radioGenderPersonalized.addEventListener('click', function () {
  const inputGenderCustom = document.createElement('input');
  inputGenderCustom.name = 'gender-custom';
  inputGenderCustom.type = 'text';
  inputGenderCustom.placeholder = 'Gênero (opcional)';
  inputGenderCustom.className = 'gender-custom';
  genderCustomCtn.appendChild(inputGenderCustom);
});
