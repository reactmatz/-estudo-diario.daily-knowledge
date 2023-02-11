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



