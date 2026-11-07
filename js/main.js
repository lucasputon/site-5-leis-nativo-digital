/**
 * 5 Leis do Nativo Digital — Navegação Minimalista e Foco Dinâmico
 */

document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.getElementById('viewport');
  const sections = Array.from(document.querySelectorAll('.card-section'));
  const menuDots = Array.from(document.querySelectorAll('.menu-dot'));

  let activeIndex = 1;

  function setActiveCard(index) {
    if (index < 1 || index > 5) return;
    activeIndex = index;

    document.body.setAttribute('data-theme', String(index));

    sections.forEach((sec) => {
      const idx = Number(sec.dataset.index);
      sec.classList.toggle('is-focused', idx === index);
    });

    menuDots.forEach((dot) => {
      const idx = Number(dot.dataset.theme);
      dot.classList.toggle('active', idx === index);
    });
  }

  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const idx = Number(target.dataset.index);
    if (idx) setActiveCard(idx);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Detecta qual card está em foco durante a rolagem vertical
  const observer = new IntersectionObserver(
    (entries) => {
      let mostVisible = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        }
      });

      if (mostVisible) {
        const idx = Number(mostVisible.target.dataset.index);
        if (idx && idx !== activeIndex) {
          setActiveCard(idx);
        }
      }
    },
    {
      root: viewport,
      threshold: [0.35, 0.6, 0.8]
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  // Clique nos botões do menu flutuante
  menuDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      scrollToSection(dot.dataset.target);
    });
  });

  // Navegação pelas setas do teclado
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      if (activeIndex < 5) {
        e.preventDefault();
        scrollToSection(`topico-${activeIndex + 1}`);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      if (activeIndex > 1) {
        e.preventDefault();
        scrollToSection(`topico-${activeIndex - 1}`);
      }
    }
  });
});
