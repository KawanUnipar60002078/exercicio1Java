let ipTexto = document.querySelector('#ipTexto');
let h2Titulo = document.querySelector('#h2Titulo');
let btTrocarTexto = document.querySelector('#btTrocarTexto');                             

function trocarTexto(){
    let texto = ipTexto.value; 
    h2Titulo.textContent = texto;
    //exemplo de conversao para numero
    let numero = Number(ipTexto.value);
}
btTrocarTexto.onclick  = function(){
    trocarTexto();
}

