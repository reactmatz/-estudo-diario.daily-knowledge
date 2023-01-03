
## Este desafio do LeetCode e perfeito para voce entender sobre arrays, loops e o operador modulo.


### Desafio: 
Dado um array, rotacione o array para a direita por k passos, onde k é não-negativo.

Exemplo 1:

Entrada: nums = [1,2,3,4,5,6,7], k = 3

Saída: [5,6,7,1,2,3,4] (_*_Este e o resultado que voce precisa entregar_*_)

Explicação:

rotacione 1 passo para a direita: [7,1,2,3,4,5,6]

rotacione 2 passos para a direita: [6,7,1,2,3,4,5]

rotacione 3 passos para a direita: [5,6,7,1,2,3,4]

Exemplo 2:

Entrada: nums = [-1,-100,3,99], k = 2

Saída: [3,99,-1,-100]

Explicação:

rotacione 1 passo para a direita: [99,-1,-100,3]

rotacione 2 passos para a direita: [3,99,-1,-100]

Restrições:

1 <= nums.length <= 105

-231 <= nums[i] <= 231 - 1

0 <= k <= 105

### Agora antes de ver a reposta, tente resolver usando loop, modulo e uma array vazia.

#### Dicas: 
*1. use a imaginacao para resolver este problema, sabe aquelas roletas em sites de apostas ? imagine que voce esta manipulando com sua mao via touch screen o array, e que voce precisa mover 3 casas para a direita, oque iria acontecer ?*

*2. agora substitua o touch screen por um metodo que percorre o array, voce sabe qual, e se nao souber, e so dar um google.*

*3. agora pense bem na logica de como funciona o modulo, e pense em quantas casas o seu index [i] precisar percorrer.

*4. tente incansavelmente fazer com que o output seja [5,6,7,1,2,3,4]. utilizando estas dicas que eu te dei, eu nao espero que voce consiga resolver de primeira, eu tambem nao consegui, mas so de te fazer queimar alguns neuronios tentando resolver ja vale a pena*

### RESOLUCAO
![App Screenshot](https://uploaddeimagens.com.br/images/004/282/192/original/rotate.png?1672706053) 




