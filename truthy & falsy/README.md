# falsy e truthy 

Em JavaScript, alguns valores são considerados "falsy" e outros são considerados "truthy". Os valores falsy são aqueles que se comportam como falso quando usados em uma expressão booleana. Os valores truthy são aqueles que se comportam como verdadeiros quando usados em uma expressão booleana.

Os valores falsy são:

false
0 (zero)
"" (string vazia)
null
undefined
NaN
Todos os outros valores são considerados truthy. Por exemplo:

true
1
"hello"
{} (objeto vazio)
[] (array vazio)
Isso significa que, por exemplo, se você usar um valor falsy em uma expressão if, a expressão será avaliada como falsa, enquanto se você usar um valor truthy, a expressão será avaliada como verdadeira.

<ing src = "img/tru.png" width = "600px">

Além disso, é possível usar a função Boolean() para verificar se um valor é truthy ou falsy:


<ing src = "img/boo.png" width = "600px">

