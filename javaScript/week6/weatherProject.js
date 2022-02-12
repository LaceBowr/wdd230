
let currentDate = new Date();
let currentDay = date.getDay();
let currentDateDay = day + date;
let apiInfo = "http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={f59a4105de49f60386b736f3f818131c}";
document.getElementById("date").innerHTML = dateTime;
document.getElementById("dayOfWeek").innerHTML = day;
document.getElementByID("cityStateCountry").innerHTML = cityStateCountry; 
function moveCurrentDateAndDayToGenerate(){
    
    document.querySelector("#date").textContent = today;
    document.querySelector("#dayOfWeek").textContent = today;
    
    return today
}
document.querySelector("#cityStateCountry").addEventListener

async function getWeather(){
    const response = await fetch(apiInfo);
    data = await responses.json()
    return data
}
function fillData(){
    newTemp = data["main"]["temp"]
    speed = data["wind"]["speed"]

    let currentTemp = Math.round(newTemp)
    localtemp.textContent += `${currentTemp}`;

    let currentspeed = Math.round(speed)
    wSpeed.textContent = `${currentspeed}mph`

    return newTemp, speed
}
function getIconInfo(){
    let icon = data["weather"][0]["icon"];
    let desc = data["weather"][0]["info"];

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `open weather map API icon: ${desc}`;
    iconInfo.textContent = info.toUpperCase()
}

function calulateWindChill() {
    if (newTemp <= 50 && speed > 1.0){
        let chill = 35.74 + (0.6215*newTemp)-(35.75*speed**0.16)
        chill = Math.round(chill)
        calulateWindChill.innerHTML = `Feels like ${chill} &#176;F`
    }else{
        calulateWindChill.textContent = `N/A`
    }
}

getWeather().then(fillData).then(getIconInfo).then(calculateWindChill);