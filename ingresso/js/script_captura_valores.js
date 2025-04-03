
function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    
    if (!nome.trim()) {
        alert('Erro: O campo nome não pode estar vazio!');
        
    }else if (/\d/.test(nome)) {
        alert("Erro: O nome não pode conter números!")
    }
    const idade = document.getElementById('campoIdade').value;
    
    if (isNaN(idade) || idade <= 0) {
        alert("Insira uma idade válida.");
        return;
    }   
    

 document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
    
}

function apaga() {
    document.getElementById('campoNome').value = '';
    document.getElementById('campoIdade').value = '';
    document.getElementById('mostraNome').innerHTML = 'Seu nome e idade irão aparecer aqui.';
    document.getElementById('campoIdade').textContent = '';
}

