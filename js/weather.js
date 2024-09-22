const weather = document.querySelector("#weather-span");
const city = document.querySelector("#city-span");
const weatherImg = document.querySelector("#weather img");

const weatherType = {
  Clear: "clear-sky",
  Clouds: "few-cloud",
  Rain: "rain",
  Drizzle: "rain",
  Thunderstorm: "thunderstorm",
  Snow: "snow",
  Mist: "mist",
  Smoke: "mist",
  Haze: "mist",
  Dust: "mist",
  Fog: "mist",
  Sand: "mist",
  Ash: "mist",
  Squall: "mist",
  Tornado: "mist",
};
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )} °C`;
      weatherImg.setAttribute(
        "src",
        `img/${weatherType[data.weather[0].main]}.svg`
      );
    });
  console.log(url);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
