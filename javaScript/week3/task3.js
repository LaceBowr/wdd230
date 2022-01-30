/* Lesson 3 */

/* FUNCTIONS */

// Step 5A: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
    return number1 + number2; // Step 5B: In the function, return the sum of the parameters number1 and number2
}
// Step 5C: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    let num1 = parseInt(document.getElementById("addend1").value);
    let num2 = parseInt(document.getElementById("addend2").value);
    let sum = add(num1, num2);
    document.getElementById("sum").value = sum;
}
// Step 5D: Assign the return value to an HTML form element with an ID of sum
// Step 5E: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
.................................................................................................................................


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
// Step 6A: Using function declaration, define a function named subtract that takes two arguments, number1 and number2
function subtract(number1, number2){
    return number2 - number1; // Step 6B: In the function, return the difference of the parameters number1 and number2
}
// Step 6C: Using function declaration, define another function named subtractNumbers that gets the values of two HTML form controls with IDs of minuend and subtrahend. Pass them to the subtract function
function subtractNumbers(minuend, subtrahend){
    let num1 = parseInt(document.getElementById("subtrahend").value);
    let num2 = parseInt(document.getElementById("minuend").value);
    let difference = subtract(num1, num2);
    document.getElementById("difference").value = difference;
}
// Step 6D: Assign the return value to an HTML form element with an ID of difference

// Step 6E: Add a "click" event listener to the HTML button with an ID of subtractNumbers that calls the subtractNumbers function
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
// Step 7A: Using function declaration, define a function named multiply that takes two arguments, number1 and number2
function multiply(number1, number2){
    return number1 * number2; // Step 7B: In the function, return the sum of the parameters number1 and number2
}

// Step 7C:Using function declaration, define another function named multiplyNumbers that gets the values of two HTML form controls with IDs of factor1 and factor2. Pass them to the multiply function
function multiplyNumbers(factor2, factor1){
    let num1 = parseInt(document.getElementById("factor2").value);
    let num2 = parseInt(document.getElementById("factor1").value);
    let product = multiply(num1, num2);
    document.getElementById("product").value = product;

}
// Step 7D: Assign the return value to an HTML form element with an ID of product

// Step 7E: Add a "click" event listener to the HTML button with an ID of multiplyNumbers that calls the multiplyNumbers function
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
// Step 8A: Using function declaration, define a function named add that takes two arguments, number1 and number2
function divide(number1, number2){
    return number1 / number2; // Step 8B: In the function, return the quotient of the parameters number1 and number2
}

// Step 8C: Using function declaration, define another function named divideNumbers that gets the values of two HTML form controls with IDs of dividend and divisor. Pass them to the divide function
function divideNumbers(dividend, divisor){
    let num1 = parseInt(document.getElementById("dividend").value);
    let num2 = parseInt(document.getElementById("divisor").value);
    let quotient = divide(num1, num2);
    document.getElementById("quotient").value = quotient;
}
// Step 8D: Assign the return value to an HTML form element with an ID of divide

// Step 8E: Add a "click" event listener to the HTML button with an ID of divideNumbers that calls the divideNumbers function
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();//will use computers date by default
// Step 2: Declare a variable to hold the current year
let year = date.getFullYear();
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = year;
/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const oddList = array.filter(isOdd);
const evenList = array.filter(isEven);
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = array;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
function isOdd(num, array){
    if (num % 2 == 0)
        return false;
    return true;
}
function isEven(num, array){
    if (num % 2 == 0)
        return true;
    return false;
}

document.getElementById("odds").innerHTML = oddList;
document.getElementById("evens").innerHTML = evenList;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumArray = array.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
});
document.getElementById("sumOfArray").innerHTML = sumArray;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let doubledArray = array.map(function(x) {return x*2});

document.getElementById("multiplied").innerHTML = doubledArray;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumDouble = doubledArray.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
});
document.getElementById("sumOfMultiplied").innerHTML = doubledArray;