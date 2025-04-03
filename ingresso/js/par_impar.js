
function verificarParOuImpar() {
    let numero = parseInt(document.getElementById('numero').value);
    
    if (numero % 2 === 0) {
        //alert('par');
        document.getElementById("saida").innerHTML = "Resultado: "+ "par";
        return "Par";
    } else {
        //alert('ímpar');
        document.getElementById("saida").innerHTML = "Resultado: "+ "Ímpar";
        return "Ímpar";
    }    
    
}

function limpar() {
    document.getElementById('numero').value = '';
    document.getElementById("saida").innerHTML = " ";
    location.reload();
}
