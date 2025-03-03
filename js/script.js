function getCSSVar(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim() || "#ffffff";
}

function loadParticles() {
    const accentColor = getCSSVar("--accent"); // Fetch the dynamic accent color

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
    setTimeout(loadParticles, 100); // Slight delay to ensure CSS is applied
});

// Reload particles when the theme changes
const observer = new MutationObserver(() => {
    tsParticles.dom().forEach((instance) => instance.destroy()); // Destroy existing particles
    setTimeout(loadParticles, 50); // Reload with the updated theme
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
