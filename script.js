document.getElementById('button-login').addEventListener('click', function () {
  alert(document.querySelector('.user-email-phone').value);
});

const buttonSubmit = document.getElementsByClassName('form-input');
buttonSubmit.addEventListener('click', function (){
  for(index in buttonSubmit.length){
    if(buttonSubmit === ''){
      alert('')
    }
  }
});