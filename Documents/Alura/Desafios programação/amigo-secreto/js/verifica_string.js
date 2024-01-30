function verificaString() {
    let texto = document.getElementById('string-digitado').value;
   
    if (texto.trim() === '' || texto.trim() === null){
        alert("Por favor, não utilize espaço como opção digite algo");        
    }

    if (texto.trim().length == '' ) { //verifica se a string que entra é vazia
        
        return menssagemVazia(),eString(), faZerar();                
    } else {        
        return menssagemNaoVazia(),eString(), faZerar();
    }
}

function eString() { // muda o tamanho da fonte no html
    return document.getElementById('resultado').style.fontSize = "600%";    
}

function menssagemVazia() { // o envio da mensagem
    return document.getElementById("resultado").innerHTML = "String vazia";    
}

function faZerar() { // reseta a caixa de input
    return document.getElementById('string-digitado').value = "";    
}

function menssagemNaoVazia() { // envia a mensagem que não é uma string vazia
    return document.getElementById("resultado").innerHTML = "String não é vazia";
}