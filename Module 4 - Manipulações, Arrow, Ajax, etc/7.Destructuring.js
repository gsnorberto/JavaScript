// ************************************************************************
// *********************** DESTRUCTURIN NO OBJETO *************************
// ************************************************************************

let pessoa = {
    nome: 'Gabriel', 
    sobrenome: 'Norberto',
    idade: 90,
    social:{
        facebook: 'gtech',
        instagram:{
            url: '@gabriel',
            seguidores: 1000
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

// let { nome, sobrenome, idade } = pessoa;
// OU
let { nome: n, sobrenome: s, idade: i } = pessoa;

// VALORES PADRÃO - Idade assume valor 0 se não for definida
// let { nome, sobrenome, idade = 0 } = pessoa;
console.log(n, s, i);


// let { facebook, instagram } = pessoa.social
// let { nome, idade, social:{instagram}} = pessoa;
let { nome, idade, social: {instagram:{ url:instagram, seguidores }}} = pessoa;
console.log( nome, idade, instagram, seguidores );



// ************************************************************************
// ***************** DESTRUCTURIN NO PARÂMETRO DA FUNÇÃO ******************
// ************************************************************************

function pegarNomeCompleto({nome, sobrenome}){
    return `${nome} ${sobrenome}`
}

console.log(pegarNomeCompleto(pessoa));

// ************************************************************************
// ************************ DESTRUCTURIN NO ARRAY *************************
// ************************************************************************

let array = ['Boniecky Lacerda', 'Boniecky', 'Lacerda', '@boniecky'];

let [ nomeCompleto, nome2, sobrenome2, instagram2 ] = array; 
console.log( nomeCompleto, nome2, sobrenome2, instagram2 );

// Pegar apenas nome completo e instagram
let [nomeCompleto3, , , instagram3] = array;
console.log(nomeCompleto3, instagram3);


// Criando uma array já desconstruindo ele
let [nome4, sobrenome4, instagram4] = ['Gabriel', 'Norberto', '@gabriel']
console.log(nome4, sobrenome4, instagram4);


// ************************************************************************
// ************* DESTRUCTURIN COM OBJETO DENTRO DE FUNÇÃO *****************
// ************************************************************************

function criar(){
    let a = [1,2,3];
    return a;
}

let [a,b,c] = criar;
console.log(a,b,c);