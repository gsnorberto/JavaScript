// function digitou(){
//     alert("você digitou");
// }

// 
// function digitou2(e){
//     console.log(e);
// }

// Se o usuário digitar a tecla enter "13"
function digitou3(e){
    if(e.keyCode == 13){
        let texto = document.getElementById("campo").value //Pegar o valor do campo input

        console.log(texto);
    }
}

