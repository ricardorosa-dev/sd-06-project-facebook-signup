const loginButton = document.querySelector('#button-login');
const emailTelephoneInput = document.querySelector('#user-email-phone');

loginButton.addEventListener('click', function () {
  alert(emailTelephoneInput.value);
});

const facebookRegister = document.querySelector("#facebook-register");
facebookRegister.addEventListener('click', function () {
  const inputTextArray = document.querySelectorAll(".input-text-verification");
  for (let index = 0; index < inputTextArray.length; index += 1) {
    if (inputTextArray[index].value === '') {
      alert("Campos inválidos");
      break;
    };
  };
});
