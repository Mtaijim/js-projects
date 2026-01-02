const apikey = "6440eeec8627b6b119c4f0d6d4fc2080";
const cityInput = document.getElementById("city");
const weatherInfo = document.getElementById("weatherInfo");
const Search = document.getElementById("search-btn");

Search.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("please enter a city ");
    return;
  }
  getWeather(city);
});

async function getWeather(city) {
  const url = `https:/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === "404") {
      alert("city not found");
      weatherInfo.style.display = "none";
      return;
    }

    document.getElementById(
      "cityName"
    ).innerHTML = `${data.name},${data.sys.country}`;
    document.getElementById(
      "temperature"
    ).innerHTML = `🌡️Temperature :${data.main.temp}deg c`;
    document.getElementById(
      "description"
    ).innerHTML = `weather :${data.weather[0].description}`;
    document.getElementById(
      "humidity"
    ).innerHTML = `humidity : ${data.main.humidity}%`;
    document.getElementById(
      "wind"
    ).innerHTML = `wind-speed : ${data.wind.speed}m/s`;
  } catch (error) {
    alert("error fecthing data", error);
  }
}
