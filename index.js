/* Lesson 1 */

/* VARIABLES */
//let year = d.getFullYear;
const myImage = "index_images.jpg";
let myName = "Laycie J. Bowers";
let Title = "Title";
let myLessons = [ "Lesson 02: ", "Lesson 03: ", "Lesson 04:", "Lesson 05:", "Lesson 06:", "Lesson 07:", "Lesson 09:", "Lesson 10:", "Lesson 11:"];

document.getElementById("year");
document.getElementById("myImage").setAttribute("src", myImage);
let myLessons_html_ref_list = document.getElementById("myLessons");
myLessons.forEach((item)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = "title";
    a.setAttribute("href","https://google.com/");
    li.innerHTML = item;
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
    weekday: ("short"),
    day: ("numeric"),
    month: ("long"),
    year: ("numeric")
  };
  document.getElementById("currentdate2").textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}