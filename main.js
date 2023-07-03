const form = document.getElementById('form-validate');

let formValid = false;

function numbervalid (ValA, ValB){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let ValA = parseFloat(document.getElementById('campoA').value);
    let ValB = parseFloat(document.getElementById('campoB').value);

    const messagesucess = 'Formulário enviado com sucesso!';
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(ValA, ValB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        ValA = '';
        ValB = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }    
})