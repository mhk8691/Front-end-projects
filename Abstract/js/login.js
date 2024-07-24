let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
window.addEventListener("load", () => {
  localStorage.setItem("isLogin", "false");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  email = email.value;
  password = password.value;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo) {
    if (email == userInfo.email && password == userInfo.password) {
      localStorage.setItem("isLogin", "true");
      window.location.href = "index.html";
    }
  } else {
    localStorage.setItem("isLogin", "false");
  }
});
