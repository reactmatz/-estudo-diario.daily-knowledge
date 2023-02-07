// const fetchData = new Promise((resolve, reject) => {
//   fetch('https://my-api.com/endpoint')
//     .then(response => response.json())
//     .then(data => resolve(data))
//     .catch(error => reject(error));
// });

// fetchData
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// const ligarCarro = new Promise((resolve,reject)=>{
//   const chaveNaMao = true;
//   if(chaveNaMao === true){
//     resolve('pronto para partir');
//   }
//     else{
//       console.log('va pegar a chave')
//     }
// });
// ligarCarro
// .then(chaveNaMao => console.log(chaveNaMao));
// .catch(chaveNaMao => console.log(chaveNaMao));

const ligarCarro = new Promise((resolve, reject) => {
  const chaveNaMao = false;
  if (chaveNaMao === true) {
    resolve('pronto para partir');
  } else {
    reject('Vá pegar a chave');
  }
});

ligarCarro
  .then(chaveNaMao => console.log(chaveNaMao))
  .catch(esqueceuChave => console.error(esqueceuChave));







