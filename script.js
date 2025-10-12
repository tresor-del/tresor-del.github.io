document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("load", () => {
    setTimeout(hideLoader, 500);
  });

  // const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // hamburger.addEventListener("click", () => {
  //   navLinks.classList.toggle("active");
  // });

  Obs()

  Navigation();

  sendMessage();

  canva();

  alert("Le site est toujours en dévéloppement")

});


function hideLoader() {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");
  const textElement = document.querySelector(".text-slide-left");
  // const imgElement = document.querySelector(".img-slide-right");
  const navElement = document.querySelector(".text-slide-top");
  const socialElement = document.querySelector(".text-slide-bottom");
  const nameElmt = document.querySelector(".name")

  loader.classList.add("hide");
  
  setTimeout(() => {
    mainContent.classList.add("show");
    // imgElement.classList.add("show");
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
  }, {threshold: 0.7})

  sections.forEach(section => observer.observe(section));
}

function canva() {
  const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');

        // Variables
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let stars = [];
        let speed = 0.3;

        // Nombre d'étoiles
        const numStars = 800;

        // Classe Star pour représenter chaque étoile
        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                // Position aléatoire centrée
                this.x = Math.random() * width - width / 2;
                this.y = Math.random() * height - height / 2;
                this.z = Math.random() * width;
                this.pz = this.z; // Position précédente Z pour les traînées
            }

            update() {
                // Déplacer l'étoile vers l'avant (profondeur 3D)
                this.pz = this.z;
                this.z -= speed;

                // Si l'étoile sort de l'écran, la réinitialiser
                if (this.z < 1) {
                    this.reset();
                }
            }

            show() {
                // Projection 3D -> 2D
                let sx = (this.x / this.z) * width + width / 2;
                let sy = (this.y / this.z) * height + height / 2;

                // Position précédente pour la traînée
                let px = (this.x / this.pz) * width + width / 2;
                let py = (this.y / this.pz) * height + height / 2;

                // Taille de l'étoile basée sur la profondeur
                let size = (1 - this.z / width) * 3;

                // Calculer l'opacité basée sur la profondeur
                let opacity = (1 - this.z / width);

                // Dessiner la traînée
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                ctx.lineWidth = size / 2;
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.stroke();

                // Dessiner l'étoile
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.beginPath();
                ctx.arc(sx, sy, size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Créer les étoiles
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        // Boucle d'animation
        function animate() {
            // Fond noir semi-transparent pour l'effet de traînée
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            // Mettre à jour et dessiner chaque étoile
            for (let star of stars) {
                star.update();
                star.show();
            }

            requestAnimationFrame(animate);
        }

        // Démarrer l'animation
        animate();

        // Redimensionner le canvas
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        // Fonctions de contrôle
        function changeSpeed(speedType) {
            // Retirer la classe active de tous les boutons
            document.querySelectorAll('.control-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Ajouter la classe active au bouton cliqué
            event.target.classList.add('active');

            switch(speedType) {
                case 'slow':
                    speed = 0.2;
                    break;
                case 'normal':
                    speed = 0.5;
                    break;
                case 'fast':
                    speed = 1.5;
                    break;
                case 'warp':
                    speed = 5;
                    break;
            }
        }

        function scrollToInfo() {
            document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
        }

        // Effet de souris (bonus)
        let mouseX = 0;
        let mouseY = 0;

        canvas.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - width / 2) * 0.0001;
            mouseY = (e.clientY - height / 2) * 0.0001;
        });
}