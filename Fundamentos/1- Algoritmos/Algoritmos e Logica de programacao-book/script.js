function problemaCanetas(N, Y, Z) {
  if (N > 0 && Y > 0 && Z > Y) {
    let resultado = (Z - Y) / N;
    console.log(resultado);
  } else {
    console.log("Erro: valores inconsistentes!");
  }
}
// Para acessar so usar:
problemaCanetas(3, 5, 10);