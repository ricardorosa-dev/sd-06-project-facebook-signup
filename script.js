let button = document.querySelector('#facebook-register')
let radios = document.getElementsByName('gender');
let form = document.querySelector('#formulary');
let sectionRadios = document.querySelector('.gender');
let inputs = document.querySelectorAll('#formulary input');
let dataLogin = document.querySelectorAll('.facebook-login input')
let login = document.querySelector('#button-login')


function alertLogin() {
    alert(dataLogin[0].value)
}

login.addEventListener('click', alertLogin)

function validateData() {
    event.preventDefault()
    let p = document.createElement('p');
    
    for(let i = 0; i < inputs.length; i +=1) {
       if(inputs[i].value === '') {
           p.innerHTML = 'Campos invalidos'
           form.appendChild(p)
       }
    }
    for(let i = 0; i < radios.length; i += 1) {
        if(radios[i].checked) {
            return radios[i].value
        } else {
            p.innerHTML = 'Campos invalidos'
            form.appendChild(p)
        }
    }
}

button.addEventListener('click', validateData);

function addCampo() {
    let inputGender = document.createElement('input');
    inputGender.setAttribute('placeholder', 'Genero(opcional)')

    for(let i = 0; i < radios.length; i += 1) {
        radios[i].addEventListener('click', function() {
            if(radios[i].value == 'Personalizado') {                
                form.insertBefore(inputGender, button);        
            }
        });
    }
}

addCampo();


