function positivoNegativo(){

    let n = parseInt(document.getElementById("numero-digitado").value);

    if (n > 0) {
        document.getElementById("numero-digitado").value = '';
        return document.getElementById("resultado").innerHTML = "Positivo";
    }else if (n < 0 ) {
        document.getElementById("numero-digitado").value = '';
        return document.getElementById("resultado").innerHTML = "Negativo";
    }else{
        document.getElementById("numero-digitado").value = '';
        return document.getElementById("resultado").innerHTML = "Zero";
    }


}