// Rretorna no console todas as imagens do site

const imagensAll = document.querySelectorAll('img');

//Retorne no console apenas as imagens que comecam com a palavra imagem

const imgSelect = document.querySelectorAll('img[src^="img/imagem"]')

// selecione todos os links internos do site(os que coemcam com hash)

const linksInternos = document.querySelectorAll('[href^="#"]')


// Selecione o primeiro h2 dentro de animais-descricao

const subTitle = document.querySelector('.animais-descricao h2');

// Selectione o ultimo p do site

const ultimoSeletor = document.querySelectorAll('p')

console.log(ultimoSeletor[-- ultimoSeletor.length ])

