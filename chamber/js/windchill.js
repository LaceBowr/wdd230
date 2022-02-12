let temperature = parseFloat(document.querySelector("#temperature").textContent);
let speed = parseFloat(document.querySelector("#windSpeed").textContent);
let windchill = "";

if(temperature <= 50 && speed > 3){
    windchill = windchillCalc(temperature, speed);
    windchill = `${roundFloat(windchill,2)}`;
}else {
    windchill = "N/A";
}
// output
document.querySelector("#windChill").textContent = windchill;

function roundFloat(x,n){
    if(!parseInt(n))
        var n=0;
    if(!parseFloat(x))
        return false;
    return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
}

function windchillCalc(temperature, speed) {
    windchill = (35.74 + (0.6215 * temperature)) - 
                (35.75 * math.pow(speed, 0.16)) + 
                (0.4275 * (temperature * math.pow(speed, 0.16)));
    return windchill;
}