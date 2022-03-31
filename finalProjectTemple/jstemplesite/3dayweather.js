//let temperature = parseFloat(document.querySelector("#temperature").textContent);
//let dewpoint = parseFloat(document.querySelector("#dewpoint").textContent);

let getWeatherButton = document.querySelector("#generate");
getWeatherButton.addEventListener('click', getWeatherThreeDay);

//Display Weather and the windspeed if it applies
// pass "imperial" for units if you want fahrenheit or "metric" if you want celsius 
async function getWeatherThreeDay(){
    let units = "imperial";
    let city = document.querySelector("#citystatecountry").value;
    let geocodeinfo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=f59a4105de49f60386b736f3f818131c`
    let response = await fetch(geocodeinfo);
    let data = await response.json()
    let lat = data[0].lat;
    let lon = data[0].lon;
    
    let threeday = `https://api.openweathermap.org/data/2.5/onecall?units=${units}&lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=f59a4105de49f60386b736f3f818131c`;
    response = await fetch(threeday);
    data = await response.json()
    fillData(data.daily);
}
function processday(forcast, daynum){
    let humidity = forcast.humidity;
    let tempDay = forcast.temp.day;
    let windspeed = forcast.wind_speed;
    let desc = forcast.weather[0].description;
    let humidityid = "#humidity" + parseInt(daynum);
    let tempid = "#temperature" + parseInt(daynum);
    let windspeedid = "#windspeed" + parseInt(daynum);
    let iconid = "#weathericon" + parseInt(daynum);
    let weatherdescid = "#icondesc" + parseInt(daynum);
    document.querySelector(humidityid).textContent = humidity;
    document.querySelector(tempid).textContent = tempDay;
    document.querySelector(windspeedid).textContent = windspeed;
    document.querySelector(weatherdescid).textContent = desc;
}
function fillData(data){
    today = data[0];
    tomorrow = data[1];
    dayafter = data[2];
    processday(today,1);
    processday(tomorrow,2);
    processday(dayafter,3);
}
function getIconInfo(){
    let icon = data["weather"][0]["icon"];
    let desc = data["weather"][0]["description"];
    document.querySelector("#weatherIcon");
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `open weather map API icon: ${desc}`;
    document.querySelector("#iconDesc").innerHTML = desc;
}
