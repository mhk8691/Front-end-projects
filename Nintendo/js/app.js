let dontLike = document.querySelector("#dont-like");
let like = document.querySelector("#like");
let imageSlide = document.querySelector("#image-slide");
let slideBtnLeft = document.querySelector("#btn-slide-left");
let slideBtnRight = document.querySelector("#btn-slide-right");
const cart = document.querySelector("#cart");
const cartSection = document.querySelector("#cart-section");
const price = document.querySelector("#price");
const titleCart = document.querySelector("#title-cart");
const imageCart = document.querySelector("#image-cart");
const gameCountElem = document.querySelector("#count");
const plusBtn = document.querySelector("#plus");
const minBtn = document.querySelector("#min");
const message = document.querySelector("#message");
let count = 0;
let imageObj = [{ src: "img/screenshot03.avif" }, { src: "img/hero.avif" }];

const addCartBtn = document.querySelector("#add-cart");

imageSlide.src = imageObj[count].src;

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
  let game = JSON.parse(localStorage.getItem("game"));
  if (isLike) {
    like.classList.remove("d-none");
    dontLike.classList.add("d-none");
  } else {
    like.classList.add("d-none");
    dontLike.classList.remove("d-none");
  }
  if (game.status){
    message.classList.remove('d-none')
    addCartBtn.classList.add('d-none')
  }
});

slideBtnRight.addEventListener("click", () => {
  count++;
  if (count < imageObj.length) {
    console.log(count);
    console.log("lenght", imageObj.length);
    imageSlide.src = imageObj[count].src;
  } else {
    count = 0;
    imageSlide.src = imageObj[count].src;
    console.log(count);
    console.log("lenght", imageObj.length);
  }
});
slideBtnLeft.addEventListener("click", () => {
  count--;
  if (count >= 0) {
    console.log(count);
    console.log("lenght", imageObj.length);
    imageSlide.src = imageObj[count].src;
  } else {
    count = imageObj.length - 1;
    imageSlide.src = imageObj[count].src;
    console.log(count);
    console.log("lenght", imageObj.length);
  }
});

addCartBtn.addEventListener("click", () => {
  let gameObj = {
    title: "Stardew Valley",
    img: "img/hero.avif",
    price: "$14.99",
    status: false,
    gameCount: 1,
  };
  gameObj.status = true;
  localStorage.setItem("game", JSON.stringify(gameObj));
  location.reload();
  message.classList.remove("d-none");
  addCartBtn.classList.add("d-none");
  
});

cart.addEventListener("click", (e) => {
  e.preventDefault();
  cartSection.classList.toggle("d-inline");
  cartSection.style.animation = "cart .7s ease ";
  let gameObj = JSON.parse(localStorage.getItem("game"));

  if (gameObj.status) {
    price.innerHTML = gameObj.price;
    titleCart.innerHTML = gameObj.title;
    imageCart.src = gameObj.img;
    gameCountElem.innerHTML = gameObj.gameCount;
  } else {
    cartSection.innerHTML = "Your shopping cart is empty.";
  }
});
plusBtn.addEventListener("click", () => {
  let count = +gameCountElem.innerHTML;
  count++;
  message.classList.remove("d-none");
  addCartBtn.classList.add("d-none");
  gameCountElem.innerHTML = count;
  let gameObj = {
    title: "Stardew Valley",
    img: "img/hero.avif",
    price: "$14.99",
    status: true,
    gameCount: count,
  };
  localStorage.setItem("game", JSON.stringify(gameObj));
});
minBtn.addEventListener("click", () => {
  let count = +gameCountElem.innerHTML;
  count--;
  gameCountElem.innerHTML = count;
  if (count != "0") {
    var gameObj = {
      title: "Stardew Valley",
      img: "img/hero.avif",
      price: "$14.99",
      status: true,
      gameCount: count,
    };
  }
  if (count == "0") {
    var gameObj = {
      title: "Stardew Valley",
      img: "img/hero.avif",
      price: "$14.99",
      status: false,
      gameCount: 0,
    };
    addCartBtn.classList.remove("d-none");
      message.classList.add("d-none");
  }
  localStorage.setItem("game", JSON.stringify(gameObj));
});
