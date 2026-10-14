
const searchBox = document.getElementById("search");
const resultBox = document.getElementById("result");
const suggestionBox = document.getElementById("suggestion-box")


const API_URL = "https://api.restcountries.com/countries/v5?q=";
const API_KEY = "your_restcountries_api_key";



// SEARCH COUNTRY WITH API |--------------------
async function searchCountry(text) {

  try {
    // Sending Resquest 
    const response = await fetch(
      API_URL + encodeURIComponent(text),
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );
    const data = await response.json();

    const countries = data.data.objects;

    // console.log(countries);
    showSuggestions(countries);
  } catch (error) {
    console.error(error);
  }
}


// SHOW SUGGESTION CHIPS |-------------------------------------
function showSuggestions(countries) {
  suggestionBox.innerHTML = "";

  for (const c of countries) {
    // Creating suggestion element 
    const suggestion = document.createElement("div");

    // Adding class and data
    suggestion.className = "suggestion";
    suggestion.textContent = c.names.common;

    // Appending the suggestion
    suggestionBox.append(suggestion);

    // Adding click event to show details
    suggestion.addEventListener("click", function () {
      showCountry(c);
      searchBox.value = c.names.common;
    });
  }
};



// SHOW COUNTERY CARD |----------------------------------------------- 
function showCountry(c) {
  const capital = c.capitals[0]?.name || "N/A";

  const currency = c.currencies[0]
    ? `${c.currencies[0].name} (${c.currencies[0].symbol || ""})`
    : "N/A";

  // Card HTML code
  resultBox.innerHTML = `
    <div class="card">
      <div class="flag-wrapper">
        <img
          class="flag"
          src="${c.flag.url_png}"
          alt="${c.names.common} flag"
        >
      </div>

      <h2>${c.names.common}</h2>

      <ul class="info">
        <li>
          <span class="label">Capital</span>
          <span class="value">${capital}</span>
        </li>
        <li>
          <span class="label">Population</span>
          <span class="value">${c.population.toLocaleString()}</span>
        </li>
        <li>
          <span class="label">Region</span>
          <span class="value">${c.region}</span>
        </li>
        <li>
          <span class="label">Currency</span>
          <span class="value">${currency}</span>
        </li>
      </ul>
    </div>
  `;
};



// EVENT LISTENER ON SEARCH BOX |-----------------------------------------------  
searchBox.addEventListener("input", function () {
  const text = searchBox.value.trim();

  // Removing data when searchBox is empty 
  if (text === "") {
    suggestionBox.innerHTML = "";
    resultBox.innerHTML = "";
    return;
  }

  searchCountry(text);
})



