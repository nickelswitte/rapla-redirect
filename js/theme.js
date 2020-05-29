
// This function is called when the page is first loaded
function initTheme() {

    // Try to get the client theme setting
    var theme = localStorage.getItem('theme');

    // If there is none, this is their first visit
    if (theme == null) {

        // Set the theme to light
        localStorage.setItem('theme', 'light');
    }

    // Otherwise style like wished
    if (theme == "dark") {
        switchToDarkTheme();
    } else if (theme == "light") {
        switchToLightTheme();
    }
}

/**
 * Toggles the theme. This is called on button press
 */
function toggleTheme() {

    var currentTheme = localStorage.getItem('theme');

    switch (currentTheme) {
        case "dark":
            localStorage.setItem('theme', 'light');
            switchToLightTheme();
            break;
        case "light":
            localStorage.setItem('theme', 'dark');
            switchToDarkTheme();
            break;
        default:
            // What to do here?
            
    }
}

function switchToLightTheme() {

    // Change button icon
    var button = document.getElementById("themeSwitchButton");
    button.className = 'fas fa-moon my-float';

    // Change stylesheets
    document.getElementById("css-light").rel = "stylesheet";
    document.getElementById("css-dark").rel = "stylesheet alternate";

}

function switchToDarkTheme() {

    // Change button icon
    var button = document.getElementById("themeSwitchButton");
    button.className = 'far fa-moon my-float';

    // Change stylesheets
    document.getElementById("css-dark").rel = "stylesheet";
    document.getElementById("css-light").rel = "stylesheet alternate";

}

initTheme();