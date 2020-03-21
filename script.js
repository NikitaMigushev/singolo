//Menu

const activeclass = document.querySelectorAll(".menuli");
for (var i = 0; i < activeclass.length; i++) {
  activeclass[i].addEventListener("click", activateClass);
}

function activateClass(e) {
  for (var i = 0; i < activeclass.length; i++) {
    activeclass[i].classList.remove("active");
  }
  e.target.classList.add("active");
}

//Slide-show

// Create clones of first and last elements of the slider for infinite slider

function createFirstAndLastClone() {
  let carouselSlider = document.querySelector(".slider");
  let carouselImages = document.querySelectorAll(".slide");

  let firstChild = carouselImages[0];

  let firstClone = firstChild.cloneNode(true);

  let lastChild = carouselImages[1];

  let lastClone = lastChild.cloneNode(true);

  carouselSlider.appendChild(firstClone); // clone first slide and put it to the end. We need that for infinite slider

  carouselSlider.prepend(lastClone); // clone last slide and put in in the beggining of slider. Again for infinite slider

  firstClone.id = "firstClone";

  lastClone.id = "lastClone";

  let firstSlide = document.querySelectorAll(".firstSlide");
}

createFirstAndLastClone();

// Add black-screen on vertical-phones

const phoneVertical = document.querySelectorAll(".phone-vertical");

phoneVertical.forEach(element => {
  element.innerHTML += `<div class="phoneVertical-blackScreen"></div>`;
});

const verticalBlackScreen = {
  display: "none",
  selector: document.querySelectorAll(".phoneVertical-blackScreen")
};

phoneVertical.forEach(element => {
  element.addEventListener("click", () => {
    if (verticalBlackScreen.display === "none") {
      verticalBlackScreen.selector.forEach(element => {
        element.style = "display: block";
        verticalBlackScreen.display = "block";
      });
    } else {
      verticalBlackScreen.selector.forEach(element => {
        element.style = "display: none";
        verticalBlackScreen.display = "none";
      });
    }
  });
});

// Add black-screen on horizontal-phones

const phoneHorizontal = document.querySelectorAll(".phone-horizontal");

phoneHorizontal.forEach(element => {
  element.innerHTML += `<div class="phoneHorizontal-blackScreen"></div>`;
});

const horizontalBlackScreen = {
  display: "none",
  selector: document.querySelectorAll(".phoneHorizontal-blackScreen")
};

phoneHorizontal.forEach(element => {
  element.addEventListener("click", () => {
    if (horizontalBlackScreen.display === "none") {
      horizontalBlackScreen.selector.forEach(element => {
        element.style = "display: block";
        horizontalBlackScreen.display = "block";
      });
    } else {
      horizontalBlackScreen.selector.forEach(element => {
        element.style = "display: none";
        horizontalBlackScreen.display = "none";
      });
    }
  });
});

const carouselSlider = document.querySelector(".slider");
const carouselImages = document.querySelectorAll(".slide");

// buttons

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// counter

let counter = 1;
const size = carouselImages[0].clientWidth; // set the size of the image

carouselSlider.style.transform = "translateX(" + -size * counter + "px)";

// button listeners

nextBtn.addEventListener("click", function() {
  if (counter >= carouselImages.length - 1) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", function() {
  if (counter <= 0) return; // remove bug when clicking button too fast
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlider.addEventListener("transitionend", () => {
  //When on lastClone id - reset counter and move to the first slide
  if (carouselImages[counter].id === "lastClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
  //When on firstClone id - reset counter and move to the last slide
  if (carouselImages[counter].id === "firstClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
});

// Portfolio Tab menu

const activePortfolioMenu = document.querySelectorAll(".portfolioLi");
for (var i = 0; i < activePortfolioMenu.length; i++) {
  activePortfolioMenu[i].addEventListener("click", portfolioActiveClass);
}

const portfolioItems = document.querySelector(".portfolio-items");

function portfolioActiveClass(e) {
  for (var i = 0; i < activePortfolioMenu.length; i++) {
    activePortfolioMenu[i].classList.remove("activePortfolio");
  }
  e.target.classList.add("activePortfolio");

  // Randomize portfolio items
  for (var i = portfolioItems.children.length; i >= 0; i--) {
    portfolioItems.appendChild(
      portfolioItems.children[(Math.random() * i) | 0]
    );
  }
}

// Active portfolio item

const portfolioItem = document.querySelectorAll(
  ".portfolio-items .grid-item img"
);
console.log(portfolioItem);

portfolioItem.forEach(element => {
  element.addEventListener("click", activePortfolioItem);
});

function activePortfolioItem(e) {
  for (var i = 0; i < portfolioItem.length; i++) {
    console.log(portfolioItem[i]);
    portfolioItem[i].classList.remove("activePortfolioItem");
  }
  e.target.classList.add("activePortfolioItem");
  console.log(e.target);
}
