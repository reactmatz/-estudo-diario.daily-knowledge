// arrow function

//tradicional
function toUpperCase(nome) {
  return nome.toUpperCase();
}

console.log(toUpperCase('teste'));

// em forma de expressao
const caixaAlta = function(nome){
  return nome.toUpperCase();
}

// arrow function
const myArrowCase = (nome)=>{
  return nome.toUpperCase();
}
// ou 

const arrowSimplify = nome => nome.toUpperCase();


