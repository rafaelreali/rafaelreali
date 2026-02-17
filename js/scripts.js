window.addEventListener("DOMContentLoaded", () => {
  
  if (window.lucide) {
    lucide.createIcons();
  }

  
  let lastScrollTop = 0;
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      nav.style.top = "-100px"; 
    } else {
      nav.style.top = "10px";   
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

 
  const habilidades = document.querySelectorAll('.habilidade');
  const descricaoBox = document.getElementById("descricao-habilidade");
  const textoPadrao = "Passe o mouse sobre um ícone para ver a descrição.";

  habilidades.forEach(element => {
    element.addEventListener('mouseout', () => {
      descricaoBox.innerText = textoPadrao;
    });
  });
});


function mostrarDescricao(texto) {
  const descricao = document.getElementById("descricao-habilidade");
  descricao.innerText = texto;
}