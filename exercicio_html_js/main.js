
const form = document.getElementById('form-validate');
const numberA = document.getElementById("number-1");
const numberB = document.getElementById("number-2");
const campoA = numberA;
const campoB = numberB;
let formIsValid = false;

function validateNumber(campoA, campoB) {
    return campoB > campoA;
  }

form.addEventListener('submit', function(e){
    e.preventDefault();

    const finalNumberA = parseFloat(numberA.value);
    const finalNumberB = parseFloat(numberB.value);
    const sucessMessage = `Correto: o valor de B: ${campoB.value} é maior do que o valor de A: ${campoA.value}`;
    const failMessage = `Erro: o valor de B: ${campoB.value} é menor do que o valor de A: ${campoA.value}`;
    
    formValidate = validateNumber(finalNumberA, finalNumberB);
    if(formIsValid == true){
        const containerSucess = document.querySelector(".sucess-message");
        containerSucess.innerHTML = sucessMessage;
        containerSucess.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

    }else {
        if (!formIsValid){
            const containerFail = document.querySelector('.fail-message');
            containerFail.innerHTML= failMessage;
            containerFail.style.display = 'block';
            
            campoA.value = '';
            campo.value = '';
        };
    };
})