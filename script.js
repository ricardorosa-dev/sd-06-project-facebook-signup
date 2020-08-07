window.onload = function () {

  const button = document.getElementById("button-login");
  const inputEmail = document.getElementById("user-email-phone");

  function buttonAlert() {
    alert(inputEmail.value);
  }
    button.addEventListener("click", buttonAlert);
};
