
const apikey = "2101c0a2ecbde05f3d07145dbcde2d80";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let inp = document.querySelector(".search input");
const weather_icon = document.querySelector(".rain");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (!response.ok) {
        alert("City not found! Please enter a valid city name.");
        return; 
    }
    var data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    
    if (data.weather[0].main == "Clouds") {
        weather_icon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weather_icon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weather_icon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weather_icon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weather_icon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
        weather_icon.src = "images/snow.png";
    }
}

let btn = document.querySelector(".search button");
btn.addEventListener("click", () => {
    let city = inp.value;
    if (city) { 
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
