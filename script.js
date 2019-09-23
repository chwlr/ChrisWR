const btnMenu = document.querySelector(".btn-menu"),
  btnClose = document.querySelector(".btn-close"),
  homePage = document.querySelector("#homePage"),
  menu = document.querySelector("#menu");

loadEventListeners();

function loadEventListeners() {
  btnMenu.addEventListener("click", openMenu);
  btnClose.addEventListener("click", closeMenu);
}

function openMenu(e) {
  e.preventDefault();
  homePage.style.display = "none";
  menu.style.display = "block";
}
function closeMenu(e) {
  e.preventDefault();
  menu.style.display = "none";
  homePage.style.display = "block";
}
