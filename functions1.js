//Declaração da função soma()
function soma(num1, num2) {
    x = num1 + num2
    return x;
}

window.onload = function () {
    objBotao = document.getElementById("botao");
    objBotao.onmouseout = function () {
        //Chamadas (sim, no plural!) da função soma()
        objResultado = document.getElementById("resultado");

        objResultado.innerHTML += soma(soma(3, 5), 8) + "<br>";
    }
}