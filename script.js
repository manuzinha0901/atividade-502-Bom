//function mostrarMouse(event){
//    console.log(`Eixo X: ${event.pageX} e Eixo Y ${event.pageY}`);
//    if(event.pageX == 3 && event.pageY == 6){
//        alert("Favor não sair daqui. Fica vai ter bolo");
//    }
//}
//window.onmousemove = mostrarMouse; 

let caixatexto = document.querySelector("input");
let botao = document.querySelector("button");
let naoSou = document.querySelector("a");
let bemvinda =document.querySelector("h1");

function limpar(){
    localStorage.removeItem(`nome`);
}


if(localStorage.nome){
    caixatexto.style.display = "none"
    botao.style.display = "none"
    bemvinda.innerHTML =`seja bem vindo${localStorage.none}`
    naoSou.innerHTML = `nao e ${localStorage.nome}?`
}
else{
    function acessar(){
        localStorage.setItem('nome',caixatexto.value);
        caixatexto.style.display = "none"
    botao.style.display = "none"
    bemvinda.innerHTML =`seja bem vindo${localStorage.none}`
    naoSou.innerHTML = `nao e ${localStorage.nome}?` 
    }
}
botao.onclick = acessar;

