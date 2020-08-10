function buttonLoginAlert() {
  alert(document.getElementById('user-email-phone').value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', buttonLoginAlert);

function nullOrEmpty(field) {
  const v = document.getElementById(field).value;
  return v === null || v === '';
}

function validateForm() {
  if (!nullOrEmpty('name')
    && !nullOrEmpty('surname')
    && !nullOrEmpty('phone_email')
    && !nullOrEmpty('password')
    && !nullOrEmpty('birthdate')
    && !nullOrEmpty('gender')) {
    return true;
  }
  const msInvalidField = document.getElementById('msInvalidField');
  msInvalidField.style.display = 'block';
  return false;
}
