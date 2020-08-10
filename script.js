const btnLogin = document.querySelector('#button-login');


btnLogin.addEventListener('click', function () {
  if (document.getElementById('user-email-phone').value !== ' ') {
    alert(document.getElementById('user-email-phone').value);
  }
});

const personalized = document.querySelector('#personalizado');
personalized.addEventListener('click', function () {
  const personalizedOptionField = document.createElement('input');
  personalizedOptionField.type = 'text';
  personalizedOptionField.name = 'gender-custom';
  personalizedOptionField.placeholder = 'Gender (optional)';
  const genderParentElement = document.querySelector('.other-fields');
  genderParentElement.insertBefore(personalizedOptionField, document.querySelector('#facebook-register'));
});
