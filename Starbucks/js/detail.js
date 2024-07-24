const background = document.querySelector("#background");
let searchParams = new URLSearchParams(location.search);
let id = searchParams.get("id");
const drinkInfo = [
  {
    image: "img/TropicalCitrusEnergyDrink.avif",
    title: "Iced Energy",
    price: "5$",
    id: 1,
  },
  {
    image: "img/SBX20190617_CaffeAmericano.avif",
    title: "Hot Coffees",
    price: "10$",
    id: 2,
  },
  {
    image: "img/SBX20221130_WhiteChocolateMacadamiaColdBrew.avif",
    title: "Cold Coffees",
    price: "15$",
    id: 3,
  },
  {
    image: "img/SummerBerryRefreshersLemonade.avif",
    title: "Starbucks Refreshers® Beverages",
    price: "25$",
    id: 4,
  },
  {
    image: "img/SBX20211210_MochaCookieCrumbleFrapp.avif",
    title: "Frappuccino® Blended Beverages",
    price: "20$",
    id: 5,
  },
];

let result = drinkInfo.find(function (e) {
  return e.id === +id;
});
console.log(result);
let imageElem = document.createElement("img");
let titleElem = document.createElement("h1");
let priceElem = document.createElement("h3");
let div = document.createElement("div");
imageElem.src = result.image;
titleElem.innerHTML = result.title;
priceElem.innerHTML = result.price;
priceElem.classList.add("d-block");
titleElem.classList.add("text-white", "ms-5");
priceElem.classList.add("ms-5", "mt-3");
div.append(titleElem, priceElem);
background.append(imageElem, div);
