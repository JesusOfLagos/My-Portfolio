const openSubMenu = document.querySelector(".fa-chevron-down");
const subMenu = document.querySelector(".sub-menu");

openSubMenu.addEventListener("click", function () {
  if (subMenu.style.display !== "block") {
    subMenu.style.display = "block";
  } else {
    subMenu.style.display = "none";
  }
});

// mobile nav

const burger = document.querySelector(".burger");
const menu = document.querySelector("header nav ul");

burger.addEventListener("click", function () {
  menu.classList.toggle("open");
});

let examination = burger;
alert(burger);
