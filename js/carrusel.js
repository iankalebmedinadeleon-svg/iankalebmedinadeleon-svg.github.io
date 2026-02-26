
// ===============================
// CARRUSEL PROFESIONAL
// ===============================

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const totalSlides = slides.length;

// Función para actualizar posición
function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    updateCarousel();
});

// Botón anterior
prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = totalSlides - 1;
    }
    updateCarousel();
});

// Carrusel automático cada 4 segundos
let autoSlide = setInterval(() => {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    updateCarousel();
}, 4000);

// Pausar cuando el mouse esté encima
track.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

// Reanudar cuando el mouse salga
track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        updateCarousel();
    }, 4000);
});
