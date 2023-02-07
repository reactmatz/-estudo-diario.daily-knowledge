// descontructuring

// dado um objeto
const user = {
  name:'matheus',
  idade:23,
  nickname: 'gordola',
  address:{
    street:'rua de tal',
    number:253
  }
}

// const address = user.address


const { address, idade: age, nickname = 'mathias'} = user

// veja que renomei a variavel idade para 'age' apenas usando ':' apos a variavel, igual setar valor dentro do objeto.

// podemos observar tambem que podemos criar uma variavel nova dentro da desestruturacao e adicionar um valor default a ela, no caso adicionei 'mathias', mas ao criar a variavel dentro do objeto, o valor mathias deixa de existir e o valor original ocupa o espaco.

//sintaxe de array continua a mesma, voce pode desestruturar arrays tambem.
const num = [1,2,3,4,5,6,7]
const [first, second] = num
console.log(first, second)

function sum (num){
  let [first, second] = num;
  let result = (first + second) * 2;
  console.log(result);
  return result;
}
sum(num);


// console.log(address, age, nickname)

// a desestruturacao pode ser usada em toda qualquer forma onde se tem chamada de objetos, seja dentro de variaveis, parametros de funcoes,parametros de construtores, metodos de classes, tudo isso engloba a desestruturacao, e tambem e amplamente usada em react.

function mostrarIdade ({idade}){
  return idade;
}

// rest operator
// --- e se voce quiser o resto dos objetos que sobrou quando voce desestruturou 'name' por ex ? existe algum jeito de pegar o resto que sobrou ? sim, com o rest operator:

const {name, ...rest} = user

// console.log(rest)

