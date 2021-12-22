function alertar(){
    console.log('Opa, tudo bem')
}

let nome = 'Gabriel'
setTimeout(alertar, 2000); //setTimeOut é assíncrono
let sobrenome = 'Lacerda';
console.log("NOME COMPLETO =" +nome+' '+sobrenome);