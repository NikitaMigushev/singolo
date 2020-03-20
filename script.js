//Menu

var activeclass = document.querySelectorAll('.menuli');
for (var i = 0; i < activeclass.length; i++) {
  activeclass[i].addEventListener('click', activateClass);
}

function activateClass(e) {
  for (var i = 0; i < activeclass.length; i++) {
    activeclass[i].classList.remove('active');
  }
  e.target.classList.add('active');
}

//Slide-show

// Create clones of first and last elements of the slider for infinite slider

function createFirstAndLastClone() {
  let carouselSlider = document.querySelector(".slider");
  let carouselImages = document.querySelectorAll(".slide")

  console.log(carouselSlider);
  console.log(carouselImages);


  let firstChild = carouselImages[0];

  let firstClone = firstChild.cloneNode(true);

  let lastChild = carouselImages[1]

  let lastClone = lastChild.cloneNode(true);

  carouselSlider.appendChild(firstClone); // clone first slide and put it to the end. We need that for infinite slider

  carouselSlider.prepend(lastClone); // clone last slide and put in in the beggining of slider. Again for infinite slider

  firstClone.id = "firstClone"

  lastClone.id = "lastClone"

  let firstSlide = document.querySelectorAll('.firstSlide');



}

createFirstAndLastClone()

const carouselSlider = document.querySelector(".slider");
const carouselImages = document.querySelectorAll(".slide")

// buttons

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

// counter

let counter = 1;
const size = carouselImages[0].clientWidth; // set the size of the image

carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listeners

nextBtn.addEventListener('click', function () {
  if (counter >= carouselImages.length - 1) return;
  carouselSlider.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', function () {
  if (counter <= 0) return // remove bug when clicking button too fast
  carouselSlider.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlider.addEventListener('transitionend', () => {
  //When on lastClone id - reset counter and move to the first slide
  if (carouselImages[counter].id === "lastClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  //When on firstClone id - reset counter and move to the last slide
  if (carouselImages[counter].id === "firstClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});


//Phone black-screen



/*
TO-DO

1. Append black screen on each first slide
2. Add event listener on each first slide
3. When click on phone - black screen appers both on original screen and pn clone screen and vice versa.

*/
