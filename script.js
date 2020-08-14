const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');
const registerForm = document.querySelector('.register-form');
const genderCustomCtn = document.querySelector('.gender-custom-container');
const radioGenderPersonalized = document.querySelector('#personalizado');
const registerSuccessContainer = document.querySelector('.right-content');

// const femaleGender = document.querySelector('#feminino').value;
// const maleGender = document.querySelector('#masculino').value;
// const personalizedGender = document.querySelector('#personalizado').value;

login.addEventListener('click', function () {
  alert(name.value);
});

submitBtn.addEventListener('click', function () {
  let count = 0;
  const firstName = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;
  const phoneEmail = document.querySelector('#phone_email').value;
  const labelBirthdate = document.querySelector('.label-birthdate').value;

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
    }

    const parag = document.createElement('p');
    parag.innerHTML = `<h1>Olá, ${firstName} ${lastName}</h1> <br>
    <strong>email ou telefone:</strong> ${phoneEmail} <br>
    <strong>Data de Nascimento:</strong> ${labelBirthdate}`;
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
