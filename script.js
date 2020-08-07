const buttonLogin = document.getElementById('button-login');
const buttonSignUp = document.getElementById('facebook-register');
const emailInput = document.getElementById('user-email-phone');
const form = document.getElementById('formSignUp')

buttonLogin.addEventListener('click', function() {
  window.alert(emailInput.value);
});

buttonSignUp.addEventListener('click', function() {checkEmpty()});

function checkEmpty(){
  if(document.getElementById('firstname').value == '') {
    invalidFields()
    return
  }
  if(document.getElementById('lastname').value == '') {
    invalidFields()
    return
  }
  if(document.getElementById('phone_email').value == '') {
    invalidFields()
    return
  }
  if(document.getElementById('password').value == '') {
    invalidFields()
    return
  }
  if(document.getElementById('birthdate').value == '') {
    invalidFields()
    return
  }

  return
}

function invalidFields(){
  let invalid = document.createElement('p');
  invalid.appendChild(document.createTextNode('Campos inválidos'));
  form.appendChild(invalid);
}
