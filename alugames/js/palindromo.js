essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo(){
    var palavra = "rever";
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    if(palavra == palavraInvertida){
        console.log("A palvra " + palavra + " é um palíndromo");
    }else{
        console.log("A palvra " + palavra + " não é um palíndromo");
    }

}