const buttonLogin = document.querySelector('#button-login');
const emailPhoneInput = document.querySelector('#user-email-phone');

// window.onload = function () {
//   let picker = new Pikaday({
//     field: document.getElementById('birthdate'),
//   });
// };

buttonLogin.addEventListener('click', function () {
  alert(emailPhoneInput.value);
});
