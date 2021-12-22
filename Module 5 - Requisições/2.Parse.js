// O JSON sempre vem em formato de String, então é necessário utilizar o "parse" para que ele se transforme em um objeto json real

// Quando recebemos o resutado de uma requisição o JSON vem em formato de string

let pessoa = JSON.parse('{"nome": "Gabriel", "idade": 90}')

console.log(pessoa.nome);
console.log(pessoa.idade);