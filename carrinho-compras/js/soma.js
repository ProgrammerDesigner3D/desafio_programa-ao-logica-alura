function somaValores() {
    var pN = document.getElementById('pNumero').value;
    var sN = document.getElementById('sNumero').value;
    var somaR = parseInt(pN)+parseInt(sN);

 document.getElementById('resultadoSoma').textContent = `Primeiro Numero: ${pN}, Segundo Numero: ${sN}, Resultado da soma: ${somaR
}`;
    console.log(`pNumero: ${pNumero}, sNumero: ${sNumero}, resultado da soma: ${somaR}`);
}
