
function mostrar(){
    var botao = document.getElementById('botao');
    var boneco = document.getElementById('esconder');
    botao.style.transitionDuration = "1s";
    botao.style.transform = "rotate(360deg)"
    botao.style.animation = "sumir 2s";
    botao.style.visibility = "hidden";
// 
    boneco.style.animation = "aparecer 2s"
    boneco.style.visibility="visible";
}

function muda(){
    document.getElementById("anima").style.transform = "rotate(-150deg)"; 
    document.getElementById("anima").style.transformOrigin= "0 0"; 
    document.getElementById("anima").style.left = "62%"; 
    ///
    var olhos = document.getElementById('olhos');
    olhos.style.animation = "piscar 0.5s";
   
}
