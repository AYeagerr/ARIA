 document.addEventListener("DOMContentLoaded", function () {
        const lazyImages = document.querySelectorAll(".lazy");

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add("loaded");
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: "0px 0px 200px 0px", // Adjust this value to load images slightly before they come into view
            threshold: 0.1 // Increase this value if you want to load images when a smaller portion is visible
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    });