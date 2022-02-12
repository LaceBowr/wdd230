let temperature = parseFloat(document.querySelector("#temperature").textContent);
let speed = parseFloat(document.querySelector("#windSpeed").textContent);
let windchill = "";

if(temperature <= 50 && speed > 3){
    windchill = windchillCalc(temperature, speed);
    windchill = `${windchill}&#176;F`;
}else {
    windchill = "N/A";
}
// output
document.querySelector("#windChill").textContent = windchill;

function windchillCalc(temperature, speed) {
    windchill = (35.74 + (0.6215 * temperature) - (35.75 * (math.pow(speed, 0.16)) + (0.4275 * (temperature * (math.pow(speed, 0.16))))));
    return answer;
}