//Menu

const activeclass = document.querySelectorAll(".menuli a");
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

const sliderSection = document.querySelector(".slider-section");

carouselSlider.style.transform = "translateX(" + -size * counter + "px)";

// button listeners

nextBtn.addEventListener("click", function () {
  if (counter >= carouselImages.length - 1) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  if (counter === 1) {
    sliderSection.style.cssText =
      "background-color: #648BF0;border-bottom: 6px solid #5D5BC5";
  }

  if (counter === 2) {
    sliderSection.style.cssText =
      "background-color: #F06C64;border-bottom: 6px solid #d76268";
  }
  counter++;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", function () {
  if (counter <= 0) return; // remove bug when clicking button too fast
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  if (counter === 1) {
    sliderSection.style.cssText =
      "background-color: #648BF0;border-bottom: 6px solid #5D5BC5";
  }

  if (counter === 2) {
    sliderSection.style.cssText =
      "background-color: #F06C64;border-bottom: 6px solid #d76268";
  }
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

portfolioItem.forEach(element => {
  element.addEventListener("click", activePortfolioItem);
});

function activePortfolioItem(e) {
  for (var i = 0; i < portfolioItem.length; i++) {
    console.log(portfolioItem[i]);
    portfolioItem[i].classList.remove("activePortfolioItem");
  }
  e.target.classList.add("activePortfolioItem");
}

// Submit form

const form = document.querySelector("#form");
const popup = document.querySelector("#popup");
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelectorAll(".close-button");

form.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let subject = document.querySelector("#subject");
  let description = document.querySelector("#description");

  popup.style = "display:block;";
  overlay.classList.add("active");

  const popupTheme = document.querySelector("#popup-theme");
  const popupDescription = document.querySelector("#popup-description");

  if (subject.value === "") {
    popupTheme.innerHTML = `Без темы`;
  } else {
    popupTheme.innerHTML = `Тема: ${subject.value}`;
  }

  if (description.value === "") {
    popupDescription.value = `Без описания`;
  } else {
    popupDescription.value = `${description.value}`;
  }

  const closeButton = document.querySelectorAll(".close-button");
  closeButton.forEach(el => {
    el.addEventListener("click", () => {
      popup.style = "display:none;";
      overlay.classList.remove("active");
      name.value = "";
      email.value = "";
      subject.value = "";
      description.value = "";
    });
  });
});

//Smooth Scroll

function anchorLinkHandler(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: "smooth"
  });

  const checkIfDone = setInterval(function () {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const anchors = document.querySelectorAll('.anchor')
  const links = document.querySelectorAll('.menuli a')

  anchors.forEach((el) => {
    console.log(el.getAttribute('id'))
  })

  anchors.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })

    }

  });

}
