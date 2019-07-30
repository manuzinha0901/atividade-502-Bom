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

function acessar(){
    localStorage.setItem('nome',caixatexto.value); 
}
function limpar(){
    localStorage.clear();
}

botao.onclick = acessar;
naoSou.onclick = limpar;

if(localStorage.nome){
    alert("existe")
}
else{
    alert(" n existe")
}

