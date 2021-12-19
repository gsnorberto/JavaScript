let lista2 = document.querySelector('ol.lista');
console.log(lista2);

let listas = document.querySelectorAll('.lista')

console.log(listas); //Array com as listas ul (posição 0) e ol (posição 1)
console.log(listas[0]); //Imprime a lista "ul"


//Seleciona as "li" e pinta de vermelho
let listasli = document.querySelectorAll('li');

for(let i in listasli){
    listasli[i].style.color = 'red';
}