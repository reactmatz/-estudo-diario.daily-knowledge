import React from 'react';

const App = () => {
  const tipo = 'amargo';
  function mostrarNome() {
    return 'abacaxi ' + tipo;
  }
  const ativo = true;
  const carro = {
    marca: 'Ford',
    rodas: 4,
  };
  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  }
  return (
    <>
      <p>{mostrarNome()}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p style={estiloP}className={ativo ? 'ativo' : 'inativo'}>TESTE</p>
    </>
  );
};

export default App;
