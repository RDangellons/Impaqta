const frases = [
  "Transformamos normatividad en soluciones sostenibles…",
  "Optimizamos recursos con visión ambiental…",
  "Garantizamos impacto positivo y legal…"
];

let fraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 70;
const pause = 4000;
const texto = document.getElementById("typewriter-text");

function escribir() {
  const fraseActual = frases[fraseIndex];
  if (isDeleting) {
    texto.innerHTML = fraseActual.substring(0, charIndex--);
  } else {
    texto.innerHTML = fraseActual.substring(0, charIndex++);
  }

  let delay = isDeleting ? 30 : speed;

  if (!isDeleting && charIndex === fraseActual.length) {
    delay = pause;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    fraseIndex = (fraseIndex + 1) % frases.length;
    delay = 500;
  }

  setTimeout(escribir, delay);
}

window.addEventListener("load", escribir);

// Filtros Portafolio
const filterBar = document.getElementById('portfolio-filters');
const cards = document.querySelectorAll('.p-card');

if (filterBar) {
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // activar botón
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const cat = card.dataset.category;

      if (filter === 'all' || cat === filter) {
        card.classList.remove('is-hidden');
        card.classList.add('is-show');
        setTimeout(() => card.classList.remove('is-show'), 260);
      } else {
        card.classList.add('is-hidden');
      }
    });
  });
}

