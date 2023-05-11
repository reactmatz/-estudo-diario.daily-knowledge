// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa (nome,sobrenome,idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function (){
  return `${this.nome} ${this.sobrenome}`
}

const Matheus = new Pessoa ('Matheus','Nascimento',23);
console.log(Matheus)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)


// Liste os construtores dos dados abaixo
 const li = document.querySelector('li')
console.log(li)

// li; 
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;
