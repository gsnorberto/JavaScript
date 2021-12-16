function azul(){
   limpar();
   document.getElementById("titulo").classList.add('azul');
}

function vermelho(){
    limpar();
    document.getElementById('titulo').classList.add('vermelho');
}

function verde(){
    limpar();
    document.getElementById('titulo').classList.add('verde');
}

function limpar(){
    document.querySelector("#titulo").classList.remove("azul");
    document.querySelector("#titulo").classList.remove("vermelho");
    document.querySelector("#titulo").classList.remove("verde");
}

function mostrarTel(){
    document.querySelector("#telefone").style.display = "block";
}
function ocultarTel(){
    document.querySelector("#telefone").style.display = "none";
}