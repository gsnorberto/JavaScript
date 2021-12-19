// let texto = ''

// for(let i=0; i<50; i++){
//     texto = texto + i + " ";
// }

// console.log(texto);


let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla'];

let html = '<ul>';

for(let i in carros){
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>'

console.log(html);

document.getElementById('demo').innerHTML = html;