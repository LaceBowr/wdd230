/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let aboutMe = {
  name: "Laycie Bowers",
  photo: "images/meYellowstone.jpg",
  favoriteFoods:
  [
    "Sushi",
    "CostaVida",
    "PB&J"],
  hobbies:
  [
    "Snowboarding",
    "Sewing",
    "Robotics"
  ]
}  
;



// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string


//document.setAttribute("photo").innerHTML = aboutMe.photo;

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )


// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings


// Step 6: Add another property named placesLived with a value of an empty array
aboutMe.placesLived = [
  {
    place: "Elsinore, Utah",
    length: "18 years"
  },
  {
    place: "Price, Utah",
    length: "2 years"
  },
  {
    place: "Cedar City, Utah",
    length: "4 months"
  },
  {
    place: "Boston, MA",
    length: "18 months"
  },
  {
    place: "Provo, Utah",
    length: "19 years"
  }
];


// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = aboutMe.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", aboutMe.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt", aboutMe.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
aboutMe.favoriteFoods.forEach((food)=> {
  let favoriteFoodElem = document.createElement('li');
  favoriteFoodElem.textContent = food;
  
  
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFoodElem);  
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
aboutMe.hobbies.forEach((hobby)=> {
  let hobbyActivity = document.createElement('li');
  hobbyActivity.textContent = hobby;
  // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.querySelector("#hobbies").appendChild(hobbyActivity);
});




// Step 8: For each object in the <em>placesLived</em> property:
//let len = aboutMe.placeLived.length;
for(let i = 0; i < aboutMe.placesLived.length; i++)
{
  let placesLived = document.createElement("dt");
  placesLived.textContent = aboutMe.placesLived[i].place;
  document.querySelector("#places-lived").appendChild(placesLived);
  let placesLength = document.createElement("dd");
  placesLength.textContent = aboutMe.placesLived[i].length;
  document.querySelector("#places-lived").appendChild(placesLength);
}

//aboutMe.placesLived.forEach((placelived)=> {
//  let placesLived = document.createElement("dt");
//  placesLived.textContent = placelived.place;
//  document.querySelector("#places-lived").appendChild(placesLived);
//});

//aboutMe.placesLength.forEach((placeLength)=> { 
//  let placesLength = document.createElement("dd");
//  placesLength.textContent = placeLength.place;
//  document.querySelector("#places-lived").appendChild(placesLength);
//});

//

// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived