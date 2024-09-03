// scripts.js

// Aquí podríamos añadir funciones de interacción
document.addEventListener('DOMContentLoaded', function() {
    // Código para interacciones o efectos
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});