# Fundamentos

A lógica de programação é a base para o desenvolvimento de programas de computador. Ela é um conjunto de técnicas que ajudam a organizar ideias e informações de forma lógica e estruturada, permitindo que sejam transformadas em algoritmos, ou seja, sequências de instruções que são executadas passo a passo para resolver um problema ou realizar uma tarefa específica.

Os fundamentos da lógica de programação incluem:

Variáveis: são espaços de memória que armazenam dados que serão utilizados pelo programa.

Tipos de dados: são os diferentes tipos de informações que podem ser armazenados em variáveis, como números, textos, booleanos, entre outros.

Operadores: são símbolos que indicam as operações a serem realizadas com os dados, como soma, subtração, multiplicação, divisão, entre outros.

Estruturas de controle: são as técnicas utilizadas para controlar a sequência de execução das instruções, como os comandos condicionais (if/else) e de repetição (for, while, do-while).

Funções: são blocos de código que realizam uma tarefa específica e podem ser chamados em diferentes partes do programa, evitando a repetição de código e tornando o programa mais modular.

Algoritmos: são sequências de instruções que resolvem um problema ou realizam uma tarefa específica de forma sistemática e organizada.

Dominar esses fundamentos é essencial para a programação eficiente e eficaz, independentemente da linguagem de programação utilizada.

# Algoritmos sempre sera uma receita de bolo para resolver um problema...

*voce so precisa pensar de forma logica e escrever o passo a passo*

Um exemplo de problema lógico seria o seguinte:

Um restaurante deseja calcular o total a ser pago pelos seus clientes, levando em consideração o preço de cada item do cardápio, a quantidade de cada item que foi pedido e a taxa de serviço de 10%. Como solucionar esse problema?

A solução seria escrever um algoritmo que calcula o total a ser pago. Para isso, seria necessário seguir os seguintes passos:

Definir as variáveis necessárias, como preço de cada item, quantidade de cada item e taxa de serviço.
Pedir ao usuário que informe a quantidade de cada item que foi pedido.
Calcular o preço total de cada item, multiplicando o preço pela quantidade.
Somar o preço total de todos os itens.
Calcular a taxa de serviço, multiplicando o preço total por 10%.
Somar o preço total e a taxa de serviço para obter o preço final a ser pago.
Exibir o preço final para o usuário.

``` // Definir os preços de cada item
const precoHamburguer = 15.0;
const precoBatataFrita = 10.0;
const precoBebida = 5.0;

// Pedir ao usuário que informe a quantidade de cada item que foi pedido
const quantidadeHamburguer = parseFloat(prompt("Informe a quantidade de hambúrgueres:"));
const quantidadeBatataFrita = parseFloat(prompt("Informe a quantidade de batatas fritas:"));
const quantidadeBebida = parseFloat(prompt("Informe a quantidade de bebidas:"));

// Calcular o preço total de cada item, multiplicando o preço pela quantidade
const precoTotalHamburguer = precoHamburguer * quantidadeHamburguer;
const precoTotalBatataFrita = precoBatataFrita * quantidadeBatataFrita;
const precoTotalBebida = precoBebida * quantidadeBebida;

// Somar o preço total de todos os itens
const precoTotal = precoTotalHamburguer + precoTotalBatataFrita + precoTotalBebida;

// Calcular a taxa de serviço, multiplicando o preço total por 10%
const taxaServico = precoTotal * 0.1;

// Somar o preço total e a taxa de serviço para obter o preço final a ser pago
const precoFinal = precoTotal + taxaServico;

// Exibir o preço final para o usuário
alert(`O preço final a ser pago é R$ ${precoFinal.toFixed(2)}.`);
```
