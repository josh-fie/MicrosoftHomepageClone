"use strict";

// Selected Elements

// Body
const body = document.querySelector("body");

// Cookies Banner
const cookiesBanner = document.querySelector(".cookies-banner");
const allCookiesButtons = cookiesBanner.querySelectorAll("button");

// Dialog Box
const dialogBox = document.querySelector(".manage-cookies");
const closeDialogX = document.querySelector(".close-dialog");
const allDialogButtons = dialogBox.querySelectorAll("button");
const cookiesInputs = document.querySelector(".cookies-inputs");

// All Microsoft Dropdown
const allMicrosoft = document.querySelector("#all_microsoft");

// More Dropdown
const moreButton = document.querySelector("#more_dropdown");



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

const checkCookieInputs = function() {
    const inputArray = [...cookiesInputs.getElementsByTagName("input")];
    
    return inputArray.some((input, i, arr) => input.checked === true);
}

const resetCookieInputs = function() {
    const inputArray = [...cookiesInputs.getElementsByTagName("input")];

    inputArray.forEach(input => input.checked = false);
    console.log(inputArray);
}

const disableDialogButtons = function() {
    // Disable Reset and Dave Buttons in Dialog

    const dialogButtons = Array.from(allDialogButtons);
    dialogButtons.shift();

    dialogButtons.forEach((btn) => {
        console.log(btn);
        btn.disabled = "true";
    });
}

const enableDialogButtons = function() {
    const dialogButtons = Array.from(allDialogButtons);
    dialogButtons.shift();

    dialogButtons.forEach((btn, i, arr) => {
        console.log(btn);
        btn.disabled = "false";
        btn.removeAttribute("disabled");
    
    });
}

const closeDropdown = function(dropdownel, btn) {
    dropdownel.style.opacity = 0;
        setTimeout(() => {
            dropdownel.style.top = "-1000px";
        }, 200);

        btn.classList.remove("clicked");
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

     if(!checkCookieInputs()) {

        disableDialogButtons();

    }

    // Open Dialog
    dialogBox.showModal();

})

// Enable Dialog Buttons

cookiesInputs.addEventListener('click', function(e) {
    const clicked = e.target;

    if(!clicked.id) return;

    console.log(clicked.id);

    if(clicked.id) {
        enableDialogButtons();
    }

})

// Reset All Dialog Button Handler

allDialogButtons[1].addEventListener('click', function(e) {
    const clicked = e.target;
    console.log(clicked);
    // if(clicked.disabled === "false");
    resetCookieInputs();
    disableDialogButtons();
})

// Save Changes Dialog Button Handler

allDialogButtons[2].addEventListener('click', function(e) {
    dialogBox.close();
    closeDisplay(cookiesBanner);
});

//Close Dialog Handler

closeDialogX.addEventListener('click', () => {
    dialogBox.close();

    console.log(cookiesInputs.getElementsByTagName("input"));
})

// All Microsoft Dropdown Handler

allMicrosoft.addEventListener('click', (e) => {
    const clicked = e.target;

    const button = clicked.closest("#all_microsoft");
    console.log(button);

    // Select Dropdown

    const dropdownMenu = button.querySelector(".all_micro_content");

    if ([...button.classList].includes("clicked")) {

        closeDropdown(dropdownMenu, button);
    } else {

    button.classList.add("clicked");

    // Display Dropdown Menu w/ transition

    setTimeout(() => {
        dropdownMenu.style.opacity = 1;
        dropdownMenu.style.top = "50px";
    }, 100);
    }
});

// Close Dialog on Body Click

body.addEventListener("click", function(e) {
    const clicked = e.target;

    const inAllMicroMenu = clicked.closest("#all_microsoft") ? true : false;
    const inMoreMenu = clicked.closest("#more_dropdown") ? true : false;

    if(!inAllMicroMenu || inMoreMenu) {
        const button = document.querySelector("#all_microsoft");
        const dropdownMenu = document.querySelector(".all_micro_content");
        closeDropdown(dropdownMenu, button);
    };

    if(!inMoreMenu || inAllMicroMenu) {
        const button = document.querySelector("#more_dropdown");
        const dropdownList = button.querySelectorAll(".more_div");

        // Remove Display for dropdown

        dropdownList.forEach(el => el.style.display = "none");

        button.classList.remove("clicked");
    };
})

// More Dropdown Handler

moreButton.addEventListener('click', function(e) {
    const clicked = e.target;

    const button = clicked.closest("#more_dropdown");
    const dropdownList = button.querySelectorAll(".more_div");

    if ([...button.classList].includes("clicked")) {

        // Remove Display for dropdown

        dropdownList.forEach(el => el.style.display = "none");

        // Remove clicked class for More button

        button.classList.remove("clicked");
    } else {
            if(window.innerWidth > 940 && window.innerWidth <= 1000) {setTimeout(() => {dropdownList[0].style.display = "flex";
            button.classList.add("clicked");});
        }
            if(window.innerWidth < 940 && window.innerWidth >= 880) {setTimeout(() => {dropdownList[1].style.display = "flex";
            button.classList.add("clicked");})
        }
            if(window.innerWidth < 880) console.log("Tablet size: no dropdown");
    };
});


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