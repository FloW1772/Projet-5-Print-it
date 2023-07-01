const slides = [
  {
      "image":"slide1.jpg",
      "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
      "image":"slide2.jpg",
      "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
      "image":"slide3.jpg",
      "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
      "image":"slide4.png",
      "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let currentSlide = 0;
let image = document.querySelector('.banner-img');
let texte = document.querySelector('.tagline');
const dotsContainer = document.getElementsByClassName('dots')[0];
let valeursDots = [];

// Initialisation des valeurs des dots à 1 pour chaque élément
window.addEventListener('DOMContentLoaded', function() {
  valeursDots = Array(slides.length).fill(1);
  updateDots();
});

// Gestion du clic sur la flèche de gauche
arrowLeft.addEventListener('click', function(event) {
  currentSlide--;
  if (currentSlide < 0) {
      currentSlide = slides.length - 1;
  }
  updateSlide();
});

// Gestion du clic sur la flèche de droite
arrowRight.addEventListener('click', function(event) {
  currentSlide++;
  if (currentSlide >= slides.length) {
      currentSlide = 0;
  }
  updateSlide();
});

// Mise à jour de l'image et du texte en fonction de la slide actuelle
function updateSlide() {
  image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  texte.innerHTML = slides[currentSlide].tagLine;
  updateDots();
}

// Fonction de mise à jour des dots
function updateDots() {
  dotsContainer.innerHTML = ''; // Supprimer les dots existants

  slides.forEach(function(_, index) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === currentSlide) {
          dot.classList.add('dot_selected');
      }
      dot.addEventListener('click', function() {
          currentSlide = index;
          updateSlide();
      });
      dotsContainer.appendChild(dot);
  });
}

// Appel initial pour afficher les dots et la première slide
updateDots();
updateSlide();
