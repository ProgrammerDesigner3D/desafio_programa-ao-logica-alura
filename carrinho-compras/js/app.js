let totalGeral;
limpar();

function adicionar(params) {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;

    //alert(nomeProduto);
    let nomeProduto = produto.split('-')[0];
    //valor Unitario
    let valorUnitario = produto.split('R$')[1];
    //Quantidade do produto
    let quantidade = document.getElementById('quantidade').value;
    
    //alert(valorUnitario);
    //alert(quantidade.value);
    //calcular o preço

    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

    //criando um tratamento de erro com questão a quantidade quando for apertado o botão com Zero quantidade
    if (quantidade == 0) {
        quantidade = 0;                
        preco = 0;
        alert('Por favor digite a quantidade');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">0x</span> nenhum <span class="texto-azul">R$0</span>
  </section>`;       
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    
}