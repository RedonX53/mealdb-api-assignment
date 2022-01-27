var sectionMeta = [
  {
    url: "json_data/latest_meals.json",
    getElementId: "latest-meal-item",
    loopLimit: 7,
    divClass: "latest-item",
    getLink: "#",
  },
  {
    url: "json_data/popular_ingredients.json",
    getElementId: "popular-ingredients-item",
    loopLimit: 3,
    divClass: "popular-item",
    getLink: "#",
  },
  {
    url: "json_data/random_meals.json",
    getElementId: "random-meals-item",
    loopLimit: 7,
    divClass: "random-item",
    getLink: "#",
  },
  {
    url: "json_data/random_ingredients.json",
    getElementId: "random-ingredients-item",
    loopLimit: 3,
    divClass: "random-item",
    getLink: "#",
  },
];
sectionMeta.forEach((metaData) => {
  let url = `${metaData.url}`;
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => coinData(data));

  const coinData = (data) => {
    console.log(data);
    let latestMeal = document.getElementById(`${metaData.getElementId}`);
    for (var i = 0; i <= metaData.loopLimit; i++) {
      latestMeal.insertAdjacentHTML(
        "beforeend",
        `<div class="${metaData.divClass}">
        <a href="${metaData.getLink}"> <img src="${data[i].imgPath}" /></a>
         <h3>${data[i].mealName}</h3>
        </div>`
      );
    }
  };
});

// function extractData(className,imgLinkToApply,imgPath,mealName){
//   return generateData(className,imgLinkToApply,imgPath,mealName);
// }

// function generateData(title,img) {

//      $.get("templete.html", (data) => {
//       let newData = data.replace("##IMG##", img);
//       newData = newData.replace("##TITLE##", title);

// }

// extractData(
//   `${metaData.divClass}`,
//   `${metaData.getLink}`,
//   `${data[i].imgPath}`,
//   `${data[i].mealName}`
// );
