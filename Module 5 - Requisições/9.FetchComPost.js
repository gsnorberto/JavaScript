async function inserirPost(){
    document.getElementById("posts").innerHTML = "Carregando..."

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', //Dados enviados no corpo da requisição
        body: JSON.stringify({ //Converte valor em JS para String JSON
            title: 'Titulo teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let json = req.json()

    console.log(json);
}