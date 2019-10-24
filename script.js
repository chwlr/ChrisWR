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
  console.log("hellow");
  homePage.style.display = "none";
  menu.style.display = "block";
}
function closeMenu(e) {
  e.preventDefault();
  menu.style.display = "none";
  homePage.style.display = "block";
}

window.addEventListener("mousemove", e => {
  let eyeLeft = document.querySelector(".eye-left");
  let mouseX = eyeLeft.getBoundingClientRect().left;
  let mouseY = eyeLeft.getBoundingClientRect().top;
  let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
  let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
  eyeLeft.style.transform = `rotate(${rotationDegrees}deg)`;
});
