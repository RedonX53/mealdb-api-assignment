// Test Driven
function getEndPointData(endPointUrl) {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", endPointUrl);
    var jsonData = JSON.parse(xhr.responseText);
    return;
  };
  xhr.send();
}

getEndPointData("json_data/latest_meals.json");
