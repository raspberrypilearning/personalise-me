// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;

// Update Create Comic function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    inputSection.style.display = "none";
    displaySection.style.display = "flex";

    // Check if all changeDisplay actions are completed
    if (id === "origin") {
        displaySummary(); // Call displaySummary after all changeDisplay actions
    }
}

function displaySummary() {
    var summaryParagraph = document.getElementById("summary-paragraph");

    var name = document.getElementById("name-span").textContent;
    var abilities = document.getElementById("class-span").textContent;
    var appearance = document.getElementById("description-span").textContent;
    var origin = document.getElementById("origin-span").textContent;

    summaryParagraph.textContent = `Your superhero name is ${name}. 
    Your abilities are ${abilities}. Your appearance is ${appearance}. 
    Your origin story is ${origin}.`;

    document.getElementById("summary-section").style.display = "block";
}

// Hero slider function 
let currentHeroIndex = 0;
const totalHeroSlides = document.querySelectorAll('.hero-slide').length;

function nextHero() {
    currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
    updateHeroSlider();
}

function prevHero() {
    currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;
    updateHeroSlider();
}

function updateHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
    heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
}

