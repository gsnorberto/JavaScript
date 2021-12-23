// Método 2 - Leitura de Imagem

// ASSÍNCRONO

function mostrar(){
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0]

    //Quando o carregamento finalizar, executa essa função
    reader.onloadend = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);
}