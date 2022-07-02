window.onload = function () {
    var objDivSaida = document.getElementById("saida");

    var i = 1;
    do {
        objDivSaida.innerHTML += i + "<br>";
        i++;
    } while (i < 100); //A condição é falsa, logo de início..
}