

async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    //Adiciona os dados desejados do arquivo
    //Nesse exemplo ele manda o título e o próprio arquivo
    body.append('title', 'bla bla bla')
    body.append('arquivo', arquivo);

    //Upload do arquivo
    let req = await fetch('https://www.meusite.com.br/upload', {
        //upload geralmente é feito através do método "post"
        method: 'POST',
        body: body, //Deve ser um FormData, por se tratar de um arquivo
        headers: {
            'Content-Type': 'multipart/form-data' // Serve para que na URL consiga reber o arquivo normalmente
        }
    });
}