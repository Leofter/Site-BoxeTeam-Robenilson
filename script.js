// Atualiza o ano automaticamente no rodapé
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Scroll suave para links internos (Home)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    event.preventDefault();
    const headerOffset = 72;
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// Animação de aparição lenta da imagem topo e textos com IntersectionObserver
const heroContainer = document.querySelector('.hero-image-container');
const heroText = document.querySelector('.hero-text');

if ('IntersectionObserver' in window && heroContainer && heroText) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroContainer.classList.add('visible');
          heroText.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  observer.observe(heroContainer);
} else if (heroContainer && heroText) {
  // Fallback simples caso o navegador não suporte IntersectionObserver
  heroContainer.classList.add('visible');
  heroText.classList.add('visible');
}

