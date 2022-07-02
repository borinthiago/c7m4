window.onload = function () {
    var objCxNome = document.getElementById("nome");
    var objBotao = document.getElementById("botao");
    var objDiv = document.getElementById("resultado");
    objBotao.onclick = function () 
    {
        objDiv.innerText = "Seu nome é " + objCxNome.value;
    }
}