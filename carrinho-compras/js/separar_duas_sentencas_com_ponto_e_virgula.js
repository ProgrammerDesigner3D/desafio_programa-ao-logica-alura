function separaFrase() {
    

const duasSentencas = document.getElementById('frase').value;
const frasesSeparadas = duasSentencas.split(';');

document.getElementById('fraseSeparada').textContent = `Resultado da frase separada: ${frasesSeparadas}`;

}
