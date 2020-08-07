const buttonLogin = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');
const genderOptionOther = document.getElementById('other');
const genderOptionFemale = document.getElementById('female');
const genderOptionMale = document.getElementById('male');
const genderFather = document.getElementById('gender-area');

genderOptionFemale.addEventListener('click', function () {
  genderFather.style.display = 'none';
});
genderOptionMale.addEventListener('click', function () {
  genderFather.style.display = 'none';
});
genderOptionOther.addEventListener('click', function () {
  genderFather.style.display = 'block';
});
buttonLogin.addEventListener('click', function () {
  alert(inputEmailPhone.value);
});
