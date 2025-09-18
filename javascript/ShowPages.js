// Portfolio Complete Theme Toggle and Animations Script
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== THEME TOGGLE FUNCTIONALITY =====
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('aria-label', 'Basculer le thème');
    document.body.appendChild(themeToggle);

    // Check stored theme or use default
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.style.transition = 'background-color 0.3s ease';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Button animation
        themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });

    function updateThemeIcon(theme) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }

    // ===== READING PROGRESS BAR =====
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
        progressBar.style.width = scrollPercent + '%';
    });

    // ===== PARTICLES SYSTEM =====
    function createParticlesSystem() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation duration
            const duration = Math.random() * 10 + 5;
            particle.style.animationDuration = duration + 's';
            
            // Random delay
            const delay = Math.random() * 5;
            particle.style.animationDelay = delay + 's';
            
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, (duration + delay) * 1000);
        }

        // Create particles at regular intervals
        setInterval(createParticle, 1000);
        
        // Create some initial particles
        for (let i = 0; i < 3; i++) {
            setTimeout(createParticle, i * 200);
        }
    }

    // Start particles after delay
    setTimeout(createParticlesSystem, 2000);

    // ===== NAVIGATION FUNCTIONALITY =====
    const navItems = document.querySelectorAll('.nav ul li');
    const pages = document.querySelectorAll('.page');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-id');
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all pages
            pages.forEach(page => {
                page.style.display = 'none';
            });
            
            // Show target page
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.style.display = 'flex';
            }
        });
    });

    // ===== FORM VALIDATION =====
    const form = document.getElementById('contactForm');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');

        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearError);
        });

        function validateField(e) {
            const field = e.target;
            const formGroup = field.parentElement;
            
            if (!field.value.trim()) {
                formGroup.classList.add('invalid');
                return false;
            }
            
            if (field.type === 'email' && !isValidEmail(field.value)) {
                formGroup.classList.add('invalid');
                return false;
            }
            
            formGroup.classList.remove('invalid');
            return true;
        }

        function clearError(e) {
            const formGroup = e.target.parentElement;
            formGroup.classList.remove('invalid');
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField({ target: input })) {
                    isValid = false;
                }
            });

            if (isValid) {
                const button = form.querySelector('.btn-submit');
                const originalText = button.textContent;
                button.textContent = 'Sending...';
                button.disabled = true;
                
                // Simulate sending
                setTimeout(() => {
                    alert('Message sent successfully!');
                    form.reset();
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);
            }
        });
    }

    // ===== CONTACT ME BUTTONS =====
    const contactButtons = document.querySelectorAll('.cv-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Switch to home page and scroll to contact section
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector('[data-id="home"]').classList.add('active');
            
            pages.forEach(page => page.style.display = 'none');
            document.getElementById('home').style.display = 'flex';
            
            // Scroll to contact section
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        });
    });

    // ===== ENHANCED HOVER EFFECTS =====
    const images = document.querySelectorAll('#home .main img, .project img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) contrast(1.1)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    });

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.project, .main, .links, .form-group');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // ===== SMOOTH SCROLLING FOR LINKS =====
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== TYPEWRITER EFFECT =====
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        const originalText = element.innerHTML;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                if (text.charAt(i) === '<') {
                    // Handle HTML tags
                    const tagEnd = text.indexOf('>', i);
                    element.innerHTML += text.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                }
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Apply typewriter effect to main text
    const mainText = document.querySelector('#home .main p');
    if (mainText) {
        const originalText = mainText.innerHTML;
        setTimeout(() => {
            typeWriter(mainText, originalText, 30);
        }, 1500);
    }

    // ===== PROJECT LINKS FUNCTIONALITY =====
    const projectButtons = document.querySelectorAll('.project button a');
    projectButtons.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small animation to indicate click
            const button = this.closest('button');
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    });

    // ===== MOBILE MENU TOGGLE (if needed) =====
    function handleMobileMenu() {
        if (window.innerWidth <= 600) {
            const nav = document.querySelector('.nav');
            let isMenuOpen = false;
            
            // Create mobile menu toggle if it doesn't exist
            let mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (!mobileToggle) {
                mobileToggle = document.createElement('button');
                mobileToggle.className = 'mobile-menu-toggle';
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.cssText = `
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    z-index: 1001;
                    background: var(--gradient);
                    border: none;
                    border-radius: 8px;
                    color: white;
                    padding: 10px;
                    font-size: 18px;
                    cursor: pointer;
                    display: none;
                `;
                document.body.appendChild(mobileToggle);
                
                mobileToggle.addEventListener('click', function() {
                    isMenuOpen = !isMenuOpen;
                    nav.style.transform = isMenuOpen ? 'translateY(0)' : 'translateY(-100%)';
                    this.innerHTML = isMenuOpen ? '✕' : '☰';
                });
            }
            
            mobileToggle.style.display = 'block';
        }
    }

    // Handle mobile menu on resize
    window.addEventListener('resize', handleMobileMenu);
    handleMobileMenu();

    // ===== INITIALIZATION MESSAGE =====
    console.log('Portfolio loaded successfully with theme toggle, animations, and enhanced UX features!');
});