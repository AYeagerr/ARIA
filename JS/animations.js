document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Loading Screen Fade Out
    window.addEventListener("load", () => {
        gsap.to("#loading-screen", {
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => {
                document.getElementById("loading-screen").style.display = "none";
            }
        });
    });

    // Navbar Animation
    gsap.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Main Section Animations
    // Main Section Animations
    gsap.fromTo(".part1 .blob-img",
        { x: "-100%", opacity: 0 }, // From state
        {
            x: 0,
            opacity: 1, // To state
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5
        }
    );
    gsap.fromTo(".part3 .blob-img",
        { x: "100%", opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5
        }
    );
    gsap.fromTo(".main-logo",
        { scale: 0, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            delay: 0.8
        }
    );
    gsap.fromTo(".main .text span",
        { x: 50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 1.2
        }
    );
    gsap.fromTo(".capsule",
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 1.5,
            onComplete: () => {
                gsap.to(".capsule", {
                    y: -15,
                    duration: 0.8,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1
                });
            }
        }
    );

    // Features Section
    gsap.utils.toArray(".features > div").forEach((feature, i) => {
        const img = feature.querySelector(".img-left img, .img-right img");
        const text = feature.querySelector(".text-left, .text-right");

        gsap.from(img, {
            scrollTrigger: {
                trigger: feature,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
        gsap.from(text, {
            scrollTrigger: {
                trigger: feature,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: i % 2 === 0 ? 100 : -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        });
    });

    // Plans Section
    gsap.from(".plan-title h2", {
        scrollTrigger: {
            trigger: ".plans-section",
            start: "top 80%"
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    gsap.from(".plan-title p", {
        scrollTrigger: {
            trigger: ".plans-section",
            start: "top 80%"
        },
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });
    gsap.from(".swiper-slide", {
        scrollTrigger: {
            trigger: ".swiper-container",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Testimonials Section
    gsap.from(".section-title h2", {
        scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 80%"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    gsap.from(".testimonial", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Footer
    gsap.from(".footer-content > div", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
    gsap.from(".footer-bottom > div", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%"
        },
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
    });

    // Go to Top Button
    const goToTopBtn = document.getElementById("goToTopBtn");
    gsap.set(goToTopBtn, { opacity: 0, y: 20 });
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            gsap.to(goToTopBtn, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
        } else {
            gsap.to(goToTopBtn, { opacity: 0, y: 20, duration: 0.5, ease: "power3.out" });
        }
    });
    goToTopBtn.addEventListener("click", () => {
        gsap.to(window, { scrollTo: 0, duration: 1, ease: "power3.inOut" });
    });
});