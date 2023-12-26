function alterarStatus(id){

    let gameClicado = document.getElementById(`game-${id}`);
    let image = gameClicado.querySelector(' .dashboard__item__img');
    let botao = gameClicado.querySelector(' .dashboard__item__button');
    
    if(image.classList.contains('dashboard__item__img--rented')){

        image.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';

    }else{

        image.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        ///test
        //test1
        //problema de conflito resolvido
        //problema este gerado na hora de upar programação concluida usei master ao invéz do main com isso criou
        //uma nova branch gerando conflito quando tentava subir o projeto
        
    }
}