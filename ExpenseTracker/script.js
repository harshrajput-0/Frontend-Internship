// Getting Elements 
const title = document.getElementById("title")
const amount = document.getElementById("amount");

const list = document.getElementById("list");
const total = document.getElementById("total");
const form = document.getElementById("form");


// Loading saved array, if not saved load empty array
let items = JSON.parse(localStorage.getItem("items")) || [];

// Save to localstorage
function save() {
    localStorage.setItem("items", JSON.stringify(items));
}


// Submitting new Expense
form.onsubmit = (e) => {
    // Prevent reload
    e.preventDefault();

    // check values 
    if (!title.value || amount.value <= 0) {
        return;
    }

    // Push data into array 
    items.push({ title: title.value, amount: Number(amount.value) });

    // Save to localStorage before updating UI
    save();

    // Clearing the fields 
    title.value = amount.value = "";
    show()
}


// Remove the li element
function remove(i) {
    items.splice(i, 1);
    save();
    show();
}


// Update UI
function show() {
    list.innerHTML = items.map((x, i) => `<li class="eitem">
    <span class="ename">${x.title}</span><span class='amount'>₹${x.amount}</span><button
                    onclick="remove(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 580" preserveAspectRatio="xMidYMid meet">
                        <path fill="currentColor"
                            d="M262.2 48c-13.3 0-25.3 8.3-30 20.8L216 112h-96c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96l-16.2-43.2c-4.7-12.5-16.6-20.8-30-20.8zM128 208v304c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V208h-48v304c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16V208zm160 72c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
                    </svg>


                </button></li>`).join("");

    // Updating Value
    total.textContent = items.reduce((sum, x) => sum + x.amount, 0)
}


show();