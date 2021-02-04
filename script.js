function weather(cityName) {
    const apiLink = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=92e09db826323a0a16638629b70d9bba"

    fetch(apiLink)
        .then(response => response.json())
        .then(data => {
            const weatherIcon = data.weather[0].icon
            const iconLink = "https://openweathermap.org/img/w/" + weatherIcon + ".png";
            document.getElementById("weather-icon").src = iconLink;
            const cityName = data.name;
            document.getElementById('city-name').innerText = cityName;
            const main = data.main;
            const currentTemp = (main.temp - 273.15).toFixed(1);
            document.getElementById('temperature').innerText = currentTemp;
            const currentCondition = data.weather[0].main
            document.getElementById('condition').innerText = currentCondition;

        })
}

function calledWeather() {
    const cityName = "'" + document.getElementById('input').value + "'"
    weather(cityName)
}


function defaultWeather() {
    const cityName = "sylhet"
    weather(cityName)
}
defaultWeather()


const inputValue = document.getElementById("input");
inputValue.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});