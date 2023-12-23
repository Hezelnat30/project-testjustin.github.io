let prevScrollPos = window.scrollY;
const header = document.getElementById("navbar");
let isNavbarVisible = true;

window.onscroll = function () {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos && !isNavbarVisible) {
    // Scrolling up, show navbar
    header.style.transition = "background-color 0.5s ease-in-out";
    header.style.backgroundColor = "rgba(0, 123, 255, 0.5)";
    isNavbarVisible = true;
  } else if (prevScrollPos < currentScrollPos && isNavbarVisible) {
    // Scrolling down, hide navbar
    header.style.transition = "background-color 0.5s ease-in-out";
    header.style.backgroundColor = "rgba(0, 123, 255, 0)";
    isNavbarVisible = false;
  }

  prevScrollPos = currentScrollPos;
};
