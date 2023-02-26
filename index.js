// Get all nav links and their corresponding sections
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

console.log(navLinks)
// Add a scroll event listener to the window object
window.addEventListener("scroll", function() {
  // Get current scroll position
  const currentScroll = window.scrollY;

  // Loop through each section
  sections.forEach(function(section) {
    // Get the top and bottom positions of the section
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if the top of the section is less than or equal to the current scroll position
    if (sectionTop <= currentScroll && sectionBottom > currentScroll) {
      // Add "active-link" class to corresponding nav link
      const sectionId = section.getAttribute("id");
      const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      navLinks.forEach(function(navLink) {
        navLink.classList.remove("active-link");
      });
      correspondingNavLink.classList.add("active-link");
    }
  });
});
