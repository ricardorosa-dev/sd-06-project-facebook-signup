const buttonTop = document.querySelector('#button-login');
const email = document.querySelector('#user-email-phone');
const radioButtonPersonalizado = document.querySelector('#personalized');
const radioButtonMasculino = document.querySelector('#male');
const radioButtonFeminino = document.querySelector('#female');
const containerRadioButtons = document.querySelector('.radio');
const customGender = document.createElement('input');

buttonTop.addEventListener('click', function () {  
  alert(email.value);
});

radioButtonPersonalizado.addEventListener('change', function () {
    customGender.placeholder = "Gênero (opcional)";
    customGender.name = "gender-custom";
    customGender.id = "personalizado"
    containerRadioButtons.appendChild(customGender);    
});

radioButtonMasculino.addEventListener('change', function () {
    let personalized = document.querySelector('#personalizado');
    if (personalized !== null) {
        containerRadioButtons.removeChild(personalized);
    }       
});

radioButtonFeminino.addEventListener('change', function () {
    let personalized = document.querySelector('#personalizado');
    if (personalized !== null) {
        containerRadioButtons.removeChild(personalized);
    }       
});
