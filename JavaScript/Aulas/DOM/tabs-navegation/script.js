// Selecione todos os botões de guia
const tabBtns = document.querySelectorAll('.tab-btn');

// Selecione todos os conteúdos de guia
const tabContents = document.querySelectorAll('.tab-content');

// Adicione um manipulador de evento de clique a cada botão de guia
tabBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    // Remova a classe 'active' de todos os botões de guia
    tabBtns.forEach(function(btn) {
      btn.classList.remove('active');
    });
    // Adicione a classe 'active' ao botão de guia clicado
    e.target.classList.add('active');
    
    // Esconda todos os conteúdos de guia
    tabContents.forEach(function(tab) {
      tab.style.display = 'none';
    });
    // Mostre o conteúdo da guia correspondente ao botão clicado
    document.getElementById(e.target.id.replace('btn', '')).style.display = 'block';
  });
});

// Defina o primeiro botão de guia como ativo
tabBtns[0].classList.add('active');

// Mostre o conteúdo da primeira guia
tabContents[0].style.display = 'block';
