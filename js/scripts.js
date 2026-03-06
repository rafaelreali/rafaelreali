document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Inicializa os ícones Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Lógica da Navbar Inteligente
  let lastScrollTop = 0;
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Esconde ao descer, mostra ao subir
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // 3. Sistema Dinâmico de Descrição das Habilidades
  const habilidades = document.querySelectorAll('.habilidade');
  const textoDescricao = document.getElementById("texto-descricao");
  const textoPadrao = "Passe o mouse sobre um ícone para ver a descrição.";

  habilidades.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Pega o texto do atributo data-desc do HTML
      const descricao = this.getAttribute('data-desc');
      
      // Efeito de transição suave
      textoDescricao.style.opacity = '0';
      setTimeout(() => {
        textoDescricao.innerText = descricao;
        textoDescricao.style.opacity = '1';
      }, 150);
    });

    card.addEventListener('mouseleave', () => {
      textoDescricao.style.opacity = '0';
      setTimeout(() => {
        textoDescricao.innerText = textoPadrao;
        textoDescricao.style.opacity = '1';
      }, 150);
    });
  });

  // 4. Reveal Animations no Scroll (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    threshold: 0.15, // Aciona quando 15% do elemento estiver visível
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Para a animação depois que carrega a 1ª vez
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });
});