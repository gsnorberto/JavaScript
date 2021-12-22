
let num = [1,2,3,4]
let num2 = [...num, 5,6,7,8]
console.log(num2);

let info = {
    nome: 'Gabriel',
    sobrenome: 'Norberto'
}
let info2 = {
    ...info,
    idade: 23
}
console.log(info2);

