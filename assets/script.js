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
]

let arrowLeft = document.querySelector(".arrow_left") 
console.log(arrowLeft)
let currentSlide = 0
let image = document.querySelector('.banner-img')
console.log(image)
let texte = document.querySelector('.tagline')

arrowLeft.addEventListener('click',function(event){
	currentSlide--
	if (currentSlide < 0){
		currentSlide = slides.length -1
	}
	image.src = "./assets/images/slideshow/" + slides[currentSlide].image
	texte.innerHTML = slides[currentSlide].tagLine
	updateDots()
})

let arrowRight = document.querySelector(".arrow_right")
console.log(arrowRight)


arrowRight.addEventListener('click',function(event){
	currentSlide +=1
	if (currentSlide > slides.length){
		currentSlide = 0
	}
	image.src = "./assets/images/slideshow/" + slides[currentSlide].image
	texte.innerHTML = slides[currentSlide].tagLine
	updateDots()
	
})

const dotsContainer = document.getElementsByClassName('dots')[0];

slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('dot_selected');
  }
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
  dotsContainer.appendChild(dot);
});
let valeursDots = ['', '', '', ''];

function goToSlide(index) {
  currentSlide = index;
  image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  texte.innerHTML = slides[currentSlide].tagLine;

  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add('dot_selected');
      valeursDots[dotIndex] = dotIndex + 1;
    } else {
      dot.classList.remove('dot_selected');
      valeursDots[dotIndex] = '';
    }
  });

  console.log('Valeurs des dots :', valeursDots);

  updateDots();
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, dotIndex) => {
    const valeurDot = valeursDots[dotIndex];

    // Mettez ici le code pour mettre à jour le style ou l'apparence des dots en fonction de la valeur de chaque dot

    // Exemple : Si la valeur est non vide, ajouter une classe spécifique au dot pour le mettre en surbrillance
    if (valeurDot !== '') {
      dot.classList.add('dot_highlight');
    } else {
      dot.classList.remove('dot_highlight');
    }

    // Exemple : Si la valeur est '1', afficher un texte ou une icône dans le dot
    if (valeurDot === '1') {
      dot.textContent = '1';
    } else {
      dot.textContent = '';
    }
  });
}

// Écouteur d'événement pour la flèche de droite
document.getElementById('flecheDroite').addEventListener('click', function() {
  // Augmenter les valeurs de valeursDots de 1
  valeursDots = valeursDots.map(val => {
    if (val !== '') {
      return String(parseInt(val) + 1);
    }
    return '';
  });

  console.log('Valeurs des dots :', valeursDots);

  updateDots();
});

// Écouteur d'événement pour la flèche de gauche
document.getElementById('flecheGauche').addEventListener('click', function() {
  // Réduire les valeurs de valeursDots de 1
  valeursDots = valeursDots.map(val => {
    if (val !== '') {
      return String(parseInt(val) - 1);
    }
    return '';
  });

  console.log('Valeurs des dots :', valeursDots);

  updateDots();
});
