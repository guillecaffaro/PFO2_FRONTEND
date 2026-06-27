// =======================================================
// NEXOSOFT — script.js
// Menú responsive + simulación de envío del formulario de contacto
// =======================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Menú responsive ----------
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Cerrar el menú al elegir un enlace (útil en mobile)
    navMenu.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Simulación de envío del formulario ----------
  const contactForm = document.getElementById('contactForm');
  const formConfirm = document.getElementById('formConfirm');

  if (contactForm && formConfirm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        formConfirm.style.color = '#FF6B6B';
        formConfirm.textContent = 'Revisá los campos obligatorios antes de enviar.';
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      // Simulación de una llamada a un servidor
      setTimeout(() => {
        formConfirm.style.color = '#2DD4BF';
        formConfirm.textContent = 'Gracias por tu consulta. Un asesor de NexoSoft se comunicará pronto.';
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        contactForm.reset();
      }, 900);
    });
  }

  // ---------- Año actual en el footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
