const row = document.querySelector("#row");
const drinkInfo = [
  { image: "img/TropicalCitrusEnergyDrink.avif", title: "Iced Energy", id: 1 },
  { image: "img/SBX20190617_CaffeAmericano.avif", title: "Hot Coffees", id: 2 },
  {
    image: "img/SBX20221130_WhiteChocolateMacadamiaColdBrew.avif",
    title: "Cold Coffees",
    id: 3,
  },
  {
    image: "img/SummerBerryRefreshersLemonade.avif",
    title: "Starbucks Refreshers® Beverages",
    id: 4,
  },
  {
    image: "img/SBX20211210_MochaCookieCrumbleFrapp.avif",
    title: "Frappuccino® Blended Beverages",
    id: 5,
  },
];

drinkInfo.forEach((element) => {
  let image = document.createElement("img");
  let title = document.createElement("span");
  let col = document.createElement("div");
  let div = document.createElement("div");
  let link = document.createElement("a");
  link.href = `detail.html`;
  col.classList.add("col-6");
  image.src = element.image;
  title.innerHTML = element.title;
  title.classList.add("ms-3", "fw-medium");
  link.append(image, title);
  div.append(link);
  col.append(div);
  row.append(col);
});
