var data = new Date();
var hora = data.getHours();
var hora_londres = hora+5;
var corpo = document.getElementById('corpo');
var conteudo = document.getElementById('conteudo');
var res = document.getElementById('res');
var bola = document.getElementById('bola');


function exibir(){
    if (hora >= 0 && hora<12){
        corpo.style.backgroundColor = "#FFF361";
        bola.style.backgroundImage = "url(./imagens/nature-3294681_1920-1030x579.jpg)";
        bola.style.backgroundSize = "200px 200px"
        res.innerHTML = `A hora do dia é ${hora} Horas`;
    }else if(hora >=12 && hora<18){
        corpo.style.backgroundColor = "rgb(218, 166, 56)";
        bola.style.backgroundImage = "url(./imagens/DKe5Ik4WAAI4S3i.jpg)";
        bola.style.backgroundSize = "200px 200px"
        res.innerHTML = `A hora do dia é ${hora} Horas`;
    }else{
        corpo.style.backgroundColor = "#223838";
        bola.style.backgroundImage = "url(./imagens/Captura-de-Tela-2017-11-28-às-11.35.07.png)";
        bola.style.backgroundSize = "200px 200px"
        res.innerHTML = `A hora do dia é ${hora} Horas`;
    }
}

function exibir_londres(){
    if (hora_londres >= 0 && hora_londres<12){
        corpo.style.backgroundColor = "#FFF361";
        bola.style.backgroundImage = "url(./imagens/nature-3294681_1920-1030x579.jpg)";
        bola.style.backgroundSize = "200px 200px"
        res.innerHTML = `A hora do dia é ${hora_londres} Horas`;
    }else if(hora_londres >=12 && hora_londres<18){
        corpo.style.backgroundColor = "rgb(218, 166, 56)";
        bola.style.backgroundImage = "url(./imagens/DKe5Ik4WAAI4S3i.jpg)";
        bola.style.backgroundSize = "200px 200px"
        res.innerHTML = `A hora do dia é ${hora_londres} Horas`;
    }else{
        corpo.style.backgroundColor = "#223838";
        bola.style.backgroundImage = "url(./imagens/Captura-de-Tela-2017-11-28-às-11.35.07.png)";
        bola.style.backgroundSize = "200px 200px"
        res.innerHTML = `A hora do dia é ${hora_londres} Horas`;
    }
}



