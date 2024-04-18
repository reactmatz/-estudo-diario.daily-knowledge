const produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Calça', preco: 30 },
    { nome: 'Tênis', preco: 50 }
  ];
  
  // Função de callback tradicional
  function extrairPrecos(produto) {
    return produto.preco;
  }
  
//   =================================================== //
  // com arrow function no callback usando metodo map() 
  const produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Calça', preco: 30 },
    { nome: 'Tênis', preco: 50 }
  ];
  
  const precos = produtos.map(produto => produto.preco);
  const precoTotal = precos.reduce((total, preco) => total + preco, 0);
  console.log('Preço total usando map():', precoTotal);
//   ======================================================== //
  // for e map, com sintaxe simples sem arrow function no callback  
  const produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Calça', preco: 30 },
    { nome: 'Tênis', preco: 50 }
  ];
  
  const precos = produtos.map(function extrairPrecos(produto) {
    return produto.preco;
  });
  
  // Calculando o preço total usando um loop for
  let precoTotal = 0;
  for (let i = 0; i < precos.length; i++) {
    precoTotal += precos[i];
  }
  
  console.log('Preço total usando map() e função de callback tradicional:', precoTotal);

//   ============================================================ //
  // usando somente for para resolver o problema 

  const produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Calça', preco: 30 },
    { nome: 'Tênis', preco: 50 }
  ];
  
  let precoTotal = 0;
  for (let i = 0; i < produtos.length; i++) {
    precoTotal += produtos[i].preco;
  }
  console.log('Preço total usando for loop:', precoTotal);
  
  
  const produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Calça', preco: 30 },
    { nome: 'Tênis', preco: 50 }
  ];
  
  const precos = produtos.map((item) => item.preco);
  const precoTotal = precos.reduce((total, preco) => total + preco, 0);
  console.log('Preço total usando map():', precoTotal);
  