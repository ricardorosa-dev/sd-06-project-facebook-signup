window.onload = ()=>{
    alert();
 let showAlert = ()=> {
   let button =  document.getElementById("button-login");
   let emailTelefone = document.getElementById("user-email-phone").value;
   button.addEventListener("click",()=>{
   
    alert(emailTelefone);
   });
 };
};

var btn = document.getElementById('facebook-register');
btn.addEventListener('click', function() {
  var form = document.getElementsByClassName('inputs')[0];
  var message = document.createElement('p');
  message.innerHTML = "Campos inválidos";
  var allText = document.querySelectorAll('.input-text');
  var allRadio = document.querySelectorAll('.input-radio');
  for(let i = 0; i < allText.length; i++) {
    if(allText[i].value === '') {
      form.appendChild(message);
    } else if(document.inputs.gender.value === '') {
      form.appendChild(message);
    }
  }

})