//Query selector é mais generalista que os exemplos anteriores, e faz basicamente a mesma fução
document.querySelector('#exemplo')

// A função acima é o mesmo que:
document.getElementById('exemplo')

//QuerySelector retorna sempre apenas a primeira lista da classe especificada. Não é como o "getElementsByClassName" que retorna todas as listas de uma classe específica
document.querySelector('.lista')
//seleciona todas as listas de classe
document.querySelectorAll('.lista')

//seleciona pela tag
document.querySelector('button').innerHTML = "Inscreva-se"

