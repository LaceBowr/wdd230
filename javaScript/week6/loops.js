let food = ""
const foods = [];
const places = [];

document.querySelector("#submitFood").addEventListener("click", newFood);
document.querySelector("#submitPlace").addEventListener("click", newPlace);
document.querySelector("#favorite-foods").addEventListener("click", completeFood);

function addFoodItem(food, index)
{
  let ul = document.getElementById("favorite-foods");
  let li = document.createElement("li");
  li.innerHTML = `<li><p>${food.detail}</p></li>`;
  ul.appendChild(li);
}

function newFood (){
    // get the value entered into the foods array input
    let food = document.querySelector("#favorite-food").value; 
    // add it to our arrays tasks
    foods.push({detail: food, complete: false});
    // render out the list.
    let ul = document.getElementById("favorite-foods");
    createHtmlList(foods, getFoodListItem, ul);
    //renderFoods(foods)
}

function newPlace (){
  // get the value entered into the foods array input
  let location = document.querySelector("#place").value;
  let livedlength = document.querySelector("#lived").value; 
  // add it to our arrays tasks
  places.push({place: location, length: livedlength});
  // render out the list.
  let dl = document.getElementById("places-lived");
  createHtmlList(places, getPlaceDt, dl);
  //renderFoods(foods)
}

function renderFoods(foods){
  //Make sure list is empty so it only prints the one item
  let ul = document.getElementById("favorite-foods");
  ul.innerHTML = "";
  foods.map(addFoodItem);
  //document.querySelector("#favorite-foods").innerHTML = foods.map((food) => `<li>${food.detail}<li>`).join("");
}

let listInnerHtml = "";

// Function that takes a food string and returns some embedded html
function getFoodListItem(food, index)
{
  listInnerHtml = listInnerHtml + `<li>${food.detail}</li>`;
}

function getPlaceDt(place, index)
{
  listInnerHtml = listInnerHtml + `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

function createHtmlList(mylist, listItemCallback, listElement)
{ 
  listInnerHtml = "";
  mylist.forEach(listItemCallback);
  listElement.innerHTML = listInnerHtml;
}

function completeFood(food_detail) {
    // In this case we need to find the index of the task so we can modify it.
    const foodIndex = foods.findIndex(
      (food) => food.detail === food_detail
    );
    // once we have the index we can modify the complete field.
    // tasks[taskIndex].completed ? false : true is a ternary expression.
    // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
    foods[foodIndex].complete = foods[foodIndex].complete ? false : true;
    renderFoods(foods)
    console.log(foods);
  if (value.target.getAttribute('data-function') == 'complete')
  {
    completeFood(food_detail);
  }
}

