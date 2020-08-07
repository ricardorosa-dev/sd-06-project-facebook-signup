const buttonEnter = document.querySelector('.button-login');
const textEmailTel = document.getElementById('user-email-phone');

function alertEmail() {
  alert(textEmailTel.value);
}

buttonEnter.addEventListener('click', alertEmail);
