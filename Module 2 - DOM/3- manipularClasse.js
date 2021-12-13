function verde(){
    //Remove a classe "vermelho e azul" e adiciona a "verde"
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('azul')
    //Adiciona a classe "verde" no elemento com id "exemplo"
    document.querySelector('#exemplo').classList.add('verde');
}

function vermelho(){
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('vermelho');
}

function azul(){
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.add('azul');
}



function trocar(){
    // Verifica se o elemento "button" tem a classe "preto", se tiver, muda pra verde e vice versa.
    if(document.querySelector('#button').classList.contains('preto')){
        document.querySelector('#button').classList.remove('preto')
        document.querySelector('#button').classList.add('verde')
    }else{
        document.querySelector('#button').classList.remove('verde')
        document.querySelector('#button').classList.add('preto')
    }
}