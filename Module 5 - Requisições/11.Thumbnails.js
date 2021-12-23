//Pegar a própria imagem antes de fazer upload.
//Por exemplo: Quando você vai atualizar sua foto de perfil, é importante que ao selecionar você já visualize no sistema antes de salvar

//SÍNCRONO

function mostrar(){
    let imagem = document.getElementById('imagem').files[0];

    //Gerar uma url para a foto
    //Mostrar imagem antes de fazer upload
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById('area').appendChild(img);
}