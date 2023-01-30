function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

var person1 = new Person("John");
person1.sayHello(); // output: "Hello, my name is John"


///MAIS UM EXEMPLO

function Circle(radius) {
  this.radius = radius;
}

// Adicionar uma propriedade ao prototype
Circle.prototype.diameter = function() {
  return this.radius * 2;
};

// Adicionar um método ao prototype
Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};

var circle1 = new Circle(5);
console.log(circle1.diameter()); // output: 10
console.log(circle1.area()); // output: 78.53981633974483

// Adicionar uma propriedade a um objeto já existente
circle1.color = "red";
console.log(circle1.color); // output: "red"

/* -------------------------------------------- */ 

// Adicionar um método a um objeto já existente
var array1 = [1, 2, 3];
array1.sum = function() {
  return this.reduce(function(a, b) { return a + b; });
};
console.log(array1.sum()); // output: 6

/* -------------------------------------------- */ 

// Sobrescrever uma propriedade do prototype
function Person(name) {
  this.name = name;
}

Person.prototype.greeting = "Hello";

var person1 = new Person("John");
console.log(person1.greeting); // output: "Hello"

person1.greeting = "Hi";
console.log(person1.greeting); // output: "Hi"

delete person1.greeting;
console.log(person1.greeting); // output: "Hello"

