let data = new Date();

console.log(data); //Sun Dec 19 2021 09:15:45 GMT-0300 (Hora padrão de Brasília)
console.log(data.toDateString()); // Sun Dec 19 2021
console.log(data.toUTCString()); // Hora padrão, sem fuso horário
console.log(data.toString()); //Sun Dec 19 2021 09:18:38 GMT-0300 (Hora padrão de Brasília)

// OBS: O MÊS COMEÇA DO 0 E VAI ATÉ O 11
let data2 = new Date(2020, 0, 1, 12, 30, 12)
console.log(data2); // Wed Jan 01 2020 12:30:12 GMT-0300 (Hora padrão de Brasília)

let data3 = new Date('2020-01-01 15:42:17')
console.log(data3); //Wed Jan 01 2020 15:42:17 GMT-0300 (Hora padrão de Brasília)

console.log("-----------------------------------------------------------");

let data4 = new Date();

let dia = data4.getDate(); 
console.log(dia);

let mes = data4.getMonth(); //Mês (de 0 a 11)
console.log(mes);

let ano = data4.getFullYear();
console.log(ano);

let diaDaSemana = data4.getDay(); //Dia da semana (de 0 a 6)
console.log(diaDaSemana);

let horas = data4.getHours(); //getMinutes, getSeconds, getMilliseconds
console.log(horas);

console.log("-------------------MANIPULAÇÃO DA DATA---------------------");
console.log("-----------------------------------------------------------");

let data5 = new Date();

// data5.setFullYear(2022); //Altera o ano
// data5.setMonth(11); //Altera mês
// data5.setDate(15); //Altera o dia

data5.setDate( data5.getDate() + 90 ) //Dia atual mais "3 meses" (90 dias)
data5.setHours( data5.getHours() + 24 ) // Hora atual + 24 horas

let novoValor = data5;
console.log( novoValor );