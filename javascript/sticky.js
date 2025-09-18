document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const navOffset = nav.offsetTop; // Position initiale du nav
    
    function handleScroll() {
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition >= navOffset) {
            // On a atteint le niveau du nav, le rendre sticky
            nav.classList.add('sticky');
        } else {
            // On remonte au-dessus, enlever l'effet sticky
            nav.classList.remove('sticky');
        }
    }
    
    // Écouter le scroll
    window.addEventListener('scroll', handleScroll);
});