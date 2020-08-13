window.onload = function () {
  const buttonLogin = document.querySelector('#button-login');
  const radioButtonFemaleGender = document.querySelector('#gender-female');
  const radioButtonMaleGender = document.querySelector('#gender-male');
  const radioButtonCustomGender = document.querySelector('#gender-custom');


  buttonLogin.addEventListener('click', function () {
    const inputUser = document.querySelector('input#user-email-phone').value;
    alert(inputUser);
  });

  radioButtonFemaleGender.addEventListener('click', function () {
    document.getElementById('gender-custom-form').style.display = 'none';
  });

  radioButtonMaleGender.addEventListener('click', function () {
    document.getElementById('gender-custom-form').style.display = 'none';
  });

  radioButtonCustomGender.addEventListener('click', function () {
    document.getElementById('gender-custom-form').style.display = 'block';
  });
};
