window.onload = function () {
    var objTxtNota = document.getElementById("nota");
    var objDivResultado = document.getElementById("resultado");
    var objBotao = document.getElementById("botao");

    objBotao.onclick = function () {
        var objFloNota = parseFloat(objTxtNota.value);
        if (objFloNota >10) {
            objDivResultado.innerHTML = "Nota Inválida";
            console.log("nota inválida >100");
        
        } else if (objFloNota < 0) {

            objDivResultado.innerHTML = "Nota inválida";
            console.log("nota inválida <0");
                    
        } else if (objFloNota >= 6.0) {

            objDivResultado.innerHTML = "Aluno aprovado.";
            console.log("Aluno aprovado com nota " + objFloNota);

        } else if (objFloNota >= 4.0) {
            objDivResultado.innerHTML = "Aluno em exame.";
            console.log("Aluno em exame com nota " + objFloNota);

        } else {

            objDivResultado.innerHTML = "Aluno reprovado.";
            console.log("Aluno reprovado com nota " + objFloNota);

        } // fim dos ifs
    } // fim do on-click
} // fim do window.onload