// Grab elements
const selectElement = selector => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Error: ${selector} may not exist`);
};
//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');
  if (this.scrollY >= 15) {
      headerElement.classList.add('activated');
  } else {
      headerElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated'); 
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
  bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme');

  if (bodyElement.classList.contains('light-theme')) {
      localStorage.setItem('currentTheme', 'themeActive');
  } else {
      localStorage.removeItem('currentTheme')
  }
});


const home = document.querySelector('.video-wrapper');

const ourMission = document.querySelector('.our-mission'); 

const statisticsContainer = document.querySelector('.statistics-container');

const homeSolutions = document.querySelector('.home-solutions-container'); 

const team = document.querySelector('.team-section'); 
const aboutSection = document.querySelector('.about-section');

const faq = document.querySelector('.accordion'); 

const missionBtn = document.querySelector('#mission-btn');
const changeText = document.querySelector('.change-text');
const pollutionImg = document.querySelector('#pollution-img');
const cottageImg = document.querySelector('#cottage-img');
missionBtn.addEventListener('click', changeImgAndText);
const revertBtn = document.querySelector('#revert-btn');
                           
function changeImgAndText() {
  pollutionImg.style.display = 'none';
  cottageImg.style.display = "block";
  changeText.textContent = "We are dedicated to finding eco-friendly energy solutions for homeowners that save more money than the conventional methods that are prone to energy waste. We believe that the future of energy is in the hands of those who use it, and we are committed to turning that vision into a reality. Our goals include reducing carbon footprints, promoting smart solutions for home energy, and most of all saving money for homeowners through such solutions. Our mission is to help homeowners make informed decisions about their energy use and to reduce their carbon footprint by providing them with the tools they need to make the switch.";
  missionBtn.style.display = 'none';
  revertBtn.style.display = 'block';
};

revertBtn.addEventListener('click', revertToOriginal); 

function revertToOriginal() {
  pollutionImg.style.display = 'block';
  cottageImg.style.display = "none";
  changeText.textContent = "Our world is burning due to climate change. Pollution of land, air, and water are threatening our very existence. Scientists predict that we have only one more century, at best, before wide areas of our planet Earth become uninhabitable. Our company was founded in 2023 on a revolutionary principle that there are modern solutions to save the environment all while saving on costs at home!";
  missionBtn.style.display = 'block';
  revertBtn.style.display = 'none';
}


// Scroller

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


// Accordion
const accordion = document.getElementsByClassName('content-container');

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

const year = document.querySelector(".year");

year.textContent = new Date().getFullYear();