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
