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
// View Sitemap
const SitemapBtn = document.querySelector(".go-to-sitemap");
const sitemap = document.querySelector(".sitemap");
// More Dropdown
const moreButton = document.querySelector("#more_dropdown");
// Main Nav Items
const mainNav = document.querySelector(".main-nav");
const allMicroContent = document.querySelector(".all_micro_content");
const columnContainer = document.getElementById("column-container");
const hamburgerButton = document.getElementById("hamburger_icon");
const hamburgerUnit = document.querySelector(".hamburger_button");
// Search
const searchBtn = document.getElementById("search_btn");
const searchReturnBtn = document.querySelector(".search_return_btn");
const searchBar = document.querySelector(".search_bar");
const searchInput = document.getElementById("search_input");
// Slideshow
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const showcaseTwo = document.querySelector(".showcase-two");
const showcaseThree = document.querySelector(".showcase-three");
// Reusable Functions
const closeDisplay = function(el) {
    el.style.display = "none";
};
const displayBanner = function(el) {
    console.log("displayBanner called");
    setTimeout(()=>{
        el.style.display = "block";
        console.log("Cookies Banner Displayed");
    }, 3000);
};
const checkCookieInputs = function() {
    const inputArray = [
        ...cookiesInputs.getElementsByTagName("input")
    ];
    return inputArray.some((input, i, arr)=>input.checked === true);
};
const resetCookieInputs = function() {
    const inputArray = [
        ...cookiesInputs.getElementsByTagName("input")
    ];
    inputArray.forEach((input)=>input.checked = false);
    console.log(inputArray);
};
const disableDialogButtons = function() {
    // Disable Reset and Dave Buttons in Dialog
    const dialogButtons = Array.from(allDialogButtons);
    dialogButtons.shift();
    dialogButtons.forEach((btn)=>{
        console.log(btn);
        btn.disabled = "true";
    });
};
const enableDialogButtons = function() {
    const dialogButtons = Array.from(allDialogButtons);
    dialogButtons.shift();
    dialogButtons.forEach((btn, i, arr)=>{
        console.log(btn);
        btn.disabled = "false";
        btn.removeAttribute("disabled");
    });
};
const closeDropdown = function(dropdownel, btn) {
    setTimeout(()=>{
        dropdownel.style.display = "none";
    }, 100);
    btn.classList.remove("clicked");
};
const closeNestedDropdowns = function() {
    // Close all nested dropdowns
    const dropdownDivs = mainNav.querySelectorAll("div");
    dropdownDivs.forEach(function(div) {
        const classPresent = div.classList.contains("dropdownShow") ? true : false;
        if (classPresent) {
            div.classList.remove("dropdownShow");
            div.style.display = "none";
            // Rotate arrows back
            div.previousElementSibling.style.transform = "rotate(-90deg)";
        }
    });
};
const toggleSearch = function() {
    searchBtn.classList.toggle("activated");
    searchReturnBtn.classList.toggle("activated");
    searchBar.classList.toggle("activated");
    hamburgerUnit.classList.toggle("activated");
};
// End of Reusable Functions
searchBtn.addEventListener("click", function(e) {
    toggleSearch();
    // Make Hamburger Menu inaccessible as part of toggleSearch
    // Make Input Focused element with focus()
    searchInput.focus();
    // When input active element add border to searchBar
    document.activeElement === searchInput ? searchBar.style.border = "2px solid blue" : searchBar.style.border = "1px solid grey";
});
// Close Search Bar Via Return Btn
searchReturnBtn.addEventListener("click", function(e) {
    toggleSearch();
    // Remove blue border from Search
    searchBar.style.border = "none";
});
// Hamburger Dropdown Handler
hamburgerButton.addEventListener("click", function(e) {
    const clicked = e.target;
    if (clicked.checked) mainNav.style.display = "flex";
    else {
        mainNav.style.display = "none";
        closeNestedDropdowns();
    }
});
// Hamburger Dropdown Handler for nested dropdowns
mainNav.addEventListener("click", function(e) {
    let clicked = e.target;
    // Guard Clause for LI's
    if (clicked.nodeName === "LI") return console.log("li");
    if (clicked.closest(".outer-div")) {
        clicked = clicked.closest(".outer-div");
        const arrow = clicked.querySelector("img");
        const childDiv = clicked.lastElementChild;
        if (!childDiv.classList.contains("dropdownShow")) {
            arrow.style.transform = "rotate(90deg)";
            childDiv.classList.add("dropdownShow");
            childDiv.style.display = "block";
        } else {
            arrow.style.transform = "rotate(-90deg)";
            childDiv.classList.remove("dropdownShow");
            childDiv.style.display = "none";
        }
    } else return;
});
// Window Resize - Image Changes
const mmObj1399 = window.matchMedia("(min-width: 1084px)");
const mmObj1083 = window.matchMedia("(min-width: 900px) and (max-width: 1083px)");
const mmObjmin540 = window.matchMedia("(min-width: 540px) and (max-width: 900px)");
const mmObj539 = window.matchMedia("(max-width: 539px)");
// Window Resize to Tablet (<880px)
const mmObj900 = window.matchMedia("(max-width: 900px)");
// Matching Functions
function xlargeDomChange(x) {
    // Change to Largest Images
    if (x.matches) {
        // Slide Images X Large
        slides[0].firstElementChild.src = "showcase_xlarge.png";
        slides[1].firstElementChild.src = "microsoft365_xlarge.jpg";
        slides.forEach((slide)=>console.log(slide.firstElementChild.attributes[0].textContent));
        // Showcases Images X Large
        showcaseTwo.firstElementChild.src = "controllers_xlarge.png";
        showcaseThree.firstElementChild.src = "showcase3_xlarge.jpg";
        console.log(showcaseTwo.firstElementChild.attributes[0].textContent, showcaseThree.firstElementChild.attributes[0].textContent);
    }
}
function largeDomChange(x) {
    // Change to Largest Images
    if (x.matches) {
        // Slide Images Large
        slides[0].firstElementChild.src = "showcase_large.png";
        slides[1].firstElementChild.src = "microsoft365_large.jpg";
        slides.forEach((slide)=>console.log(slide.firstElementChild.attributes[0].textContent));
        // Showcases Images Large
        showcaseTwo.firstElementChild.src = "controllers_large.png";
        showcaseThree.firstElementChild.src = "showcase3_large.jpg";
        console.log(showcaseTwo.firstElementChild.attributes[0].textContent, showcaseThree.firstElementChild.attributes[0].textContent);
    }
}
function tabletDomChange(x) {
    // Change SearchReturnButton From Cancel to Arrow
    if (x.matches) {
        searchReturnBtn.querySelector("img").style.display = "block";
        searchReturnBtn.querySelector("span").style.display = "none";
        // Slide Images Medium
        slides[0].firstElementChild.src = "showcase_medium.png";
        slides[1].firstElementChild.src = "microsoft365_medium.jpg";
        slides.forEach((slide)=>console.log(slide.firstElementChild.attributes[0].textContent));
        // Showcases Images Medium
        showcaseTwo.firstElementChild.src = "controllers_medium.png";
        showcaseThree.firstElementChild.src = "showcase3_medium.jpg";
        console.log(showcaseTwo.firstElementChild.attributes[0].textContent, showcaseThree.firstElementChild.attributes[0].textContent);
    } else {
        searchReturnBtn.querySelector("span").style.display = "inline-block";
        searchReturnBtn.querySelector("img").style.display = "none";
    }
    if (x.matches && mainNav.children.length === 9) {
        const elCollection = Array.from(columnContainer.children);
        elCollection.forEach((col, i, arr)=>{
            const colLineItems = Array.from(col.children);
            const widerDivElement = document.createElement("div");
            widerDivElement.classList.add(`outer-div`);
            mainNav.append(widerDivElement);
            colLineItems.forEach((el)=>{
                if (el.nodeName === "LI") {
                    const divElement = document.createElement("div");
                    divElement.classList.add(`inner-div-${i}`);
                    const textElement = document.createTextNode(`${el.textContent}`);
                    const imgElement = document.createElement("img");
                    imgElement.src = "left-arrow.svg";
                    widerDivElement.append(textElement);
                    widerDivElement.append(imgElement);
                    widerDivElement.append(divElement);
                } else {
                    const div = document.querySelector(`.inner-div-${i}`);
                    const liElement = document.createElement("li");
                    const textElement = document.createTextNode(`${el.textContent}`);
                    liElement.append(textElement);
                    div.append(liElement);
                }
            });
        });
        // Generate View Sitemap Line in Dropdown
        const smLiElement = document.createElement("li");
        // Add Event Listener to Sitemap li
        smLiElement.addEventListener("click", function() {
            sitemap.scrollIntoView(true, {
                behavior: "smooth"
            });
        });
        const aElement = document.createElement("a");
        aElement.href = "#sitemap_";
        const textElement = document.createTextNode("View Sitemap");
        aElement.append(textElement);
        smLiElement.append(aElement);
        mainNav.append(smLiElement);
    } else if (!x.matches && mainNav.children.length > 9) {
        // Remove Generated Elements from DOM as page width increases
        const mainNavContents = Array.from(mainNav.children);
        mainNavContents.forEach((el, i, arr)=>{
            if (i > 8) el.remove();
        });
        // Remove Manually Set display and checked status on hamburger
        mainNav.removeAttribute("style");
        hamburgerButton.checked = false;
    } else console.log("Not tablet size");
}
function mediumDomChange(x) {
    // Change to Largest Images
    if (x.matches) {
        // Slide Images Medium
        slides[0].firstElementChild.src = "showcase_medium.png";
        slides[1].firstElementChild.src = "microsoft365_medium.jpg";
        slides.forEach((slide)=>console.log(slide.firstElementChild.attributes[0].textContent));
        // Showcases Images Medium
        showcaseTwo.firstElementChild.src = "controllers_medium.png";
        showcaseThree.firstElementChild.src = "showcase3_medium.jpg";
        console.log(showcaseTwo.firstElementChild.attributes[0].textContent, showcaseThree.firstElementChild.attributes[0].textContent);
    }
}
function smallDomChange(x) {
    // Change to Largest Images
    if (x.matches) {
        // Slide Images Small
        slides[0].firstElementChild.src = "showcase_small.png";
        slides[1].firstElementChild.src = "microsoft365_small.jpg";
        slides.forEach((slide)=>console.log(slide.firstElementChild.attributes[0].textContent));
        // Showcases Images Small
        showcaseTwo.firstElementChild.src = "controllers_small.jpg";
        showcaseThree.firstElementChild.src = "showcase3_small.jpg";
        console.log(showcaseTwo.firstElementChild.attributes[0].textContent, showcaseThree.firstElementChild.attributes[0].textContent);
    }
}
// Initial Call on Size width Check:
xlargeDomChange(mmObj1399);
largeDomChange(mmObj1083);
tabletDomChange(mmObj900);
mediumDomChange(mmObjmin540);
smallDomChange(mmObj539);
// Event Listener for Window Width Change
mmObj1399.addEventListener("change", xlargeDomChange);
mmObj1083.addEventListener("change", largeDomChange);
mmObj900.addEventListener("change", tabletDomChange);
mmObjmin540.addEventListener("change", mediumDomChange);
mmObj539.addEventListener("change", smallDomChange);
// Display Cookies Banner
window.addEventListener("load", displayBanner(cookiesBanner));
// Cookies Button Listeners
const cookiesButtons = Array.from(allCookiesButtons);
console.log(cookiesButtons);
// Accept/Reject Buttons Handling
const firstTwoButtons = cookiesButtons.slice(0, 2);
console.log(firstTwoButtons);
firstTwoButtons.forEach((btn)=>btn.addEventListener("click", function(e) {
        const clicked = e.target;
        console.log("button clicked", clicked);
        closeDisplay(cookiesBanner);
    }));
// Manage Cookies Button Handling
const lastButton = cookiesButtons.slice(-1);
console.log(lastButton);
lastButton[0].addEventListener("click", function(e) {
    const clicked = e.target;
    console.log(clicked);
    if (!checkCookieInputs()) disableDialogButtons();
    // Open Dialog
    dialogBox.showModal();
});
// Enable Dialog Buttons
cookiesInputs.addEventListener("click", function(e) {
    const clicked = e.target;
    if (!clicked.id) return;
    console.log(clicked.id);
    if (clicked.id) enableDialogButtons();
});
// Reset All Dialog Button Handler
allDialogButtons[1].addEventListener("click", function(e) {
    const clicked = e.target;
    console.log(clicked);
    // if(clicked.disabled === "false");
    resetCookieInputs();
    disableDialogButtons();
});
// Save Changes Dialog Button Handler
allDialogButtons[2].addEventListener("click", function(e) {
    dialogBox.close();
    closeDisplay(cookiesBanner);
});
//Close Dialog Handler
closeDialogX.addEventListener("click", ()=>{
    dialogBox.close();
    console.log(cookiesInputs.getElementsByTagName("input"));
});
// All Microsoft Dropdown Handler
allMicrosoft.addEventListener("click", (e)=>{
    const clicked = e.target;
    const button = clicked.closest("#all_microsoft");
    console.log(button);
    // Select Dropdown
    const dropdownMenu = button.querySelector(".all_micro_content");
    if ([
        ...button.classList
    ].includes("clicked")) closeDropdown(dropdownMenu, button);
    else {
        // button.classList.add("clicked");
        // Display Dropdown Menu w/ transition
        setTimeout(()=>{
            button.classList.add("clicked");
            dropdownMenu.style.display = "block";
        }, 0);
    }
});
// View Sitemap Listener
SitemapBtn.addEventListener("click", function(e) {
    sitemap.scrollIntoView(true, {
        behavior: "smooth"
    });
});
// Remove Search Bar Focus on Tab Keypress
window.addEventListener("keydown", (event)=>{
    if (document.activeElement === searchInput && event.key === "Tab") searchBar.style.border = "1px solid grey";
    else if (searchBar.classList.contains("activated") && event.key === "Escape") toggleSearch();
    else return;
//    Above only if escape key pressed when search bar active will search bar toggle off.
});
// Close Dialog on Body Click
body.addEventListener("click", function(e) {
    // When input active element add border to searchBar, otherwise standard border
    document.activeElement === searchInput ? searchBar.style.border = "2px solid blue" : searchBar.style.border = "1px solid grey";
    const clicked = e.target;
    const inAllMicroMenu = clicked.closest("#all_microsoft") ? true : false;
    const inMoreMenu = clicked.closest("#more_dropdown") ? true : false;
    // Tablet outside of mainNav Dropdown
    const inMainNav = clicked.closest(".main-nav") ? true : false;
    if (hamburgerButton.checked === true && !inMainNav && clicked != hamburgerButton) {
        console.log("outside dropdown mainNav and menu open");
        mainNav.style.display = "none";
        hamburgerButton.checked = false;
        // close nested dropdowns
        closeNestedDropdowns();
    }
    if (!inAllMicroMenu || inMoreMenu) {
        const button = document.querySelector("#all_microsoft");
        const dropdownMenu = document.querySelector(".all_micro_content");
        closeDropdown(dropdownMenu, button);
    }
    if (!inMoreMenu || inAllMicroMenu) {
        const button = document.querySelector("#more_dropdown");
        const dropdownList = button.querySelectorAll(".more_div");
        // Remove Display for dropdown
        dropdownList.forEach((el)=>el.style.display = "none");
        button.classList.remove("clicked");
    }
});
// More Dropdown Handler
moreButton.addEventListener("click", function(e) {
    const clicked = e.target;
    const button = clicked.closest("#more_dropdown");
    const dropdownList = button.querySelectorAll(".more_div");
    if ([
        ...button.classList
    ].includes("clicked")) {
        // Remove Display for dropdown
        dropdownList.forEach((el)=>el.style.display = "none");
        // Remove clicked class for More button
        button.classList.remove("clicked");
    } else {
        if (window.innerWidth > 955 && window.innerWidth <= 1000) setTimeout(()=>{
            dropdownList[0].style.display = "flex";
            button.classList.add("clicked");
        });
        if (window.innerWidth < 955 && window.innerWidth >= 900) setTimeout(()=>{
            dropdownList[1].style.display = "flex";
            button.classList.add("clicked");
        });
        if (window.innerWidth < 900) console.log("Tablet size: no dropdown");
    }
});
// Slider Component
const sliderBlock = function() {
    //contains all sliders JS and doesn't pollute global namespace other than slider and slides for image changes.
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const btnPlay = document.querySelector(".slider__btn--play");
    const dotContainer = document.querySelector(".dots");
    let curSlide = 0;
    const maxSlide = slides.length; //can also use the length property on the NodeList slides.
    console.log(maxSlide);
    //Functions
    //Creating Dots
    const createDots = function() {
        slides.forEach(function(_, i) {
            dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    };
    const activateDot = function(slide) {
        document.querySelectorAll(".dots__dot").forEach((dot)=>dot.classList.remove("dots__dot--active"));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`) //finds the dot with dots dot class and dataslide # attribute using bracket notation.
        .classList.add("dots__dot--active");
    };
    const changeSlide = function() {
        slider.classList.toggle("reverse");
    };
    //     //Next slide
    const nextSlide = function() {
        if (curSlide === maxSlide - 1) curSlide = 0;
        else curSlide++;
        changeSlide();
        activateDot(curSlide);
    };
    const prevSlide = function() {
        if (curSlide === 0) curSlide = maxSlide - 1;
        else curSlide--;
        changeSlide();
        activateDot(curSlide);
    };
    // Change Play Status
    let intervalId;
    const changePlayStatus = function() {
        console.log(btnPlay.classList);
        if (btnPlay.classList.contains("pause")) {
            console.log("playing");
            btnPlay.firstElementChild.src = "pause-button.png";
            btnPlay.classList.remove("pause");
            btnPlay.classList.add("playing");
            intervalId = setInterval(function() {
                nextSlide();
            }, 5000);
            console.log(intervalId);
        } else {
            console.log("paused");
            btnPlay.firstElementChild.src = "play-button_2.png";
            btnPlay.classList.remove("playing");
            btnPlay.classList.add("pause");
            //clear interval if paused
            clearInterval(intervalId);
            intervalId = null;
        }
    };
    //Init Function (initialise function calls for above)
    const init = function() {
        createDots();
        activateDot(0);
    };
    init();
    //Event Listeners
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
    btnPlay.addEventListener("click", changePlayStatus);
    console.log(btnPlay);
};
sliderBlock();
//Reveal/Unreveal Sticky Back to Top Container on Scroll
const backToTopButton = document.querySelector(".back-to-top");
// Makes use of slider container and root margin
const unrevealBackToTop = function(ent, observer) {
    const [entry] = ent;
    if (!entry.isIntersecting) {
        backToTopButton.style.display = "flex";
        setTimeout(function() {
            console.log("btn visible");
            backToTopButton.classList.remove("faded");
            backToTopButton.classList.add("clear");
        }, 200);
        return;
    }
    backToTopButton.classList.add("faded");
    setTimeout(function() {
        console.log("btn hidden");
        backToTopButton.style.display = "none";
    }, 200);
};
const sectionObserver = new IntersectionObserver(unrevealBackToTop, {
    root: null,
    threshold: 0
});
sectionObserver.observe(slider);
//Init Function
const init = function() {
    closeDisplay(cookiesBanner);
};
init();

//# sourceMappingURL=index.52b1c376.js.map
