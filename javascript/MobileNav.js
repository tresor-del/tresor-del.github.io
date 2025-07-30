document.addEventListener("DOMContentLoaded", () => {
                    const nav = document.querySelector(".info-nav");
                    const trigger = document.getElementById("nav-trigger");

                    const observer = new IntersectionObserver(([entry]) => {
                        if (!entry.isIntersecting) {
                        nav.classList.add("at-top");
                        } else {
                        nav.classList.remove("at-top");
                        }
                });

                observer.observe(trigger);
                });