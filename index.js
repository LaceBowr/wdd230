/* Lesson 1 */

/* VARIABLES */
//let year = d.getFullYear;
const myImage = "index_images.jpg";
let myName = "Laycie J. Bowers";
let Title = "Title";
let myLessons = [ ["Lesson 02: ","lesson2/design-principles.html"], 
["Lesson 03: ","lesson3/index.html"], 
["Lesson 04:","https://www.google.com/"],
["Lesson 05:","https://www.google.com/"], 
["Lesson 06:","https://www.google.com/"],
["Lesson 07:","https://www.google.com/"],
["Lesson 08:","https://www.google.com/"],
["Lesson 09:","https://www.google.com/"], 
["Lesson 10:","https://www.google.com/"], 
["Lesson 11:","https://www.google.com/"]];

document.getElementById("year");
document.getElementById("myImage").setAttribute("src", myImage);
let myLessons_html_ref_list = document.getElementById("myLessons");
myLessons.forEach((item)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = "title";
    a.setAttribute("href",item[1]);
    li.innerHTML = item[0];
    li.appendChild(a);
    myLessons_html_ref_list.appendChild(li);
});
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

let date = new Date();
let dayName = dayNames[date.getDay()];
let monthName = monthNames[date.getMonth()];
let year = date.getFullYear();
let fulldate = dayName + "," + monthName + "," + date.getDate() + "," + year;

document.getElementById("currentdate").textContent = fulldate;

try{
  let options = {
    weekday: ("long"),
    day: ("numeric"),
    month: ("long"),
    year: ("numeric")
  };
  document.getElementById("currentdate2").textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}