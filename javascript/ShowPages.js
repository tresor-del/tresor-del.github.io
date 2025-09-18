document.querySelectorAll(".page").forEach((page) => {
  page.style.display = "none";
});

// Fonction pour afficher la page sélectionnée
function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = page.id === pageId ? "block" : "none";
  });
}

// Afficher la page "home" par défaut
showPage("home");

// Ajouter un écouteur d'événements sur les éléments de navigation
document.querySelectorAll(".nav ul li").forEach((navItem) => {
  navItem.addEventListener("click", function () {
    document.querySelectorAll(".nav ul li").forEach((nav) => {
      nav.classList.remove("active");
    });
    this.classList.add("active");
    const pageId = this.getAttribute("data-id");
    showPage(pageId);
  });

  document.querySelector(".pr").addEventListener('click', function () {
    showPage("projects")
  })

});
