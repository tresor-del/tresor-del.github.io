
document.addEventListener('DOMContentLoaded', function () {
        // Affiche la première page principale par défaut
        const firstButton = document.querySelector('button[data-page]');
        if (firstButton) {
                showPage(firstButton.dataset.page);
                firstButton.classList.add('active');
        }

        document.querySelectorAll('button[data-page]').forEach(button => {
                button.onclick = function () {
                        document.querySelectorAll('button[data-page]').forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                        showPage(this.dataset.page);
                };
        });

        // Affiche la première section projet par défaut
        const firstProjectBtn = document.querySelector('.project-btn[data-sec]');
        if (firstProjectBtn) {
                showProjectSection(firstProjectBtn.dataset.sec);
                firstProjectBtn.classList.add('h');
        }

        document.querySelectorAll('.project-btn[data-sec]').forEach(button => {
                button.onclick = function () {
                        document.querySelectorAll('.project-btn[data-sec]').forEach(btn => btn.classList.remove('h'));
                        this.classList.add('h');
                        showProjectSection(this.dataset.sec);
                };
        });
});

    
function showPage(page) {
        // Masque toutes les pages principales
        document.querySelectorAll('.div').forEach(el => {
                el.style.display = 'none';
        });
        // Affiche la page demandée
        const target = document.getElementById(page);
        if (target) {
                target.style.display = 'block';
        }
        // Si c'est la section projets, afficher la première sous-section par défaut
        if (page === "projects") {
                const firstProjectBtn = document.querySelector('.project-btn[data-sec]');
                if (firstProjectBtn) {
                        showProjectSection(firstProjectBtn.dataset.sec);
                        document.querySelectorAll('.project-btn[data-sec]').forEach(btn => btn.classList.remove('h'));
                        firstProjectBtn.classList.add('h');
                }
        }
}
function showProjectSection(sec) {
        document.querySelectorAll('.p-item').forEach(el => {
                el.style.display = 'none';
        });
        const target = document.getElementById(sec);
        if (target) {
                target.style.display = 'block';
        }
}

