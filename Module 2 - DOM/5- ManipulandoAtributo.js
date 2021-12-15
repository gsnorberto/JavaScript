function trocarImagem(filename, animalName){
    document.querySelector('.imagem').setAttribute('src', './Media/'+filename); 
    document.querySelector('.imagem').setAttribute('animal-name', animalName);
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('animal-name');

    alert("O animal é: "+ animal);
}