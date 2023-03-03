
// for (const i of array){
//   document.body.innerText += i;
// }

// O método map() é um dos métodos de array em JavaScript, e ele retorna um novo array com os resultados da aplicação de uma função em cada elemento do array original. Aqui está um exemplo básico que demonstra como o método map() funciona:

array.map(item => {
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map(function(number) {
    return number * 2;
  });
  
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
})

// Nesse exemplo, estamos criando um novo array doubledNumbers que é o resultado da aplicação da função passada como argumento para o método map() em cada elemento do array numbers. A função multiplica cada número por 2, então o resultado é um novo array com todos os números duplicados.

// A função passada como argumento para o método map() recebe três parâmetros: o valor do elemento atual, o índice do elemento atual e o array original. No exemplo acima, estamos usando apenas o valor do elemento atual, que é representado pela variável number.

// O método map() não altera o array original. Ele cria um novo array com os resultados da aplicação da função em cada elemento do array original. Se a função retornar um valor undefined, o elemento correspondente no novo array será undefined.

// Espero que isso ajude a entender como o método map() funciona em JavaScript!

