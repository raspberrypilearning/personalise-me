// Place Hero slider variables here 
let currentHeroIndex = 0;
const totalHeroSlides = document.querySelectorAll('.hero-slide').length;

// Place Hero slider next button function here 
function nextHero() {
    currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;

    // Function to update the slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
    heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
}

// Place Hero slider previous button function here 
function prevHero() {
    currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;

    // Function to update the slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
    heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
}

// Update Create Comic function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    inputSection.style.display = "none";
    displaySection.style.display = "flex";

    displaySummary(); // Call displaySummary after all changeDisplay actions
}

// Function to display summary
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

// Light mode function 
document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById("lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
    lightModeToggle.checked = isLightMode;
  
    lightModeToggle.addEventListener("change", function () {
      const isLightMode = lightModeToggle.checked;
  
      // Check if light mode is already in the desired state
      if (isLightMode !== document.body.classList.contains("light-mode")) {
        // Update body class and store the user's preference in local storage
        document.body.classList.toggle("light-mode", isLightMode);
        localStorage.setItem("lightMode", isLightMode.toString());
      }
    });
});

// Update Copyright Year function 

// Captcha Function

// Function to logout and clear local storage

