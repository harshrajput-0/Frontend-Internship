const searchBox = document.getElementById("searchBox");
const result = document.getElementById("result");
const form = document.querySelector("form");




const API_KEY = "YOUR_OPENWEATHER_API_KEY";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";



// DISPLAY A MESSAGE |--------------------
function showMessage(message) {
  result.innerHTML = `<p class="message">${message}</p>`;
}



// ADD EVEN LISTENER TO FORM |--------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = searchBox.value.trim();

  if (!city) {
    showMessage("Please enter a city name.");
    return;
  }

  getWeather(city);
});



// GET WEATHER DETAILS |--------------------
async function getWeather(city) {
  showMessage("Loading weather...");

  try {
    // Proper url
    const url = `${API_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

    // Request to API
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found. Please try another city.");
      }

      throw new Error(data.message || "Unable to fetch weather.");
    }

    // Show Weather details in result box
    displayWeather(data);

  } catch (error) {
    showMessage(error.message || "Something went wrong. Please try again.");
  }
}



// DISPLAY WEATHER |--------------------
function displayWeather(data) {

  // Getting values in constant 
  const city = data.name;
  const country = data.sys.country;

  const temperature = Math.round(data.main.temp);
  const condition = data.weather[0].description;
  const icon = data.weather[0].icon;

  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  const date = new Date(
    (data.dt + data.timezone) * 1000
  ).toUTCString().replace(/^[^,]+, /, "").replace(" GMT", "");

  // Create weather card
  result.innerHTML = `
        <div class="city">${city}, ${country}</div>
        <div class="date">${date}</div>

        <img
            src="https://openweathermap.org/img/wn/${icon}@2x.png"
            alt="${condition}"
        >

        <div class="temperature">${temperature}°C</div>
        <div class="condition">${condition}</div>

        <div class="info-section">
            <div class="info">
                <div class="value">${humidity}%</div>
                <div class="label">Humidity</div>
            </div>

            <div class="info">
                <div class="value">${windSpeed} m/s</div>
                <div class="label">Wind Speed</div>
            </div>
        </div>
    `;
}
