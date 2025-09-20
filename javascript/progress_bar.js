// Sélectionne tous les liens du menu
const navLinks = document.querySelectorAll('.nav ul li a');

// Observer les sections visibles
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav ul li a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { threshold: 0.6 }); // 60% visible

// Applique l’observer à toutes les sections
const sections = document.querySelectorAll('.main'); 
sections.forEach(sec => {
  observer.observe(sec);
});
