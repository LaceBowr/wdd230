/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let date = new Date();
// Step 2: Declare another variable to hold the day of the week
let dayOfWeek = date.getDay();
document.getElementById("message1").innerText = dayOfWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
//let date = dayOfWeek + date;

// Step 4: Declare a variable to hold a message that will be displayed
;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
let firstmessage = null;

if ((dayOfWeek != 6 &&  dayOfWeek != 7))
{
    //display "Hang in there" because it is a weekday
    firstmessage = "Hang in there!";
} 
else 
{
    //display "Whoohoo! It is the weekend! because it is a saturday or sunday"
    // Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
    firstmessage = "Woohoo! It is the weekend!";
}
    
document.querySelector("#message1").textContent = firstmessage;
    /* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let dayName = null;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch(dayOfWeek)
{
    case 1:
        dayName = "Monday";
        break;
    case 2: 
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thrusday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default: dayName = "unknown";
        break;

}

document.querySelector("#message2").textContent = dayName;

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2


    /* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let templesArrayList = [];
const output = (temples) => {
    temples.forEach(
        temple => {
        let article = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let location = document.createElement("h4");
        location.textContent = temple.location;
        let dedicated = document.createElement("h4");
        dedicated.textContent = temple.dedication;
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);

        article.appendChild(templeName);
        article.appendChild(location);
        article.appendChild(dedicated);
        article.appendChild(img);

        document.querySelector('#temples').appendChild(article);
    })
};

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples


// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
    // Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
    .then(response => response.json())
    // Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
    .then(temples => {
            templesArrayList = temples;
            output(templesArrayList);
            // Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

            // Step 7: Finally, call the output function and pass it the list of temples
            const reset = () => {
                    document.querySelector('#temples').innerHTML = '';

                    // Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

                    // Step 9: Declare a function named sortBy that does the following:
                    // - Calls the reset function
            }
            const sortBy = () => {
                reset();
                let filter = document.querySelector("#sortBy").value;
                switch (filter) {
                    case "templeNameAscending":
                        output(templesArrayList.sort(
                            (temple1, temple2) => {
                                let templeName1 = temple1.templeName.toLowerCase();
                                let templeName2 = temple2.templeName.toLowerCase();
                                if (templeName1 < templeName2) return -1;
                                else if (templeName1 > templeName2) return 1;
                                else return 0;
                            }));
                        break;
                    case "templeNameDescending":
                        output(templesArrayList.sort(
                            (temple1, temple2) => {
                                let templeName1 = temple1.templeName.toLowerCase();
                                let templeName2 = temple2.templeName.toLowerCase();
                                if (templeName1 > templeName2) return -1;
                                else if (templeName1 < templeName2) return 1;
                                else return 0;
                            }));
                        break;
                    default:
                        //using ternary operators
                        output(templesArrayList.sort(
                            (temple1, temple2) =>
                            temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase() ? 1 :
                            temple2.templeName.toLowerCase() > temple1.templeName.toLowerCase() ? -1 : 0));
                        break;
                }
            }
            document.querySelector("#sortBy").addEventListener("change", sortBy);
            // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
                    //document.querySelector("#templeNameAscending").innerHTML.output = sortBy(asssending);
                    //document.querySelector("#templeNameDescending").innerHTML.output = sortBy(descending);
                    // - Calls the output function passing in the sorted list of temples

                    // Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

                    //Element.addEventListener('change', function(){
                    //select ascending or descending in the drop menu
                    //if change = templeNameAscending sortBy();
                    //console.log();
                    //if change =templeNameDescending sortBy();
                    //console.log();
                    //return sorting);

                    /* STRETCH */

                    // Consider adding a "Filter by" feature that allows users to filter the list of temples
                    // This will require changes to both the HTML and the JavaScript files
    })