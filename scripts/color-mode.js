/**
 * This function sets the color mode of the app based
 * on a variable stored in localStorage
 */
const setColorMode = () => {
  const colorMode = localStorage.getItem("mode");
  const href = colorMode === "dark" ? "styles/dark-mode.css" : "styles/light-mode.css";
  const link = document.getElementById("stylesheet");
  link.setAttribute("href", href);
}

/**
 * This function toggles the color mode and refreshes 
 * the page so the color mode can take effect
 */
const toggleColorMode = () => {
  const colorMode = localStorage.getItem("mode");
  const mode = colorMode === "dark" ? "light" : "dark";
  localStorage.setItem("mode", mode);
  location.reload();
}

window.onload = () => {
  setColorMode(); // Set the color mode on load

  const toggleBtn = document.getElementById("toggleBtn");
  if (toggleBtn) {
    // The toggle button is not on all pages
    // this checks if the button is present before adding the event listener
    toggleBtn.addEventListener("click", toggleColorMode);
  }
}
