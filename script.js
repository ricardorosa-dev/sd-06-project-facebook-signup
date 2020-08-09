const button = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');
let picker = "";

function buttonAlert() {
  alert(inputEmail.value);
}

picker = new Pikaday({
  field: document.getElementById('datepicker'),
  onSelect: function(date) {
    console.log(date);
  }
});

window.onload = function () {
  button.addEventListener('click', buttonAlert);
};
