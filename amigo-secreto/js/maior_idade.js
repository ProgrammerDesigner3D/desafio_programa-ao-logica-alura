function verIdade() {
    let idade = document.getElementById("numero-digitado").value;    

    if(idade == null || idade==""){ //forma se caso enviar letras no lugar de números incrementando o tratamento
        return document.getElementById('resultado').style.fontSize = '600%', document.getElementById('numero-digitado').value = "",document.getElementById('resultado').innerHTML = "Digite somente Número";
    }

    return idade>= 18 ? document.getElementById('resultado').innerHTML = "Maior de idade" : document.getElementById('resultado').innerHTML = "Menor de idade";


}
