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

arrowLeft.addEventListener('click',function(event){
	currentSlide--
	if (currentSlide < 0){
		currentSlide = slides.length -1
	}
	image.src = "./assets/images/slideshow/" + slides[currentSlide].image
})

let arrowRight = document.querySelector(".arrow_right")
console.log(arrowRight)


arrowRight.addEventListener('click',function(event){
	currentSlide +=1
	if (currentSlide > slides.length){
		currentSlide = 0
	}
	image.src = "./assets/images/slideshow/" + slides[currentSlide].image
})

const dotsContainer = document.getElementById('slider-dots');

slides.forEach((_, index) => {
  const dot = document.createElement('li');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('dot_selected');
  }
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
  dotsContainer.appendChild(dot);
});

function goToSlide(index) {
  // Code pour afficher la diapositive correspondante
  // et mettre à jour la classe dot_selected du bullet point
}
function goToSlide(index) {
	currentSlide = index;
	image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  
	const dots = dotsContainer.querySelectorAll('.dot');
	dots.forEach((dot, dotIndex) => {
	  if (dotIndex === index) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }
  