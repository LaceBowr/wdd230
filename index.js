/* Lesson 1 */

/* VARIABLES */
//let year = d.getFullYear;
const myImage = "index_images.jpg";
let myName = "Laycie J. Bowers";
let Title = "Title";
let myLessons = [ ["Lesson 02: ","lesson2/design-principles.html"], 
["Lesson 03: ","lesson3/index.html"], 
["Lesson 04:","chamber/index.html"],
["Lesson 05A:","bomlist/bom.html"],
["Lesson 05B:","chamber/index.html"], 
["Lesson 06:","chamber/index.html"],
["Lesson 07A:","lesson7/presentation.html"],
["Lesson 07B:","lesson7/lazyload.html"],
["Lesson 07C:","chamber/discover.html"],
["Lesson 08A:","lesson8/tablebuild.html"],
["Lesson 08B:","chamber/join.html"],
["Lesson 09A:","lesson9/prophets.html"], 
["Lesson 09B:", "chamber/directory.html"],
["Lesson 10A:","lesson10/weather-api.html"],
["Lesson 10B:","chamber/index.html"], 
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