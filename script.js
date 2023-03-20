const form = document.querySelector('form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

/*btn.addEventListener('click',btnOnclick);

function btnOnclick() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}*/

/*form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault(); //previene el evento que tien por default (recargar págica)
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}*/

btn.addEventListener('click',btnOnclick);

function btnOnclick() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}