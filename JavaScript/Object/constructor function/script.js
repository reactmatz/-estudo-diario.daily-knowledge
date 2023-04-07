// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// let pessoa1 = new Pessoa("João", 30);
// let pessoa2 = new Pessoa("Maria", 25);


// /////

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.apresentar = function(){
//     console.log(`Olá, eu sou ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
// }

// let pessoa1 = new Pessoa("João", 30);
// pessoa1.apresentar(); // Olá, eu sou João e eu tenho 30 anos.


function Carro (modeloCAR,corCAR){
  this.modelo = modeloCAR; 
  this.cor = corCAR;
}

// lembrando que os parametros nao necessitam ter o mesmo nome da propriedade que esta sendo criada na frente do 'this' e apenas uma convencao de sintaxe que as pessoas colocam o mesmo nome, pode ser confuso de inicio, mas se voce mudar o nome dos parametros voce vai ver que funciona do mesmo jeito, como no exemplo abaixo:

const carro1 = new Carro('volks','azul')
const carro2 = new Carro ('porsche','vermelho')

console.log(carro1,carro2)

