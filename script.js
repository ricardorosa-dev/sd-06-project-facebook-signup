const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');
const registerForm = document.querySelector('.register-form');
const genderCustomCtn = document.querySelector('.gender-custom-container');
const radioGenderPersonalized = document.querySelector('#personalizado');
const registerSuccessContainer = document.querySelector('.right-content');

const firstName = document.querySelector('#firstname').value;
const lastName = document.querySelector('#lastname').value;
const phoneEmail = document.querySelector('#phone_email').value;
const labelBirthdate = document.querySelector('#label-birthdate').value;
const femaleGender = document.querySelector('#feminino').value;
const maleGender = document.querySelector('#masculino').value;
const personalizedGender = document.querySelector('#personalizado').value;

login.addEventListener('click', function () {
  alert(name.value);
});

submitBtn.addEventListener('click', function () {
  let count = 0;
  const firstName = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;

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
  } else {
    while (registerSuccessContainer.firstElementChild) {
      registerSuccessContainer.firstElementChild.remove();
    };

    const parag = document.createElement('p');
    parag.innerHTML = `Olá, ${firstName} ${lastName}`;
    registerSuccessContainer.appendChild(parag);
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

// submitBtn.addEventListener('submit', function (event) {
//   event.preventDefault();

// })




