function calculaMedia() {
    let p1 = parseInt(document.getElementById("primeiroNumero").value);
    let p2 = parseInt(document.getElementById("segundoNumero").value);
    

    if (isNaN(p1) || isNaN(p2)) {
        return alert("Um dos números não é válido.")
    }
    //return alert(((p1 + p2) / 2) );
    return eString(),mensResultado(p1, p2), faZerar(), mudaFontCor();
    
} 

function eString() { // muda o tamanho da fonte no html
    return document.getElementById('resultado').style.fontSize = "600%";    
}

function mensResultado(p1, p2) { // o envio da mensagem
    return document.getElementById("resultado").innerHTML = ((p1 + p2) / 2);
}

function faZerar() { // reseta a caixa de input
    let zer1 = document.getElementById("primeiroNumero").value = "";
    let zer2 = document.getElementById("segundoNumero").value = "";
    return zer1, zer2;
}
function mudaFontCor() {
    let fundoMuda = document.getElementById("resultado").style.backgroundColor = "red";
    let mudaCor = document.getElementById("resultado").style.color = "white";
    let mudaFontFamily = document.getElementById("resultado").style.fontFamily = "verdana";
    let sizeFundo = document.getElementById("resultado").style.backgroundSize = "30% 10px";
    let margiando = document.getElementById("resultado").style.margin = "20px 649px 10px 5px";
    let padiandoLeft = document.getElementById("resultado").style.paddingLeft = "7%";
    let padiandoRight = document.getElementById("resultado").style.paddingRight = "8px";
    return mudaCor, fundoMuda, mudaFontFamily,sizeFundo, margiando, padiandoLeft, padiandoRight;
}

