window.onload = ()=>{

    alert();
 }




let showAlert = ()=> {

   let button =  document.getElementById("button-login");
   let emailTelefone = document.getElementById("user-email-phone").value;
   button.addEventListener("click",()=>{
   
    alert(emailTelefone);
   ;

   })

   
}

