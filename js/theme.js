// This function is called when the page is first loaded
function initTheme() {

    // Swith to the dark theme if the user has dark mode enabled
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        switchToDarkTheme();
        return;
    }

    // Try to get the client theme setting
    let theme = localStorage.getItem("theme");

    // If there is none, this is their first visit
    if (!theme) {
        // Set the theme to light
        localStorage.setItem("theme", "light");
        theme = "light";
    }

    switch (theme) {
        case "dark":
            switchToDarkTheme();
            break;
        case "light":
            switchToLightTheme();
            break;
        default:
            switchToLightTheme();
            break;
    }
}

/**
 * Toggles the theme. This is called on button press
 */
function toggleTheme() {

    const currentTheme = localStorage.getItem("theme");

    switch (currentTheme) {
        case "dark":
            localStorage.setItem("theme", "light");
            switchToLightTheme();
            break;
        case "light":
            localStorage.setItem("theme", "dark");
            switchToDarkTheme();
            break;
        default:
            localStorage.setItem("theme", "light");
            switchToLightTheme();
            break;
    }
}

function switchToLightTheme() {
    // Change button icon
    const button = document.getElementById("themeSwitchButton");
    button.className = "fas fa-moon my-float";

    // Change stylesheets
    document.getElementById("css-light").rel = "stylesheet";
    document.getElementById("css-dark").rel = "stylesheet alternate";
}

function switchToDarkTheme() {

    // Change button icon
    const button = document.getElementById("themeSwitchButton");
    button.className = "far fa-moon my-float";

    // Change stylesheets
    document.getElementById("css-dark").rel = "stylesheet";
    document.getElementById("css-light").rel = "stylesheet alternate";
}

initTheme();