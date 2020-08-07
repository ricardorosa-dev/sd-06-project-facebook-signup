function buttonLoginAlert() {
  const button = document.querySelector('#button-login');
  const userInput = document.querySelector('#user-email-phone');

  button.addEventListener('click', function () {
    alert(userInput.value);
  });
}

buttonLoginAlert();
