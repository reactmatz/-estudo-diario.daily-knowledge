function Carro(marca, price){
  this.marca = marca;
  this.price = price;
  
  this.formatPrice = function(){
    return "R$" + this.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  this.price = this.formatPrice();
}

const honda = new Carro("lambo", 23344);
console.log(honda);

function Casa(name, price){
  const taxa = 1.14;
  const finalPrice = price * taxa;
  this.name = name;
  this.price = finalPrice;
  this.formatPrice = function(){
    return "R$" + this.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  this.price = this.formatPrice();
}

const myHouse = new Casa('Casa Praia', 100000);
console.log(myHouse);
