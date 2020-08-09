const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');
const registerForm = document.querySelector('.register-form');
const radioArray = document.getElementsByName('gender');
const genderContainer = document.getElementsByClassName('gender-container');

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

  for (let i = 0; i < radioArray.length; i += 1) {
    if (radioArray[i].checked) {
      const radioChecked = radioArray[i].value;
    }
  }

  const personalizadoInput = document.createElement('input');
  personalizadoInput.name = 'gender-custom';
  personalizadoInput.placeholder = 'Gênero(opcional)';
  personalizadoInput.className = 'gender-input';
  genderContainer[0].appendChild(personalizadoInput);

});
