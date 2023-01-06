function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

var person1 = new Person("John");
person1.sayHello(); // output: "Hello, my name is John"


///MAIS UM EXEMPLO

