const buttonLogin = document.getElementById('button-login');
const userLoginEmailPhone = document.getElementById('user-email-phone');
const customRadio = document.getElementById('custom');
const genderCustom = document.querySelector('.custom-option');

function clickButton() {
    alert(userLoginEmailPhone.value);
  }

function customOption() {
    const createCustom = document.createElement('input');
    createCustom.name = 'gender-custom';
    genderCustom.appendChild(createCustom);

window.onload = function () {
    buttonLogin.addEventListener('click', clickButton);
    customRadio.addEventListener('change', customOption);
}

