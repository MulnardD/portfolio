// Initialisation des indices des slides pour chaque galerie
let slideIndex = [1, 1, 1, 1];  // Un tableau pour suivre l'index de chaque galerie
let galleryId = ["gallery1", "gallery2", "gallery3", "gallery4"];  // Les IDs des galeries

// Initialiser chaque galerie
showSlides(1, 0);  // Initialiser la première galerie
showSlides(1, 1);  // Initialiser la deuxième galerie
showSlides(1, 2);  // Initialiser la deuxième galerie
showSlides(1, 3);  // Initialiser la deuxième galerie


// Fonction pour changer de slide
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

// Fonction pour afficher les slides dans une galerie spécifique
function showSlides(n, no) {
    let i;
    let slides = document.querySelectorAll(`#${galleryId[no]} .gallery-slides`);
    
    if (n > slides.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Masquer tous les slides de la galerie
    }
    
    // Afficher le slide correspondant
    slides[slideIndex[no] - 1].style.display = "block";  
}
