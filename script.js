document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("load", () => {
    setTimeout(hideLoader, 500);
  });

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  Obs()

  Navigation();

  sendMessage();

});


function hideLoader() {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");
  const textElement = document.querySelector(".text-slide-left");
  const imgElement = document.querySelector(".img-slide-right");
  const navElement = document.querySelector(".text-slide-top");
  const socialElement = document.querySelector(".text-slide-bottom");
  const nameElmt = document.querySelector(".name")

  loader.classList.add("hide");
  
  setTimeout(() => {
    mainContent.classList.add("show");
    imgElement.classList.add("show");
    textElement.classList.add("show");

    // Icônes après 1.5s
    setTimeout(() => {
    //   document.querySelectorAll(".text-slide-bottom").forEach((el) => {
    //     el.classList.add("show");
        
    //   });
      navElement.classList.add("show");
      socialElement.classList.add("show");
      nameElmt.classList.add("show")
    }, 1500);

    // Typing après 1.5s
    setTimeout(() => {
      document.querySelector(".text-slide-left h2").classList.add("typing");
    }, 800);

    // Démarrer l'animation des lettres après 4 secondes
    // setTimeout(() => {
    //   autoHoverEffect();
    // }, 4000);

    // Loader disparaît à la fin
    setTimeout(() => {
      loader.style.display = "none";
    }, 3000);
  }, 200);
}

function Navigation() {
  
  const btns = document.querySelectorAll("ul [data-target]")

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      
      const sectionId = btn.dataset.target;

      const section = document.getElementById(sectionId)

      btns.forEach(btn => btn.classList.remove("active"))
      btn.classList.add("active")

      if (section) {
        section.scrollIntoView({ behavior: "smooth"});
      }

    })
  })
}

function sendMessage() {
  document.querySelector(".submit-btn").addEventListener("click", function() {
    alert("Can't receive message for the moment, please use my social links (;")
  })
}

function Obs() {
    const sections = document.querySelectorAll("[data-section]");
    const btns = document.querySelectorAll("ul [data-target]")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if(entry.isIntersecting) {
        btns.forEach(btn => btn.classList.remove("active"))

         const targetClass = entry.target.dataset.section; // ou entry.target.classList[0]
      const activeBtn = document.querySelector(`ul [data-target="${targetClass}"]`);
      
      if (activeBtn) {
        activeBtn.classList.add("active");
      }
      }

    })
  }, {threshold: 0.3})

  sections.forEach(section => observer.observe(section));
}