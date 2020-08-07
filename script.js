let buttonLogin = document.getElementById('button-login');
let inputEmailPhone = document.getElementById('user-email-phone');
let genderOptionOther = document.getElementById('other');
let genderOptionFemale = document.getElementById('female');
let genderOptionMale = document.getElementById('male');
let genderFather = document.getElementById('gender-area');

genderOptionFemale.addEventListener('click', function() {
    genderFather.style.display = "none";
});
genderOptionMale.addEventListener('click', function() {
    genderFather.style.display = "none";
});
genderOptionOther.addEventListener('click', function() {
    genderFather.style.display = "block";
});
buttonLogin.addEventListener('click', function() {
    alert(inputEmailPhone.value);
});