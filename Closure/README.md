O que é uma closure?

Uma closure é uma função que se lembra de seu ambiente léxico, mesmo quando a função é executada fora desse ambiente. Em outras palavras, uma closure é uma função que tem acesso às variáveis do escopo em que ela foi criada, mesmo se essa função é chamada em um escopo diferente.

Aqui está um exemplo de uma closure:

![App Screenshot](https://uploaddeimagens.com.br/images/004/288/983/original/code3.png?1673228284)

No exemplo acima, a função createCounter cria uma closure chamada counter que tem acesso à variável count, mesmo quando a função é chamada fora do escopo da função createCounter. Isso permite que a closure mantenha o estado da contagem entre chamadas.

As closures são uma ferramenta poderosa em JavaScript e são amplamente usadas em aplicativos da web modernos. Elas permitem criar funções que podem ser chamadas mais tarde e ainda ter acesso ao escopo em que foram criadas, o que é útil para manter o estado entre chamadas e esconder variáveis ​​de outras partes do código.
