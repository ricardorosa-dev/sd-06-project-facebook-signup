const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');


login.addEventListener('click', function () {
  alert(name.value);
});

submitBtn.addEventListener('click', function() {
  let count = 0;
  for (let i = 2; i < (inputArray.length - 3); i += 1) {
    let resultCheck = inputArray[i].checkValidity();
    if (resultCheck === false) {
      count += 1;
    }
  }
  // if (inputArray[7] !== ':checked' && inputArray[8] !== ':checked' && inputArray[9] !== ':checked') {
  //   count += 1;
  // }
  if (count !== 0) {
    alert('campo vazio');
  }
});
