//numeros
var idade = 24;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

// OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//OPERADORES ARITMÉTICOS (STRINGS)
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// NAN = NOT A NUMBER
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

//A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// OPERADORES ARITMÉTICOS UNÁRIOS

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

//Um valor booleano pode ser convertido para um número. Quando você tenta converter um valor booleano para número usando o operador unário +, true é convertido para 1 e false é convertido para 0.

var possuiFaculdade = true;
console.log(+possuiFaculdade); // Saída: 1

possuiFaculdade = false;
console.log(+possuiFaculdade); // Saída: 0


// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

//Para avaliar a expressão var total = 10 + 5 * 2 / 2 + 20, você deve seguir a ordem correta das operações matemáticas, que é conhecida como regra PEMDAS:

// 1.(P)arênteses
// 2.(E)xponenciação (potência)
// 3.(M)ultiplicação e (D)ivisão (da esquerda para a direita)
// 4.(A)dição e (S)ubtração (da esquerda para a direita)
// Neste caso, não há parênteses ou exponenciação, então começamos com multiplicação e divisão, que são executadas da esquerda para a direita:

