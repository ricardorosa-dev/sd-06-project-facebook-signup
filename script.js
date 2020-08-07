let loginButton = document.querySelector("#button-login");
let emailTelephoneInput = document.querySelector("#user-email-phone");

loginButton.addEventListener("click", function(){
	alert(emailTelephoneInput.value);
});