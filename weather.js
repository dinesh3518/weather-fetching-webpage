const apiKey = "3820b1fc0a61e7c9e6538820644f2f67";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector(".search input");
const button = document.querySelector(".search button");
const inputTxt = document.querySelector(".search input");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    //console.log(data.name);
    if(data.name)
    displayWeather(data);
}
function displayWeather(data){
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    
}
inputTxt.addEventListener("keypress",  function(event) {
    if (event.key === "Enter") {
        button.click();
        
         }
  });
button.addEventListener("click",()=>{
    checkWeather(cityName.value);
} );