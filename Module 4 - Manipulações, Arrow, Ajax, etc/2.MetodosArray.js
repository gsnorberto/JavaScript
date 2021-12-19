let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Ovo2', 'Farinha2', 'Corante2', 'Massa2'];

//Adiciona novo item no Array
lista.push('Prato', 'Colher')


//Alterar elemento do array
lista[0] = 'Óleo'


//Remover elemento do array
//OBS - Não utilize o "delete" pois a posição do Array fica marcada como "Empty"
lista.splice(1, 1) //Remover a partir do item 1 apenas 1 item

//Remove o último elemento do array
// lista.pop();

//Remove o primeiro elemento do array
// lista.shift();


//Concatenação
let concat = lista.concat(lista2);
concat = concat.toString();
console.log(concat);


//Ordenação crescente e decrescente
// lista.sort();
// lista.reverse();


//Transforma o Array em String
let res = lista.toString();
console.log(res); //Ovo,Farinha,Corante,Massa


//Transforma em uma string separando pelo item divisor do join
let res2 = lista.join('-');
console.log(res2); // Ovo-Farinha-Corante-Massa


//Procura um índice específico do Array
let res3 = lista.indexOf('Corante');
console.log(res3); // 2

