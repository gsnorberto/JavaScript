//Seguindo o exemplo anterior... (fetch)

// O Async Await tem por objetivo "obrigar" esperar a resposta, para depois fornecê-la

//A função deve ser marcada como assíncrona
async function loadPosts(){ 
    document.querySelector('#posts').innerHTML = 'Carregando...';
    
    let req = await fetch('https://jsonplaceholder.typicode.com/posts') //Espera essa promise finalizar para continuar
    let json = await req.json(); //Espera essa promise finalizar para continuar
    montarBlog(json);

    //Essas 3 linhas acima fazem a mesma função de todas as linhas comentadas abaixo

    // fetch('https://jsonplaceholder.typicode.com/posts')  
    //     .then(function(resultado){
    //         return resultado.json(); 
    //     })
    //     .then(function(json){
    //         montarBlog(json);
    //     })
    //     .catch(function(err){
    //         console.log('Algo deu errado');
    //     })
}

function montarBlog(lista){
    let html = '';

    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }

    document.querySelector('#posts').innerHTML = html;
}

//Outra Sintaxe
// let loadPosts = async () => {

// }