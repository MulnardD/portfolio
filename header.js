// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    const totalSlides = slides.length;
    const interval = 5000; // Temps entre les changements en ms

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === n) ? '1' : '0';
            slide.style.transform = `translateX(-${n * 100}%)`;
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === n);
        });
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }

    function setSlide(n) {
        index = n;
        showSlide(index);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => setSlide(i));
    });

    showSlide(index);
    setInterval(nextSlide, interval);
});
