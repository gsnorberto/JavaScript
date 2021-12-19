//Exibir hora atual na tela
let timer;

function startTimer(){
    if(!timer){
        timer = setInterval(showTime, 1000);
    } else{
        alert("Hora já está em execução")
    }
}

function stopTimer(){
    if(timer){
        clearInterval(timer);
        timer = null;
    } else{
        alert("Hora já está parada")
    }
}

function showTime(){
    let data = new Date();

    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    let txt = hora+':'+minuto+':'+segundo;

    document.querySelector('#horaAtual').innerHTML = txt;
}


