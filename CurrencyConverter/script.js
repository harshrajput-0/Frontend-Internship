const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const result = document.getElementById("result");


const url = "https://open.er-api.com/v6/latest/";

// To fill dropdown
async function loadCurrency() {
    try {
        // Sending request
        const response = await fetch(url + "USD");

        // Response in JSON format
        const data = await response.json();

        // Adding currency code as options
        for (const code in data.rates) {
            fromSelect.add(new Option(code, code));
            toSelect.add(new Option(code, code));
        }

        // Default value 
        fromSelect.value = "USD";
        toSelect.value = "INR";
    } catch (error) {
        result.textContent = "Could not load data";
    }
}



// Convert Currency Function
async function convert() {
    const amount = document.getElementById("amount").value;
    const from = fromSelect.value;
    const to = toSelect.value;

    try {
        result.textContent = "sdlfkf"
        // Send request
        const response = await fetch(url + from);

        // Response in JSON format
        const data = await response.json();

        // Calculate
        const total = (amount * data.rates[to]).toFixed(2);

        // Loading data in result area
        result.textContent = amount + " " + from + " = " + total + " " + to;
    } catch (error) {
        result.textContent = "Could not get the rate. Try again.";
    }
}

// Swap Button
function swap() {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    convert();
}

// Function to load data on reload rather than empty result area
async function loadInitial() {
    await loadCurrency();
    await convert();
}

loadInitial();