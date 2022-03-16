const datefield = document.querySelector("#date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

// long, medium, short options ... try them

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}
//const loadImages = (image) => {
//    image.setAttribute("src", image.getAttribute("data-src"));
//    image.onload = () => {image.removeAttribute("data-src");};
//};

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//first check to see if Intersenction Observer is supported
entries.forEach(entry => {
    if(!entry.isIntersecting) {
        return; 
    } else { // just load images if not supported....
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

//get all imgs with data-src attribute
const images = document.querySelectorAll("[data-src]");

images.forEach(image => {
    imgObserver.observe(image);
});


const visitsDisplay = document.querySelector("#visits");
//get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

//determine if this is the first visit or display the number of visits.
if(numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}else{
    visitsDisplay.textContent = `This is your first visit!`;
}
//increment the number of visits.
numVisits++;
//store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
//show todays date.
//todayDisplay.textContent = Date.now();

//Display Weather and the windchill if it applies
async function getWeather(){
    let apiInfo = `https://api.openweathermap.org/data/2.5/weather?q=elsinore,UT,US&units=imperial&appid=f59a4105de49f60386b736f3f818131c`;
    const response = await fetch(apiInfo);
    data = await response.json()
    return data
}
function fillData(){
    let newTemp = data["main"]["temp"];
    let speed = data["wind"]["speed"];

    let currentTemp = Math.round(newTemp);
    let localtemp = document.querySelector("#temperature");
    localtemp.textContent = `${currentTemp}`;

    let currentspeed = Math.round(speed);
    let wSpeed = document.querySelector("#windSpeed");
    wSpeed.textContent = `${currentspeed}`;

    let windChill = calulateWindChill(currentspeed, currentTemp);
    let wChill = document.querySelector("#windChill");
    wChill.textContent = windChill;

    return newTemp, speed;
}
function getIconInfo(){
    let icon = data["weather"][0]["icon"];
    let desc = data["weather"][0]["description"];
    document.querySelector("#weatherIcon");
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `open weather map API icon: ${desc}`;
    document.querySelector("#iconDesc").innerHTML = desc;
}
function calulateWindChill(speed, temp) {
    if (temp <= 50 && speed > 1.0){
        let chill = 35.74 + (0.6215*temp)-(35.75*speed**0.16)
        chill = Math.round(chill)
        return chill;
    }else{
        return `N/A`;
    }
}
if (document.querySelector("#temperature"))
{
    getWeather().then(fillData).then(getIconInfo);
}

// the Hamburger Icon on the medium and small screens js is as follows
const hamburger = document.querySelector("#hamBtn");
const navMenu = document.querySelector("#menu");

if(hamburger)
{
    hamburger.addEventListener("click", ()=> {
        document.getElementById("menu").classList.toggle("open");
        document.getElementsById("hamBtn").classList.toggle("open");

    })
}

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", ()=> {
    hamBtn.classList.remove("active");
    menu.classList.remove("active");
    }))
    let pagename = document.location.href.split('?')[0];
if(pagename.endsWith('thankyou.html'))
{
    datefield.setAttribute('hidden', 'true');
}
datefield.innerHTML = `<em>${fulldate}</em>`;
//datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
const hambutton = document.querySelector(".menu");
const mainnav = document.querySelector(".ham");

//hambutton.addEventListener("click", () =>
//{mainnav.classList.toggle("responsive")}, false);

//to solve the mid resizing issue with responsive class on 
//window.onresize = () => { (window.innerWidth >760)
//mainnav.classList.remove("responsive")};

