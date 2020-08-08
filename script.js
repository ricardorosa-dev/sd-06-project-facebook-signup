const btnLogin = document.querySelector('#button-login');
const inputBox = document.querySelector('#user-email-phone');

btnLogin.addEventListener('click', function() {
    alert(inputBox.value);
})
