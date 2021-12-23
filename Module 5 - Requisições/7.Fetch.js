function loadPosts(){
    document.querySelector('#posts').innerHTML = 'Carregando...';
    // Primeiro parâmetro é o link da Api que deseja fazer a requisição, segundo parâmetro (um objeto) é o tipo de requisição (get, put, post, delete) que, quando não definida, por padrão assume o tipo "get"
    fetch('https://jsonplaceholder.typicode.com/posts')  
        .then(function(resultado){
            return resultado.json(); //pega o resultado, transforma em json e manda para o "then" abaixo.
        })
        .then(function(json){
            montarBlog(json);
        })
        .catch(function(err){
            console.log('Algo deu errado');
        })
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