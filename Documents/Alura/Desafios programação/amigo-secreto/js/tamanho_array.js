let gavetas = [];

function adicionandoConteudo() {
    let inserindo = document.getElementById("entrada");
    //alert(inserindo.value.trim());
    if (inserindo.value.trim() === '' || inserindo.value.trim() === null){//tratamento para quando tentar usar espaço
        
        return alert("Por favor, não utilize espaço como opção digite algo");
    }
    gavetas.push(inserindo.value);
    document.getElementById("entrada").value = '';    
}

function verificaTamanho(){
    document.getElementById("resultado").innerHTML = " o tamanho do Array é  " + gavetas.length;    
    
}

function apagaMedia() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("mostrArray").innerHTML ="";
    document.getElementById('lista-add').innerHTML = '';
    gavetas.length = 0;
}

function mostraConteudo() {
    document.getElementById("mostrArray").innerHTML = (gavetas.join('-'));
}

function mostrarPoiscaoElemento() {

    let lista = document.getElementById('lista-add');
        
    lista.innerHTML = '';

    for(let i = 0; i < gavetas.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.textContent = gavetas[i]=i + "  " + " - " + "  " + gavetas[i];

        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);

    }

}