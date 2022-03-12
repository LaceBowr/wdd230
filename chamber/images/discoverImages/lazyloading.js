//get all imgs with data-src attribute
const images = document.querySelectorAll("[data-src]");

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -500px 0px"
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