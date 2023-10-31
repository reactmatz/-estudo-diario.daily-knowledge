// tudo e objeto

var menu = {
  class: '.principal',
  ativar() {
    let ativo = document.querySelector(this.class.toUpperCase);
    console.log(ativo);
  },
};
menu.ativar();
