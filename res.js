// Select elements using correct class names and quotation marks
burger = document.querySelector(".burger");
headerMenu = document.querySelector(".Decktop");
navLinks = document.querySelector(".hidden");
// navLinks.classList.toggle('visible'); // Add this line


// Add event listener to burger
burger.addEventListener('click', () => {
  // Toggle classes using classList.toggle
  navLinks.classList.toggle('v-class');
  headerMenu.classList.toggle('h-nav');
});
