window.onload = function () {
  const formBarButton = document.querySelector('#button-login');
  formBarButton.addEventListener('click', function () {
    const inputEmailValue = document.querySelector('#user-email-phone');
    alert(inputEmailValue.value);
  });


};
