const buttonEnter = document.querySelector('.button-login');
const textEmailTel = document.getElementById('user-email-phone');

function alertEmail() {
  alert(textEmailTel.value);
}

buttonEnter.addEventListener('click', alertEmail);

const btRegister = document.getElementById('facebook-register');
btRegister.addEventListener('click', function () {
  const fnameField = document.getElementsByName('firstname')[0].value === '';
  const lnameField = document.getElementsByName('lastname')[0].value === '';
  const celField = document.getElementsByName('phone_email')[0].value === '';
  const passField = document.getElementsByName('password')[0].value === '';
  const birthdate = document.getElementsByName('birthdate')[0].value === '';
  // const passField = document.getElementsByName('password')[0].value === '';
  const list = [fnameField, lnameField, celField, passField, birthdate];
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === true) {
      const errorMsg = document.createElement('p');
      errorMsg.style.color = 'red';
      errorMsg.innerHTML = 'Campos inválidos';
      const form = document.getElementById('form_register');
      form.appendChild(errorMsg);
      break;
    }
  }
});
