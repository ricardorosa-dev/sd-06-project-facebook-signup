const emailText = document.querySelector('#user-email-phone');
const btnLogIn = document.querySelector('#button-login');
btnLogIn.addEventListener('click', () => {
  alert(emailText.value);
});

// new JustValidate('.form-register', {
// rules: {
//   firstname: {
//     required: true
//   },
//   lastname: {
//     required: true
//   },
//   phone_email: {
//     required: true
//   },
//   password: {
//     required: true
//   },
//   birthdate: {
//     required: true
//   },
//   genderRadio: {
//     required: true
//   },
// },
// messages: {
//   name: {
//     required : "Campos inválidos" 
//   },
//   email: 'My custom message about error (one error message for all rules)'
// },
// submitHandler: function (form, values, ajax) {
  
// },
// });