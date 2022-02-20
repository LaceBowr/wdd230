const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
const hambutton = document.querySelector(".menu");
const mainnav = document.querySelector(".ham");
hambutton.addEventListener("click", () =>
{mainnav.classList.toggle("responsive")}, false);

//to solve the mid resizing issue with responsive class on 
window.onresize = () => { (window.innerWidth >760)
mainnav.classList.remove("responsive")};

//get all imgs with data-src attribute
const images = document.querySelectorAll("[data-src]");

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
};

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


images.forEach(image => {
    imgObserver.observe(image);
});


const visitsDisplay = document.querySelector(".visits");
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
