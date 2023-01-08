# Como funciona uma promise?

Uma promise é uma representação de um valor que pode estar disponível agora, no futuro ou nunca. Ela é usada para lidar com operações assíncronas de forma mais fácil e legível.

Uma promise é criada passando uma função para o construtor Promise, que recebe dois argumentos: resolve e reject. A função é executada assim que a promise é criada e pode chamar resolve quando a operação é bem-sucedida ou reject quando a operação falha.

Aqui está um exemplo de uma promise que busca dados de uma API:

![App Screenshot](https://uploaddeimagens.com.br/images/004/288/912/original/code.png?1673221285)

Para usar a promise, você pode chamar o método then na promise e passar as funções de retorno de chamada de sucesso e falha:

![App Screenshot](https://uploaddeimagens.com.br/images/004/288/917/original/code2.png?1673221578)

O método then retorna uma nova promise, permitindo que você encadeie várias chamadas de then e adicione manipuladores de erro em qualquer ponto da cadeia.

Em resumo, as promises são uma forma de lidar com operações assíncronas de forma mais fácil e legível e são amplamente usadas em aplicativos da web modernos.

