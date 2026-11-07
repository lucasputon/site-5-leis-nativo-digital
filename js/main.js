/**
 * 5 Leis do Nativo Digital — Navegação Minimalista, Foco Dinâmico e Troca de Idioma (PT / EN)
 */

document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.getElementById('viewport');
  const sections = Array.from(document.querySelectorAll('.card-section'));
  const menuDots = Array.from(document.querySelectorAll('.menu-dot'));
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');
  const langTooltip = document.getElementById('lang-tooltip');
  const langBlocks = Array.from(document.querySelectorAll('.lang-content'));
  const tooltips = Array.from(document.querySelectorAll('.menu-dot .dot-tooltip'));

  let activeIndex = 1;
  let currentLang = 'pt';

  const translations = {
    pt: {
      code: 'PT',
      nextTooltip: 'English (EN)',
      pageTitle: '5 Leis do Nativo Digital',
      brandTitle: '5 Leis do Nativo Digital',
      students: '<strong>Estudantes:</strong> Lucas Puton &amp; Bruno H. Colussi',
      discipline: 'Projeto acadêmico da disciplina de Desafios da Profissão / Prof. Suellen S. Sotille – Semestre 2026/2'
    },
    en: {
      code: 'EN',
      nextTooltip: 'Português (PT)',
      pageTitle: '5 Laws of the Digital Native',
      brandTitle: '5 Laws of the Digital Native',
      students: '<strong>Students:</strong> Lucas Puton &amp; Bruno H. Colussi',
      discipline: 'Academic project for the Profession Challenges course / Prof. Suellen S. Sotille – Semester 2026/2'
    }
  };

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.body.setAttribute('data-lang', lang);
    document.title = translations[lang].pageTitle;

    // Atualiza sigla exibida no botão separado (PT ou EN)
    if (langLabel) langLabel.textContent = translations[lang].code;
    if (langTooltip) langTooltip.textContent = translations[lang].nextTooltip;

    // Alterna blocos de texto dos 5 cards
    langBlocks.forEach((block) => {
      const isMatch = block.dataset.langBlock === lang;
      block.classList.toggle('hidden-lang', !isMatch);
    });

    // Atualiza elementos compartilhados (título do trabalho e rodapés)
    document.querySelectorAll('[data-i18n="brandTitle"]').forEach((el) => {
      el.textContent = translations[lang].brandTitle;
    });
    document.querySelectorAll('[data-i18n="students"]').forEach((el) => {
      el.innerHTML = translations[lang].students;
    });
    document.querySelectorAll('[data-i18n="discipline"]').forEach((el) => {
      el.textContent = translations[lang].discipline;
    });

    // Atualiza tooltips do menu flutuante
    tooltips.forEach((tip) => {
      tip.textContent = tip.dataset[lang] || tip.textContent;
    });
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'pt' ? 'en' : 'pt');
    });
  }

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
