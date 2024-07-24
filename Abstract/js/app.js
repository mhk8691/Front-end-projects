let menuBtn = document.querySelector(".menuBtn");
let menu = document.querySelector(".menu");
let signInBtn = document.querySelector("#signin");
let info = document.querySelector("#info");
let logout = document.querySelector("#logout");
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

window.addEventListener("load", () => {
  let isLogin = localStorage.getItem("isLogin");
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (isLogin == "false") {
    signInBtn.classList.remove("d-none");
    info.classList.add("d-none");
    logout.classList.add("d-none");
  } else {
    signInBtn.classList.add("d-none");
    info.classList.remove("d-none");
    logout.classList.remove("d-none");
    info.innerHTML = userInfo.fullName;
  }
});
