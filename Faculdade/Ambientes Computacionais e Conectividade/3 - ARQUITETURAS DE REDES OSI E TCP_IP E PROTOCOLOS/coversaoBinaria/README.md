# Como funciona o endereco IP ?

A conversão entre decimal e binário é um processo importante na computação, pois os computadores usam o sistema binário para representar dados. A representação de um número decimal em binário envolve a divisão sucessiva por 2, até que se obtenha um quociente 0, e a leitura dos restos a partir do último obtido até o primeiro. Para converter de binário para decimal, basta multiplicar cada dígito binário pela potência de 2 correspondente à sua posição, e somar os resultados.

Para números grandes, como um milhão, é necessário usar múltiplos bytes para representar o número em binário. O processo de conversão é o mesmo, mas é importante lembrar do limite máximo de cada byte, que é 255. É possível usar uma tabela, como apresentada no texto, para auxiliar na conversão.

Em resumo, a conversão entre decimal e binário é uma habilidade fundamental na programação e na computação em geral, e é importante compreender o processo para conseguir trabalhar com dados binários e entender o funcionamento interno dos computadores.

Verificar quantos bits são necessários para representar o número decimal: Como um milhão é maior que 65.535, o maior valor que pode ser armazenado em dois bytes, é necessário utilizar pelo menos três bytes para representar o número em binário. Como um byte possui 8 bits, três bytes correspondem a 24 bits.

Multiplicar o valor por 2 até alcançar o número de bits necessário: Para representar um número em binário, é necessário determinar os valores de cada bit, começando pelo bit mais significativo (mais à esquerda) até o bit menos significativo (mais à direita). Como o número decimal 1.000.000 deve ser representado em 24 bits, devemos multiplicá-lo por 2 até obter um valor que corresponda a 24 bits. Assim, temos:

1.000.000 * 2^1 = 2.000.000 (21 bits)

2.000.000 * 2^1 = 4.000.000 (22 bits)

4.000.000 * 2^1 = 8.000.000 (23 bits)

8.000.000 * 2^1 = 16.000.000 (24 bits)

Note que o valor foi multiplicado por 2 quatro vezes, pois a conversão deve ser feita em 24 bits.

Determinar o valor de cada bit: Agora que temos o valor em binário que corresponde a 24 bits, podemos determinar o valor de cada bit. Para isso, dividimos o valor obtido pela potência de 2 correspondente à posição do bit. Começamos pela posição mais à esquerda (24) e vamos até a posição mais à direita (1). Se o resultado da divisão for um número inteiro, o bit correspondente é igual a 1; caso contrário, é igual a 0. Assim, temos:

Bit 24: 16.000.000 / 2^24 = 0 (resto 16.000.000)

Bit 23: 16.000.000 / 2^23 = 1 (resto 0)

Bit 22: 16.000.000 / 2^22 = 0 (resto 16.000.000)

Bit 21: 16.000.000 / 2^21 = 0 (resto 16.000.000)

...

Bit 3: 16.000.000 / 2^3 = 0 (resto 2.000.000)

Bit 2: 2.000.000 / 2^2 = 0 (resto 2.000.000)

Bit 1: 2.000.000 / 2^1 = 1 (resto 0)

Dessa forma, temos que o número decimal 1.000.000 é igual ao número binário 00001111 01000010 01000000, como mencionado no texto.
