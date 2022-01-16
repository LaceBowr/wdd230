/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = document.querySelector("label");
myName.innerText = "Laycie Bowers";
document.body.appendChild(myName);
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

// Step 3: declare and instantiate a variable to hold the current year
let year = document.getElementById("year");
year.innerText = "2022";

// Step 4: place the value of the current year variable into the HTML file
document.body.appendChild(year);

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPhoto = createElement("img");
myPhoto.setAttribute("src", "myPhoto.jpg");
myPhoto.setAttribute("alt", "Laycie by the FLATIRON building NYC");
myPhoto.setAttribute("width", "200px");
myPhoto.setAttribute("height", "200px");


// Step 6: copy your image into the "images" folder
document.images.appendChild(myPhoto);
document.body.appendChild(myPhoto);


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#mainImage');
myPhoto.setAttribute('src', 'images/myPhoto.jpg');



/* ARRAYS */
let myFoods = ["Chicken-salad", "Ice-Cream", "Sushi"];
let myFoods = createElement("ul");
const listFood = document.createElement("li");
const listText = document.createElement("span");
// Step 1: declare and instantiate an array variable to hold your favorite foods
myFoods.innerText = "Favorite foods:";
listFood.appendChild(listText);
listText.textContent = myFoods;

// Step 2: place the values of the favorite foods variable into the HTML file
addFood.innerText = "Chicken-salad";
listFood.appendChild(listText);
listText.textContent = myFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
addFood.innerText = "Ice-Cream";
listFood.appendChild(listText);
listText.textContent = myFoods;

// Step 4: add the variable holding another favorite food to the favorite food array
addFood.innerText = "Sushi"
listFood.appendChild(listText);
listText.textContent = myFoods;

// Step 5: repeat Step 2
let addFood = listFood.append(listText);
addFood.innerText = "PB&J";
listFood.appendChild(listText);
listText.textContent = myFoods;

// Step 6: remove the first element in the favorite foods array
let removeFood = listFood.remove(listFood, 0);
listText.textContent = myFoods;

// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2



