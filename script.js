function displayCurrentTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);

  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector(".search-input");

  let city = searchInputElement.value;

  let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayCurrentTemperature);
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function displayCurrentDayandTime(event) {
  event.preventDefault();
  let currentTime = new Date();
  let day = days[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let currentDayAndTime = document.querySelector("#currentDayAndTime");
  let enterACity = document.querySelector(".search-input");
  let h1 = document.querySelector(".current-city");
  if (enterACity.value) {
    (currentDayAndTime.innerHTML = `${day} ${hour}:${minutes}`),
      (h1.innerHTML = `${enterACity.value}`);
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
searchForm.addEventListener("submit", displayCurrentDayandTime);
