let menuBtn = document.querySelector(".menuBtn");
let menu = document.querySelector(".menu");
let toggle = true;
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("d-flex");
  menu.classList.toggle("d-xl-none");
  menu.classList.toggle("d-none");
  if (toggle) {
    menuBtn.src = "img/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
    toggle = false;
  } else {
    menuBtn.src = "img/menu-regular-24.png";
    toggle = true;
  }
});
