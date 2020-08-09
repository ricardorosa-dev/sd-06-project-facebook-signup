/* document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});
*/
const btnLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
const customRadio = document.getElementById('custom');
const genderCustom = document.querySelector('.custom-option');

function clickButton() {
    alert(userEmailPhone.value);
}

function customOption() {
    const createCustom = document.createElement('input');
    createCustom.name = 'gender-custom';
    createCustom.placeholder = 'Gênero (opcional)';
    genderCustom.appendChild(createCustom);
}

window.onload = function() {
    btnLogin.addEventListener('click', clickButton);
    customRadio.addEventListener('change', customOption);
};