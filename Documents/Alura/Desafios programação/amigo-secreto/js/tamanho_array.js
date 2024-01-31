let gavetas = [];

function adicionandoConteudo() {
    let inserindo = document.getElementById("entrada").value;
    gavetas.push(inserindo.value);
    document.getElementById("entrada").value = '';    
}

function verificaTamanho(){
    document.getElementById("resultado").innerHTML = " o tamanho do Array é  " + gavetas.length;    
    
}

function apagaMedia() {
    document.getElementById("resultado").innerHTML = "";
    gavetas.length = 0;
}