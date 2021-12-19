let listaNum = [45, 4, 9, 16, 25];
let listaNum2 = []
let listaNum3 = []
let listaNum4 = []
let listaNum5 = []



// ----------------- MAP -----------------
listaNum2 = listaNum.map(function(item){
    return item * 2;
});
console.log(listaNum2); // [90, 8, 18, 32, 50]



//---------------- FILTER -----------------
listaNum3 = listaNum.filter(function(item){
    // if(item < 20 ){
    //     return true;
    // } else {
    //     return false;
    // }

    //Outra maneira de digitar
    return (item < 20) ? true : false;
})
console.log(listaNum3); // [4, 9, 16]


//------------ FIND / FINDINDEX -------------
// Retorna o primeiro item que satisfaça a condição
listaNum5 = listaNum.find(function(item, index, array){
    return (item == 16) ? true : false;
})
console.log(listaNum5); // 16

// ********** EX 2 *************
let usuarioResult = []
let listaUsuarios = [
    {id: 1, nome: 'Gabriel', sobrenho: 'norberto'},
    {id: 2, nome: 'Marcus', sobrenho: 'Santos'},
    {id: 3, nome: 'Sara', sobrenho: 'Marques'},
]

usuarioResult = listaUsuarios.find(function(usuario){
    return (usuario.nome == 'Marcus') ? true : false;
})

console.log(usuarioResult); //{id: 2, nome: 'Marcus', sobrenho: 'Santos'}

//---------------- EVERY ------------------
//Retorna true se todas as condições forem satisfeitas pelo "if"
listaNum4 = listaNum.every(function(item){
    if(item > 50 ){
        return true;
    } else {
        return false;
    }
})
console.log(listaNum4); // false

