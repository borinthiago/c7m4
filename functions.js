//Declaração da função aloMundo()
function aloMundo() {
    objResultado = document.getElementById("resultado");
    objResultado.innerHTML += "Alô, Mundo!<br>";
}

window.onload = function () {
    objBotao = document.getElementById("botao");
    objBotao.onclick = function () {
        aloMundo(); //Chamada da função aloMundo()
    }
}