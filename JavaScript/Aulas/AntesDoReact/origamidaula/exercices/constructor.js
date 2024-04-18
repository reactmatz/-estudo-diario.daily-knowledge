function Carro(marca, ano) {
  this.marca = marca;
  this.ano = ano;
}

let novoCarro = new Carro('wolks', 2006);
console.log(novoCarro);

const elementosMenu = document.querySelectorAll('.menu');

elementosMenu.forEach((elemento) => {
  elemento.classList.add('ativo');
});

// Constructor function para criar objetos Pessoa
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.cumprimentar = () => {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  };
}

// Criando uma nova instância da Pessoa
var pessoa1 = new Pessoa('João', 30);

// Chamando o método cumprimentar da instância criada
pessoa1.cumprimentar(); // Saída: Olá, meu nome é João e eu tenho 30 anos.

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.elements.forEach((item) => {
    item.classList.add('teste');
  });
}

const elemento = new Dom('li');
console.log(elemento);
