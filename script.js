const button = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');

function buttonAlert() {
  alert(inputEmail.value);
}

window.onload = function () {
  button.addEventListener('click', buttonAlert);

  //INICIALIZACAO PIKADAY
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    onSelect: function(date) {
      console.log(date);
    }
  });
};
