// const meuNodeList = document.querySelectorAll('li');
// console.log(meuNodeList)

// const transArray = Array.from(meuNodeList);

// console.log(transArray.length);

// const obj = {
//   0: 'one',
//   1: 'two',
//   3: 'three',
//   length: 2,
// }

// const objToArray = Array.from(obj);

// console.log(objToArray);

// const arrayOf = Array.of(1,2,3,4,5);
// console.log(arrayOf);

//metodos de adiocionar coisas no array -->

// [].unshift() adiciona itens no inicios do array de acordo com oque passa nos argumentos, nao retorna um novo array, apenas modifica o existente, se usar a propriedade length em cima do unshift ira retornar o novo tamanho associado. ex:

const arrayNovo = ['terra','ar','fogo','agua'];
arrayNovo.unshift('plasma','nitro');

// [].push() adiciona itens no final do array de acordo com oque passa nos argumentos, nao retorna um novo array, apenas modifica o existente, se usar a propriedade length em cima do unshift ira retornar o novo tamanho associado.

const contratos = ['papel','impressoras','brands','bones'];
contratos.push('meias','camisas');
console.log(contratos);

// metodos de remover coisas no array -->

// [].shift() remove do primeiro elemento do array e retornar o mesmo

// [].pop() remove o ultimo elemento do array e retorna o mesmo

