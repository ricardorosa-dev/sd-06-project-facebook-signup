window.onload = function () {
  const buttonLogin = document.querySelector('#button-login');
  buttonLogin.addEventListener('click', function () {
    const inputUser = document.querySelector('input#user-email-phone').value;
    alert(inputUser);
  });  
}
