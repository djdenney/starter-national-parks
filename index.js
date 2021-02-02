console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

const descriptions = document.querySelectorAll(".description");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
  }

const ratings = document.querySelectorAll(".rating .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
      }
  }

const parks = document.querySelectorAll(".park");
const numberParks = parks.length;
const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exiting parks to visit!`;
newElement.classList.add("header-statement");

const header = document.querySelector("header");

header.appendChild(newElement);


const main = document.querySelector("main");
const park = main.querySelector(".park");

main.removeChild(park);

const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
  console.log(event.target);
});

const allBtns = document.querySelectorAll(".rateBtn");

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});

const nameSorter = document.querySelector("#nameSorter");
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const main = document.querySelector("main");
  const parksList = main.querySelectorAll(".park");
  main.innerHTML = "";
  const parksArray = Array.from(parksList);
  parksArray.sort(sortByName);
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
  console.log("You clicked the name sorter");
});

const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
}

const ratingSorter = document.querySelector("#ratingSorter");
ratingSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const main = document.querySelector("main");
  const parksList = main.querySelectorAll(".park");
  main.innerHTML = "";
  const parksArray = Array.from(parksList);
  parksArray.sort(sortByRating);
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
  console.log("You clicked the rating sorter");
});

const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.querySelector(".rating, .value").innerText;
  const parkBRating = parkB.querySelector(".rating, .value").innerText;
  if (parkARating > parkBRating) {
    return -1;
  } else if (parkARating < parkBRating) {
    return 1;
  } else {
    return 0;
  }
}
