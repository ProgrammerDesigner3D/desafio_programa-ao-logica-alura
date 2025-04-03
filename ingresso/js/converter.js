//criado a função para receber o número digitado no html e somado com + 1 assim imprimindo
function adicionar() {
    let qtd = parseInt(document.getElementById('quantidade').value);    
    let imprimi = document.getElementById('resultado');
    imprimi.innerHTML =`<section class="resultado-soma">
    <span class="texto-resultado">Resultado do número digitado somado com 1 </span> = <span class="texto-azul"> ${qtd +1 } </span>
  </section>`;
  alert(qtd + 1);
    
}
//função para limpar e fazer o recarregamento da página
function limpar() {    
    location.reload();
    document.getElementById('quantidade').value ='';    
    
}

