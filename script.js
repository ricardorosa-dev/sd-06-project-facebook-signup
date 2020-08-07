const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const phoneEmail = document.querySelector('#phone-email');
const password = document.querySelector('#password');
const birthDate = document.querySelector('#birth-date');
const genderFemale = document.querySelector('#female');
const genderMale = document.querySelector('#male');
const genderOther = document.querySelector('#other');
const buttonFacebookRegister = document.querySelector('#facebook-register');
let errorText = 0;

buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

function validateData() {
  const validationData = [firstName.value, lastName.value, phoneEmail.value, password.value, birthDate.value];
  const valGender = [
    genderFemale.checked, 
    genderMale.checked, 
    genderOther.checked
  ];

  for (let i = 0; i < validationData.length; i += 1) {
    if (!validationData[i]) {
      errorText += 1;
    }
  }

  if (valGender[0] === false && valGender[1] === false && valGender[2] === false) {
    errorText += 1;
  }
  if (errorText > 0) {
    alert('Campos inválidos');
    errorText = 0;
  }
}

buttonFacebookRegister.addEventListener('click', validateData);
