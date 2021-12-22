//OBS: NA FUNÇÃO ANÔNIMA NÃO EXISTE O OBJETO THIS

// function somar(x,y){
//     return x + y;
// }

// let somar = function(x,y){
//     return x + y;
// }

// let somar = (x,y) => {
//     return x + y;
// }

let somar = (x,y) => x+y;

// Apenas com um parâmetro
let qntLetras = nome => nome.length;
console.log(qntLetras('Gabriel'));

console.log(somar(10,15));
