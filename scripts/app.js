(function () {
  let url = "json_data/latest_meals.json";
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => coinData(data));

  const coinData = (data) => {
    console.log(data);
    let latestMeal = document.getElementById("latest-meal-item");
    for (var i = 0; i <= 7; i++) {
      latestMeal.insertAdjacentHTML(
        "beforeend",
        `<div class="latest-item">
    <img src="${data[i].imgPath}" />
    <h3>${data[i].mealName}</h3>
  </div>`
      );
    }
  };
})();

(function () {
  let url = "json_data/popular_ingredients.json";
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => coinData(data));

  const coinData = (data) => {
    let latestMeal = document.getElementById("popular-ingredients-item");
    for (var i = 0; i <= 3; i++) {
      latestMeal.insertAdjacentHTML(
        "beforeend",
        `<div class="popular-item">
    <img src="${data[i].imgPath}" />
    <h3>${data[i].mealName}</h3>
  </div>`
      );
    }
  };
})();
(function () {
  let url = "json_data/random_meals.json";
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => coinData(data));

  const coinData = (data) => {
    let latestMeal = document.getElementById("random-meals-item");
    for (var i = 0; i <= 7; i++) {
      latestMeal.insertAdjacentHTML(
        "beforeend",
        `<div class="random-item">
    <img src="${data[i].imgPath}" />
    <h3>${data[i].mealName}</h3>
  </div>`
      );
    }
  };
})();
(function () {
  let url = "json_data/random_ingredients.json";
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => coinData(data));

  const coinData = (data) => {
    let latestMeal = document.getElementById("random-ingredients-item");
    for (var i = 0; i <= 3; i++) {
      latestMeal.insertAdjacentHTML(
        "beforeend",
        `<div class="random-item">
    <img src="${data[i].imgPath}" />
    <h3>${data[i].mealName}</h3>
  </div>`
      );
    }
  };
})();
