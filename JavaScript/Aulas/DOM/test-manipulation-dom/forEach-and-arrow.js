const img = document.querySelectorAll('img');

img.forEach((item) =>{
    console.log(item);
})


// transformando um arraylike em array para poder ter acewsso ao metodo forEach
const imagesArraylike = document.getElementsByClassName('img');

const transToArray = Array.from(imagesArraylike)

// usando o metodo forEach, agora que imagesArraylike deixou de ser HTMLCollecton e passou a ser uma lista estatica 

transToArray.forEach(function (item){
    console.log(item);
})