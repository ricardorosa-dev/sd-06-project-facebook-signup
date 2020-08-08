const botao = document.querySelector("#user-email-phone");
function alertUser(){
  if(botao.value == ""){
    alert("Por favor, digite um Email ou Celular")
  }else
  alert(botao.value)
}
