window.onload = function () {
    var oBotao = document.getElementById("botao");
    var oDiv = document.getElementById("cidades");

    oBotao.onclick = function () {
        var xhttp = new XMLHttpRequest();
        //Disparado quando o servidor dá algum sinal de vida..
        xhttp.onreadystatechange = function () {

            /*readyState em 4 significa que o retorno aconteceu com sucesso. status em 200 significa requisição HTTP código 200, significa OK, sucesso. */

            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("cidades").innerHTML = "<pre>" + xhttp.responseText + "</pre>";
            }
        };
        xhttp.open("GET", "ajax.txt", true);
        xhttp.send();
    }
}