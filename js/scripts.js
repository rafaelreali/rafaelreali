window.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
  });
  let lastScrollTop = 0;
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
     
      nav.style.top = "-100px";
    } else {
      
      nav.style.top = "10px"; 
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; //
  });




 