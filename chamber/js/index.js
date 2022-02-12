// select the elements to manipulate (output to)
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
{maninnav.classList.toggle("responsive")}, false);

//to solve the mid resizing issue with responsive class on 
window.onresize = () => { (window.innerWidth >760)
mainnav.classList.remove("responsive")};
