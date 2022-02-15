

//let currentDateDay = day + date;
const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format();
//const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them
date.innerHTML = `<em>${date}</em>`;
//dayOfWeek.innerHTML = `<em>${fulldateUK}</em>`;
document.getElementById("date").innerHTML = date;
//document.getElementById("dayOfWeek").innerHTML = date.day;


function moveCurrentDateAndDayToGenerate(){
    
    let today = document.querySelector("#date").textContent ;
    let day = document.querySelector("#dayOfWeek").textContent;
    let place = document.querySelector("#cityStateCountry").value;
    getWeather(place).then(fillData).then(getIconInfo).then(calulateWindChill);
}
document.querySelector("#moveCurrentDateAndDay").addEventListener("click", moveCurrentDateAndDayToGenerate)

async function getWeather(city){
    let apiInfo = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f59a4105de49f60386b736f3f818131c`;
    const response = await fetch(apiInfo);
    data = await response.json()
    return data
}
function fillData(){
    let newTemp = data["main"]["temp"];
    let speed = data["wind"]["speed"];

    let currentTemp = Math.round(newTemp);
    let localtemp = document.querySelector("#temp");
    localtemp.textContent = `${currentTemp}`;

    let currentspeed = Math.round(speed);
    let wSpeed = document.querySelector("#windspeed");
    wSpeed.textContent = `${currentspeed}`;

    let windChill = calulateWindChill(currentspeed, currentTemp);
    let wChill = document.querySelector("#windchill");
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