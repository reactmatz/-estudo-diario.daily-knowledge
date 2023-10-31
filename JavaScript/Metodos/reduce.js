// digamos que temos um array que desejamos fazer uma iteracao e retornar apenas um valor deste array, pode ser a soma por exemplo, utilizaremos o metodo de array reduce() para fazer isto.



const array = [1,2,3,4,5];

const result = array.reduce((acumulator,currentValue)=>{
  return acumulator + currentValue},0);

console.log(result);

