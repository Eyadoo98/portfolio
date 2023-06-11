const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");
const hLinks = document.querySelectorAll("#hLink");

// for toggling menu show and hide
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

// for closing menu when link is clicked
hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

// for toggle dark mode
moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});
