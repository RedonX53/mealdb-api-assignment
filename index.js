// function requestEndPoint(endPointURL,loopController,imageKey,titleKey,insertId,htmlChef) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("Get", endPointURL);
//   xhr.onload = function () {
//     const dataX = JSON.parse(xhr.responseText);
//     var key = Object.keys(dataX)[0];
//     var objectList = dataX[key];
//     getListData(objectList,loopController,imageKey,titleKey,insertId,htmlChef);
//   };
//   xhr.send();
// }

// function getListData(data,loopController,imageKey,titleKey,insertId,htmlChef) {
//   console.log(imageKey, titleKey);
//   for (let i = 0; i < loopController; i++) {
//     var title = data[i][titleKey];
//     var img = data[i][imageKey];
//     document.getElementById(insertId).innerHTML += htmlChef(title, img);
//   }
// }
// requestEndPoint("json_data/latest_meals.json",8,"imgPath","mealName","latest-meal-item",generateHtml);
// requestEndPoint("popularMeal.json",4,"strCategoryThumb","strCategory","popular-row",generateHtml);
// requestEndPoint("randomMeal.json",8,"strMealThumb","strMeal","random-row",generateHtml);
// requestEndPoint("randomingredients.json",4,"strCategoryThumb","strCategory","ingredient-row",generateHtml);

// function generateHtml(title, img) {
//   return  `<div class="random-item">
//   <img src="${img}" />
//   <h3>${title}</h3>
// </div>`;
// }

