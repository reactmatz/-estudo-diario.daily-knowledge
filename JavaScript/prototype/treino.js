
// usando constructor function para criar um obj
function Person(name1,age){
  this.name = name1
  this.age = age
}

const matheus = new Person('matheus',23)
console.log(matheus)

Person.prototype.cor = function (){ 
  return 'branco caramelo'
}

console.log(Person.prototype.cor())

// ---------------------------------  // fev 14/02 >

// Definindo o objeto 'Pessoa' com constructor func
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Adicionando um método ao 'prototype' de Pessoa
Pessoa.prototype.apresentar = function() {
  console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
};

// Criando um novo objeto 'Funcionario' que herda de 'Pessoa'
function Funcionario(nome, idade, cargo) {
  Pessoa.call(this, nome, idade);
  this.cargo = cargo;
}

// Herdando o 'prototype' de 'Pessoa' em 'Funcionario'
Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

// Adicionando um método ao 'prototype' de Funcionario
Funcionario.prototype.trabalhar = function() {
  console.log("Eu sou um " + this.cargo + " e estou trabalhando agora.");
};

// Criando uma nova instância de Funcionario
var joao = new Funcionario("João", 30, "Desenvolvedor");

// Chamando métodos da instância de Funcionario
joao.apresentar(); // Saída: "Olá, meu nome é João e eu tenho 30 anos."
joao.trabalhar(); // Saída: "Eu sou um Desenvolvedor e estou trabalhando agora."




