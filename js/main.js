/* =====================================================
   IMPAQTA CONSULTORÍA AMBIENTAL
   Archivo: js/main.js
   Funciones generales de la página
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const menuBackdrop = document.getElementById("menuBackdrop");
  const siteHeader = document.getElementById("siteHeader");
  const navLinks = document.querySelectorAll(".main-nav a");

  /* ==========================================
     MENÚ HAMBURGUESA
  ========================================== */

  menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  menuToggle.classList.toggle("active");
  menuBackdrop.classList.toggle("active");
});

  /* ==========================================
     CERRAR MENÚ AL DAR CLIC EN UN ENLACE
  ========================================== */

  navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle.classList.remove("active");
    menuBackdrop.classList.remove("active");
  });
});



  /* ==========================================
     HEADER CON SOMBRA AL HACER SCROLL
  ========================================== */

  menuBackdrop.addEventListener("click", () => {
  mainNav.classList.remove("active");
  menuToggle.classList.remove("active");
  menuBackdrop.classList.remove("active");
});
});