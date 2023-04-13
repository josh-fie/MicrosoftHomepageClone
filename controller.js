"use strict";

// Selected Elements

// Cookies Banner
const cookiesBanner = document.querySelector(".cookies-banner");
const allCookiesButtons = cookiesBanner.querySelectorAll("button");

// Dialog Box
const dialogBox = document.querySelector(".manage-cookies");
const closeDialogX = document.querySelector(".close-dialog");
const allDialogButtons = dialogBox.querySelectorAll("button");



// Reusable Functions

const closeDisplay = function(el) {
    el.style.display = "none";
};

const displayBanner = function(el) {
    console.log("displayBanner called")
    setTimeout(() => {
        el.style.display = "block";
        console.log("Cookies Banner Displayed")
    }, 5000);
}

// Display Cookies Banner

// Async Promise addition???

window.addEventListener('load', displayBanner(cookiesBanner));


// Cookies Button Listeners
const cookiesButtons = Array.from(allCookiesButtons);
console.log(cookiesButtons);

// Accept/Reject Buttons Handling
const firstTwoButtons = cookiesButtons.slice(0, 2);
console.log(firstTwoButtons);

firstTwoButtons.forEach( (btn) => btn.addEventListener('click', function (e) {
    const clicked = e.target;
    console.log("button clicked", clicked);
    closeDisplay(cookiesBanner);
}));

// Manage Cookies Button Handling
const lastButton = cookiesButtons.slice(-1);
console.log(lastButton);


lastButton[0].addEventListener('click', function(e) {
    const clicked = e.target;
    console.log(clicked);

    dialogBox.showModal();

    // Disable Reset and Dave Buttons in Dialog

    const dialogButtons = Array.from(allDialogButtons);
    dialogButtons.shift();

    dialogButtons.forEach((btn) => {
        console.log(btn);
        btn.disabled = "true";
    });

})

// Enable Dialog Buttons
// HTMLInputElementObject.addEventListener('input', (evt) => {
//     console.log('run'); // Do something
//   });

// or 'change' event on input may work. There is a difference between property vs attribute. May need to look into.

//Close Dialog Handler

closeDialogX.addEventListener('click', () => {
    dialogBox.close();
})


//Building a Slider Component Parts 1 and 2
// const slider = function () {
//     //contains all sliders JS and doesn't pollute global namespace.
//     const slides = document.querySelectorAll('.slide');
//     const btnLeft = document.querySelector('.slider__btn--left');
//     const btnRight = document.querySelector('.slider__btn--right');
//     const dotContainer = document.querySelector('.dots');
  
//     let curSlide = 0;
//     const maxSlide = slides.length; //can also use the length property on the NodeList slides.
  
//     //Functions
//     //Creating Dots
  
//     const createDots = function () {
//       slides.forEach(function (_, i) {
//         dotContainer.insertAdjacentHTML(
//           'beforeend',
//           `<button class="dots__dot" data-slide="${i}"></button>`
//         );
//       });
//     };
  
//     const activateDot = function (slide) {
//       document
//         .querySelectorAll('.dots__dot')
//         .forEach(dot => dot.classList.remove('dots__dot--active'));
  
//       document
//         .querySelector(`.dots__dot[data-slide="${slide}"]`) //finds the dot with dots dot class and dataslide # attribute using bracket notation.
//         .classList.add('dots__dot--active');
//     };
  
//     const goToSlide = function (slide) {
//       slides.forEach(
//         (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//       );
//     };
  
//     //Next slide
//     const nextSlide = function () {
//       if (curSlide === maxSlide - 1) {
//         curSlide = 0;
//       } else {
//         curSlide++;
//       }
  
//       goToSlide(curSlide);
//       activateDot(curSlide);
//     };
  
//     const prevSlide = function () {
//       if (curSlide === 0) {
//         curSlide = maxSlide - 1;
//       } else {
//         curSlide--;
//       }
//       goToSlide(curSlide);
//       activateDot(curSlide);
//     };
  
//     //Init Function (initialise function calls for above)
//     const init = function () {
//       createDots();
//       goToSlide(0);
//       activateDot(0);
//     };
//     init();
  
//     //Event Listeners
  
//     btnRight.addEventListener('click', nextSlide);
//     btnLeft.addEventListener('click', prevSlide);
  
//     document.addEventListener('keydown', function (e) {
//       console.log(e);
//       if (e.key === 'ArrowLeft') prevSlide();
//       e.key === 'ArrowRight' && nextSlide(); //short circuting applied here
//     });
  
//     dotContainer.addEventListener('click', function (e) {
//       if (e.target.classList.contains('dots__dot')) {
//         const { slide } = e.target.dataset; //deconstruct object into slide variable.
//         goToSlide(slide);
//         activateDot(slide);
//       }
//     });
//   };
//   slider();




//Init Function

const init = function() {
    closeDisplay(cookiesBanner);
}
init();