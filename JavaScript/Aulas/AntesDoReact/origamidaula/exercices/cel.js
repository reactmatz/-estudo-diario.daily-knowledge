// Escreva um programa que calcula o preço total da compra do seu celular. Você pode continuar comprando telefones (dica: loop!) até você ficar sem dinheiro na sua conta bancária. Você irá também comprar acessórios para cada telefone enquanto sua quantidade de dinheiro for menor do que seu limite mensal.

let precoTotal;
let Cel;
let saldo = 2000;
let acessories;


function comprar(valor1,valor2){
  console.log(`saldo: ${saldo}`)
  precoTotal = valor1 + valor2;
  console.log(`total da compra: ${precoTotal}`);
  if(precoTotal <= saldo){
    let dedut = saldo - precoTotal
    console.log(`saldo atualizado: ${dedut}`)
  }else{
    console.log('saldo insuficiente')
  }
}

comprar(1100,1000);
