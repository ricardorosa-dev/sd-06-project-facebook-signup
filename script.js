const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');

login.addEventListener('click', function () {
  alert(name.value);
});

//submit form
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');
const registerForm = document.querySelector('.register-form');
let invalid = false;

submitBtn.addEventListener('click', function () {
  let count = 0;
  for (let i = 2; i < (inputArray.length - 3); i += 1) {
    const resultCheck = inputArray[i].checkValidity();
    if (resultCheck === false) {
      count += 1;
    }
  }

  if (count !== 0 && !invalid) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Campos inválidos';
    registerForm.appendChild(paragraph);
    invalid = true;
  }
});


//radios
let personalizedGender = false;
const personalizedInput = document.createElement('input');
const personalizedRadio = document.getElementById('personalizado');
const maleRadio = document.getElementById('masculino');
const femaleRadio = document.getElementById('feminino');
const personalizedGenderContainer = document.getElementById('personalized-gender-flex');

personalizedRadio.addEventListener('click', function () {
  if (!personalizedGender) {
    personalizedInput.style.display = 'flex';
    personalizedInput.name = 'gender-custom';
    personalizedInput.placeholder = 'Gênero (opcional)';
    personalizedInput.className = 'gender-input';
    personalizedGenderContainer.appendChild(personalizedInput);
    personalizedGender = true;
  }
});

maleRadio.addEventListener('click', function () {
  if(personalizedGender) {
    personalizedInput.style.display = 'none';
    personalizedGender = false;
  }
});

femaleRadio.addEventListener('click', function () {
  if(personalizedGender) {
    personalizedInput.style.display = 'none';
    personalizedGender = false;
  }
});
