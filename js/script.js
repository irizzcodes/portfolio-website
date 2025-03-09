function getCSSVar(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim() || "#00FFFF";
}

function loadParticles() {
    const accentColor = getCSSVar("--accent");

    tsParticles.load("particles-js", {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 1100 } },
            color: { value: accentColor },
            shape: { 
                type: "circle",
                stroke: { width: 0.6, color: accentColor },
                polygon: { nb_sides: 6 }
            },
            opacity: { value: 0.8, random: false },
            size: { value: 2, random: true },
            line_linked: { 
                enable: true, 
                distance: 180, 
                color: accentColor, 
                opacity: 0.4, 
                width: 1 
            },
            move: { enable: true, speed: 0.5, random: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "window",  
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 150, line_linked: { opacity: 1 } },
                push: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });
}

// Load particles after the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(loadParticles, 100);
});

// Reload particles when the theme changes
const observer = new MutationObserver(() => {
    tsParticles.dom().forEach((instance) => instance.destroy()); 
    setTimeout(loadParticles, 50); 
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });


// apply theme
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    document.getElementById("light-switch").style.display = theme === "light" ? "block" : "none";
    document.getElementById("dark-switch").style.display = theme === "dark" ? "block" : "none";
}

// load theme when refreshing ( from local storage )
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});

// button function 
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    applyTheme(newTheme); 
    localStorage.setItem("theme", newTheme); 
    console.log("Theme changed to:", newTheme);
}

window.addEventListener("load", () => {
    setTimeout(() => {
        const spinner = document.querySelector(".spinner");
        const preloader = document.getElementById("preloader");

        spinner.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out"; // Smooth transition
        spinner.style.transform = "scale(0)"; // Shrinks the spinner
        spinner.style.opacity = "0"; // Makes it disappear

        setTimeout(() => {
            preloader.style.display = "none"; // Fully remove preloader
            document.body.style.visibility = "visible"; // Show content
            document.body.style.overflow = "auto"; // Enable scrolling
        }, 500); // Matches spinner fade-out duration
    }, 100); // Keep spinner visible for 0.5s
});

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
  }


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("line");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }











