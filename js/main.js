/* =====================================================
   IMPAQTA CONSULTORÍA AMBIENTAL
   Archivo: js/main.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     MENÚ HAMBURGUESA
  ========================================== */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const menuBackdrop = document.getElementById("menuBackdrop");
  const siteHeader = document.getElementById("siteHeader");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      menuToggle.classList.toggle("active");

      if (menuBackdrop) {
        menuBackdrop.classList.toggle("active");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav) mainNav.classList.remove("active");
      if (menuToggle) menuToggle.classList.remove("active");
      if (menuBackdrop) menuBackdrop.classList.remove("active");
    });
  });

  if (menuBackdrop) {
    menuBackdrop.addEventListener("click", () => {
      if (mainNav) mainNav.classList.remove("active");
      if (menuToggle) menuToggle.classList.remove("active");
      menuBackdrop.classList.remove("active");
    });
  }

  /* ==========================================
     HEADER CON SOMBRA AL HACER SCROLL
  ========================================== */

  if (siteHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    });
  }

  /* ==========================================
     CARRUSEL DE FOTOS - NOSOTROS
  ========================================== */

  const slides = document.querySelectorAll(".about-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevSlide = document.getElementById("prevSlide");
  const nextSlide = document.getElementById("nextSlide");

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    if (dots[currentSlide]) {
      dots[currentSlide].classList.add("active");
    }
  }

  function nextPhoto() {
    showSlide(currentSlide + 1);
  }

  function startAutoSlide() {
    if (slides.length > 1) {
      slideInterval = setInterval(nextPhoto, 5000);
    }
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  if (slides.length > 0) {
    showSlide(0);
    startAutoSlide();
  }

  if (nextSlide) {
    nextSlide.addEventListener("click", () => {
      nextPhoto();
      resetAutoSlide();
    });
  }

  if (prevSlide) {
    prevSlide.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      resetAutoSlide();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetAutoSlide();
    });
  });

  /* ==========================================
   FILTROS DE PORTAFOLIO
========================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    portfolioCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

/* ==========================================
   FORMULARIO A WHATSAPP
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    const telefono = "5217715261084";

    const texto = `Hola, soy ${nombre}.
Empresa o institución: ${empresa || "No especificada"}.
Servicio de interés: ${servicio}.
Mensaje: ${mensaje}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
}

/* ==========================================
   AÑO AUTOMÁTICO FOOTER
========================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

});