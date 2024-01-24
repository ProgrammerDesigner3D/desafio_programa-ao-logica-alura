// Declarando uma variável do tipo array
let minhaLista = [];


function adicionarTres(){

    let adiTres = document.getElementById('tres-palavras').value;
    let separAdiTres = adiTres.split(' ');

    minhaLista.push(separAdiTres);


    //adiTres.value = '';

    let outrosNumeros = document.getElementById('cadaPalavra').value;
    let separaOutrosNumeros = outrosNumeros.split(',');
    minhaLista.push(separaOutrosNumeros);
    
    alert(separaOutrosNumeros + "  o que entrou ")

    let novaLista = minhaLista.concat(outrosNumeros);
    alert(novaLista + "    Elementos adicionados");

    
    function embaralharArray(novaLista){
    for(let i = novaLista.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
            [novaLista[i], minhaLista[j]] = [novaLista[j], minhaLista[i]];

            
        }
        return novaLista;
        //alert(novaLista +' Embaralhado');
    }
    let misturado = embaralharArray(novaLista);
    alert("Embaralhando: " + misturado)

    //outrosNumeros.value = '';

    novaLista.pop()
    alert(novaLista + '  removendo o ultimo');

    function removerDuplicatas(novaLista){
        return[...new Set(novaLista)];

    }
    let novaListaSemDuplicatas = removerDuplicatas(novaLista);
    alert("Remover duplicatas: "+novaListaSemDuplicatas);


    adiTres = '';
    outrosNumeros = '';
    minhaLista=[];
    novaLista=[];


}
