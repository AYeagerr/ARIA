document.addEventListener("DOMContentLoaded", function () {
            const testimonials = document.querySelectorAll(".testimonial");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            });

            testimonials.forEach(testimonial => {
                observer.observe(testimonial);
            });
        });