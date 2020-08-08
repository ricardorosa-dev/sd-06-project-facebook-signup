window.onload = function () {
  const formButton = document.querySelector('#button-login');
  formButton.addEventListener('click', function () {
    const inputEmailValue = document.querySelector('#user-email-phone');
    alert(inputEmailValue.value);
  });
};
