let html = '';

let c = 0;

while(c < 10){
    html += "Número: "+c+"<br/>";
    c++;
}

console.log(html);

document.getElementById("demo").innerHTML = html;