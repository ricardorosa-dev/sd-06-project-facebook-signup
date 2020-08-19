const loginButton = document.getElementById('button-login');
const custom = document.getElementById('personalizado');

function alertEmail() {
  const userEmail = document.getElementById('user-email-phone');
  alert(userEmail.value);
}

function optionalGender() {
       const genderForm = document.getElementById('js-form');
       const buttonForm = document.getElementById('facebook-register');
       const newGender = document.createElement('input');
       newGender.id = 'gender-custom';
       newGender.type = 'text';
       newGender.name = 'gender-custom';
       newGender.placeholder= 'Gênero (opcional)';
       genderForm.insertBefore(newGender, buttonForm);
}

loginButton.addEventListener('click', alertEmail);

custom.addEventListener('click', optionalGender);
