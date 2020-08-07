window.onload = function() {
  let entrar = document.querySelector("#button-login")
  entrar.addEventListener("click", function(){
    let email = document.querySelector("#user-email-phone");
    alert(email.value);
  })
}