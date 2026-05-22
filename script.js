// Kutubxonalarsiz sof JavaScript (Vanilla JS) animatsiyalari

document.addEventListener('DOMContentLoaded', () => {
    // Fade-up animatsiyasi uchun Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Bir marta ishlashi uchun
            }
        });
    }, observerOptions);

    // Barcha .fade-up klassiga ega elementlarni kuzatish
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Tugmalarga bosilganda silliq skrol (agar langlar qo'shilsa)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
