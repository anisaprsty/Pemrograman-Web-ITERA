// DOM
const blogContainer = document.querySelector(".blog");
const toggleButton = document.querySelector("#toggle-btn");

// Function to switch the theme
const switchTheme = () => {
  blogContainer.classList.toggle("dark");
};

// Bind event to the toggle button
toggleButton.addEventListener("click", switchTheme);
