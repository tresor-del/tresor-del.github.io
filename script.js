document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", () => {
        setTimeout(hideLoader, 500);
    });
});

function autoHoverEffect() {
    const letters = document.querySelectorAll('.l');
    let currentIndex = 0;
    
    function animateNextLetter() {
        // Retirer l'effet de la lettre précédente
        if (currentIndex > 0) {
            letters[currentIndex - 1].classList.remove('auto-hover');
        }
        
        // Ajouter l'effet à la lettre courante
        if (letters[currentIndex]) {
            letters[currentIndex].classList.add('auto-hover');
        }
        
        // Passer à la lettre suivante
        currentIndex++;
        
        // Arrêter quand toutes les lettres ont été animées
        if (currentIndex < letters.length) {
            setTimeout(animateNextLetter, 150);
        } else {
            // Retirer l'effet de la dernière lettre après 3 secondes
            setTimeout(() => {
                letters[letters.length - 1].classList.remove('auto-hover');
            }, 100);
        }
    }
    
    // Commencer l'animation
    animateNextLetter();
}

function hideLoader() {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");
    const textElement = document.querySelector(".text-slide-left");
    const imgElement = document.querySelector(".img-slide-right");
    
    loader.classList.add("hide");
    
    setTimeout(() => {
        mainContent.classList.add("show");
        imgElement.classList.add("show");
        textElement.classList.add("show");
        
        // Icônes après 1.5s
        setTimeout(() => {
            document.querySelectorAll(".text-slide-bottom").forEach(el => {
                el.classList.add("show");
            });
        }, 1500);
        
        // Typing après 1.5s
        setTimeout(() => {
            document.querySelector(".text-slide-left h2").classList.add("typing");
        }, 1500);
        
        // Démarrer l'animation des lettres après 4 secondes
        setTimeout(() => {
            autoHoverEffect();
        }, 4000);
        
        // Loader disparaît à la fin
        setTimeout(() => {
            loader.style.display = "none";
        }, 3000);
        
    }, 250);
}