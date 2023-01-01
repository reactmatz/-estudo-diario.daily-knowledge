// Criando uma função construtora para representar uma pessoa
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adicionando um método ao prototype da função construtora
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
};

// Criando dois objetos a partir da função construtora
const person1 = new Person('John', 30);
const person2 = new Person('Alice', 25);

// Chamando o método sayHello de cada objeto
person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old"
person2.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old"

// Criando uma função construtora para representar uma conta bancária
function BankAccount(balance) {
  this.balance = balance;
}

// Adicionando métodos para depositar e retirar dinheiro da conta
BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
};

// Criando um objeto a partir da função construtora
const account = new BankAccount(1000);

// Realizando operações na conta
account.deposit(500);
console.log(account.balance); // Output: 1500
account.withdraw(200);
console.log(account.balance); // Output: 1300

