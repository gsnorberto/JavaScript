// Selecionar a tag html pelo ID e fazer alguma operação em cima desse elemento
document.getElementById('exemplo').innerHTML = "Pedro <button>Botão</button>"

//Pega o segundo elemento do array com a classe "lista"
document.getElementsByClassName('lista')[1].innerHTML = "Array alterado!"


// Selecionar pelo nome da tag
document.getElementsByTagName('button')
document.getElementsByTagName('div')

// Selecionar tag pelo "name"
document.getElementsByName('email')