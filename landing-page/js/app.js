/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const ulList = document.getElementById("navbar__list");
let listLength = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function toCreateItemsList() {
    for (section of sections) {
        const secName = section.getAttribute("data-nav");
        // we choosed data-nav as it's written with space between section and number 
        const source = section.getAttribute("id");
        const navItems = document.createElement("li");
        navItems.innerHTML = `<a class ="menu__link" href="#${source}">${secName}</a>`;
        ulList.appendChild(navItems);
        // adding sections to the ul list 
    }
}

// whether the section in viewport or not 
function sectionPosition(element) {
    const secPosition = element.getBoundingClientRect();
    // getBoundingClientRect is used to provide information about the size the element and its position relative to the viewport.
    return (secPosition.top >= 0 && secPosition.top < 394);
}

// giving different appearance of active class 
function SpecialActiveClass() {
    for (section of sections) {
        if (sectionPosition(section)) {
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            }
        } else {
            section.classList.remove("your-active-class");
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// to view the navbar
toCreateItemsList();

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", SpecialActiveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
