// Os módulos ES (abreviação de ECMAScript modules) é uma forma padronizada de organizar e compartilhar código em JavaScript. Ele permite que os desenvolvedores definam seus próprios módulos, que podem ser importados e usados por outros módulos no mesmo ou em diferentes projetos.

// Em módulos ES, cada arquivo é tratado como um módulo separado, com seu próprio escopo e conjunto de variáveis. As declarações import e export são usadas para controlar a visibilidade de funções, classes e outros objetos entre módulos.

// Aqui está um exemplo de como definir e usar um módulo em JavaScript:

// module.js

export function soma(a, b) {
  return a + b;
}

export const PI = 3.14159;

// main.js

import { soma, PI } from './module.js';

console.log(soma(2, 3)); // Output: 5
console.log(PI); // Output: 3.14159


// Neste exemplo, o arquivo module.js define duas exportações: a função soma e a constante PI. O arquivo main.js importa essas exportações usando a declaração import e as usa para imprimir a soma de 2 e 3 e o valor de PI no console.