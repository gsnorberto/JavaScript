let carro = {
    nome: 'Uno',
    tipo: 'Fiat',
    peso: '800kg',
    ligar: function(){
        console.log("Ligando o: " + this.nome)
        console.log("Vrumm!!")
    }
}

console.log( carro.nome )

carro.ligar()