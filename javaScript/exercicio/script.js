let SOMAR = document.querySelector("#somar");
let ipNumero = document.querySelector("#ipNumero");
let h2Titulo = document.querySelector("#h2Titulo");
let ipNumero2 = document.querySelector("#ipNumero2");
let resultado = document.querySelector("#resultado");

SOMAR.onclick = function(){ 
    somarValores();
}

function somarValores (){
    let soma = Number (ipNumero.value) + Number (ipNumero2.value);
    resultado.value = soma;
}

