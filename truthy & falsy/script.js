// Escreva uma função chamada isTruthy que recebe um parâmetro e retorna "truthy" se o parâmetro for truthy e "falsy" se o parâmetro for falsy. 

const isTruthy = (truthy) => {
  return truthy? "truthy" : "falsy";
}

// Escreva uma função chamada doubleValue que recebe um parâmetro e retorna o dobro desse parâmetro, mas somente se o parâmetro for truthy. Se o parâmetro for falsy, a função deve retornar 0.

const doubleValue = (truthy) => {
  return truthy? truthy * 2 : 0;
}

// Escreva uma função chamada isAllTruthy que recebe vários parâmetros e retorna true se todos os parâmetros forem truthy, e false caso contrário. Por exemplo:

// console.log(isAllTruthy(1, "hello", [], {})); // true
// console.log(isAllTruthy(1, "hello", [], {} , null)); // false
// console.log(isAllTruthy(1, "hello", [], {} , "")); // false


const isAllTruthy = (...args) => {
  return args.every((arg) => isTruthy(arg));
}
console.log(isAllTruthy(1, "hello", [], {})); // true

//// metodo para verificar se pelo menos um parametro e truthy

const hasOneTruthy = (...args) => {
  return args.some((arg) => isTruthy(arg));
}
console.log(hasOneTruthy(0,"",null)); // false
console.log(hasOneTruthy(0,"","hello")); //true