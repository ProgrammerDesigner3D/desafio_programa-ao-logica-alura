let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    if (amigos.includes(amigo.value.toLowerCase())) {
        alert('Nome já adicionado em Minusculo');
        return;
    }

    if (amigos.includes(amigo.value.toUpperCase())) {
        alert('Nome já adicionado em Maiúsculo!');
        return;
    }

    
    let lista = document.getElementById('lista-amigos');
    

    amigos.push(amigo.value);

    
    
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }    

    //alert(amigos.join());// usado o join para imprimir os nomes contido no array
    //condição para manter a lista com números pares após passar a contagem de 4 amigos adicionado
    if (parseInt(amigos.length) > 4 && parseInt(amigos.length)%2 !== 0 ) {
        alert("Por favor, adicione mais um nome para a lista do sorteio se mantendo em números pares !")
    }

    amigo.value = '';

    atualizarLista();
    AtualizarSorteio();
    
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--){

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];

    }
}

function sortear() {

    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < amigos.length; i++) {
            if( i == amigos.length -1 ){
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos [0] + '<br>';
            }else{
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos [i + 1] + '<br>';                
        }
        
    }

}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    AtualizarSorteio();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);

    }
}

function reiniciar() {
    amigos.length = 0;    
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById("nome-amigo").value = '';
    location.reload();
}