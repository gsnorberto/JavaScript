function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("Pegando temperatura...");

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000)
    })
}

console.log("Antes...");

let temp = pegarTemperatura();

console.log("Durante...");

temp
    .then(function(resultado){ //resultado do "resolve"
        console.log("TEMPERATURA: "+resultado);
    })
    .catch(function(err){
        console.log("Algo deu errado!");
    });

console.log("Depois...");

//IMPRESSÃO:

// Antes...
// Pegando temperatura...
// Durante...
// Depois...
// TEMPERATURA: 40 na sombra

