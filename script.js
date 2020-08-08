const buttonEnter = document.querySelector('.button-login');
const textEmailTel = document.getElementById('user-email-phone');

function alertEmail() {
  alert(textEmailTel.value);
}

buttonEnter.addEventListener('click', alertEmail);

const btRegister = document.getElementById('facebook-register');
btRegister.addEventListener('click', function () {
  // event.preventDefault();
  const fnameField = document.getElementsByName('firstname')[0].value !== '';
  const lnameField = document.getElementsByName('lastname')[0].value !== '';
  const celField = document.getElementsByName('phone_email')[0].value !== '';
  const passField = document.getElementsByName('password')[0].value !== '';
  const birthdate = document.getElementsByName('birthdate')[0].value !== '';
  const sexField = function () {
    let result = false;
    for (let i = 0; i < 3; i += 1) {
      if (document.getElementsByName('gender')[i].checked) {
        result = true;
      }
    }
    return result;
  };
  const list = [fnameField, lnameField, celField, passField, birthdate, sexField];
  let formOk = true;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === false) {
      formOk = false;
      break;
    }
  }
  if (formOk === true) {
    document.getElementsByClassName('right-content')[0].innerHTML = 'Tudo Certo';
  } else {
    const errorMsg = document.getElementById('field_error');
    errorMsg.style.color = 'red';
    errorMsg.innerHTML = 'Campos inválidos';
  }
});
