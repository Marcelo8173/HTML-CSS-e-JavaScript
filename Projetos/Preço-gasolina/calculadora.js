var gasolina = document.getElementById('gasolina');
var alcool = document.getElementById('alcool');
var res = document.getElementById('res');
var resultado;

function calcular(){
    resultado = Number(alcool.value)/Number(gasolina.value);
    console.log(resultado);
    if(resultado < 0.7){
        res.innerHTML = `É mais vantajoso abastecer com <strong>alcool</strong>`;
    }else{
        res.innerHTML = `É mais vantajoso abastecer com <strong>gasolina</strong>`;
    }
}