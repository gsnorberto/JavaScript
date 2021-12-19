let nome = 'Gabriel Silva Norberto'

console.log(nome.length); // tamanho da string
console.log(nome.indexOf('Silva')); // Posição do elemento "Silva". Nesse caso é 8


// pega os elementos da string de acordo a posição selecionada = "Gabriel Si"
console.log(nome.slice(0, 10)); 
// console.log(nome.substring(0, 10));


//Substituir texto em String
let resultado = nome.replace('Gabriel', 'Adriano') //Substitui a palavra "Gabriel" por "Adriano"
console.log(resultado);


//"toLowerCase" para minúsculo
let nomeMaiusculo = nome.toUpperCase(); 
console.log(nomeMaiusculo);


//remove os espaços do começo e do fim da string
let nomeEspacado = '  result       '; 
let resultado3 = nomeEspacado.trim().length;
console.log(resultado3);


//Transforma String em Arrays
let nome2 = "Gabriel Silva Norberto"
let resultado4 = nome2.split(' '); // Onde achar espaçamento vai ser dividido em Array
console.log(resultado4);