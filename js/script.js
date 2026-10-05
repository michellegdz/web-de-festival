document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a:not(.tickets)");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    // Detecta qué sección está visible en pantalla
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // Compensación por la altura del header
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Actualiza la clase 'active' en la navegación
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
});
