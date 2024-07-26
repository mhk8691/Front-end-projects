let dontLike = document.querySelector("#dont-like");
let like = document.querySelector("#like");

dontLike.addEventListener("click", () => {
  localStorage.setItem("like", JSON.stringify(true));
  dontLike.classList.add("d-none");
  like.classList.remove("d-none");
});
like.addEventListener("click", () => {
  localStorage.setItem("like", JSON.stringify(false));
  like.classList.add("d-none");
  dontLike.classList.remove("d-none");
});
window.addEventListener("load", () => {
  let isLike = JSON.parse(localStorage.getItem("like"));
  if (isLike) {
    like.classList.remove("d-none");
    dontLike.classList.add("d-none");
  } else {
    like.classList.add("d-none");
    dontLike.classList.remove("d-none");
  }
});
