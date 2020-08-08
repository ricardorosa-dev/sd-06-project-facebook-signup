const emailText = document.querySelector('#user-email-phone');
const btnLogIn = document.querySelector('#button-login');
btnLogIn.addEventListener('click', () => {
  alert(emailText.value);
});

const validateName = document.querySelectorAll('.sign-form input');
for (let i = 0; i <= validateName.length; i += 1) {
  validateName[i].oninvalid = function () {
    this.setCustomValidity('');
    if (!this.validity.valid) {
      this.setCustomValidity('Campos inválidos');
    }
  };
}
