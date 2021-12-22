let telefone = '739'

//O primeiro parâmetro significa quantos itens são obrigatórios ter dentro da variável "telefone". O segundo parâmetro é o caractere que preenche o espaço caso a quantidade de itens não seja o solicitado.
console.log(telefone.padEnd(9, '*')); //739******

//Preenche no início em vez do fim
console.log(telefone.padStart(9, '*')); //******739

let cartaoCredito = '1234123412341234';
let lastDigits = cartaoCredito.slice(-4);
let cartaoMascarado = lastDigits.padStart(16, '*');

console.log('Esse é o seu cartão? ' +cartaoMascarado);