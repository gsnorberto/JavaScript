// alert("Olá! Estou funcionando!!!");

//altera no DOCUMENTO o texto da tag com id "titulo"
document.getElementById("titulo").innerHTML = "Opa, beleza!!!"

//Mostrar o conteúdo em uma JANELA, não na página.
// window.alert("Mensagem de exemplo")

//Mostrar o conteúdo em um CONSOLE
console.log("testando...")

//***************************************
//************* Variáveis ***************
//***************************************

var nome = "Gabriel "
var sobrenome = "Silva"
var idade = 90

//Acesso em qualque lugar do sistema
var nome = "Gabriel"

//Fica disponível apenas no escopo específico de código
//A variável não pode ser declarada mais de uma vez
let nome2 = "Paulo"

//Não pode receber novos valores
const nome3 = "Marcus"

if (nome2 = "Paulo"){
    let idadeTotal = 90;
}
console.log(idadeTotal); //vai dar erro

// alert(nome)

var nomecompleto = nome+sobrenome

// alert(nomecompleto)

//***************************************
//*********** Condicionais **************
//***************************************

//  && (e) 
//  \\ (ou) 

var hora = 19;

if(hora < 12 ){
    console.log("Bom dia!!!");
}
else if(hora < 18){
    console.log("Boa tarde!!!");
}
else if (hora < 23) {
    console.log("Boa noite!!!")
}