
//Pega toda a dimensão do objeto, incluindo o padding, margin, border, etc
document.querySelector('.texto').offsetHeight;
document.querySelector('.texto').offsetWidth;

//Pega as dimensões do objeto, não considerando a barra de rolagem e a borda
document.querySelector('.texto').clientHeight;
document.querySelector('.texto').clientWidth;

//Pega as dimensões do objeto, considerando a barra de rolagem
document.querySelector('.texto').scrollHeight;
document.querySelector('.texto').scrollWidth;



function subirTela(){
    //Subir de vez
    window.scrollTo(0, 0);

    //Subir Gradativamente
    // window.scrollTo({
    //     top: o,
    //     behavior: 'smooth'
    // });
}

//Diz qual é a posição do scroll (DO ELEMENTO) na vertical
document.querySelector('.texto').scrollTop;
//Diz qual é a posição do scroll (DO ELEMENTO) na horizontal
document.querySelector('.texto').scrollLeft;

//Diz qual é a posição do scroll (DA PÁGINA) na vertical
window.scrollY
//Diz qual é a posição do scroll (DA PÁGINA) na horizontal
window.scrollX

//Mostra o botão se não estiver no topo da página
function decidirBotaoScroll(){
    if(window.scrollY === 0){
        //ocultar o botão
        document.querySelector('.scrollbutton').style.display = 'none';
    }else{
        //mostrar o botão
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

// SOLUÇÃO NÃO IDEAL - CONSOME RECURSO A CADA SEGUNDO
//Timer para executar a função decidirBotaoScroll
setInterval(decidirBotaoScroll, 1000);

//SOLUÇÃO IDEAL
//Aciona a função toda vez que o scroll for utilizado
window.addEventListener('scroll', decidirBotaoScroll)