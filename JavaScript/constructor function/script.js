function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

let pessoa1 = new Pessoa("João", 30);
let pessoa2 = new Pessoa("Maria", 25);


/////

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.apresentar = function(){
    console.log(`Olá, eu sou ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

let pessoa1 = new Pessoa("João", 30);
pessoa1.apresentar(); // Olá, eu sou João e eu tenho 30 anos.

