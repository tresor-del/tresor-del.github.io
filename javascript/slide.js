document.addEventListener("DOMContentLoaded", function(){
    const slideElements = document.querySelectorAll(".slide-left, .slide-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible")
            }
        });

    },
    {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    slideElements.forEach(element => {
        observer.observe(element);
    })
})