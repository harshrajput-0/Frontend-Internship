const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const qtyInput = document.getElementById("qty");

const listBox = document.getElementById("list");
const inputForm = document.getElementById("input-form");
const summaryInfo = document.getElementById("summary");
const clearBtn = document.getElementById("clear-btn");


// Save to localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Load Cart items in array instead of database 
let cart = JSON.parse(localStorage.getItem("cart")) || [
    { id: 1, name: "Notebook", price: 4.5, qty: 2 },
    { id: 2, name: "Pen set", price: 3, qty: 1 }
];

// For indexing item list
let nextId = cart.length
    ? Math.max(...cart.map(item => item.id)) + 1
    : 1;



// ===| ADD ITEMS LIST ON FORM SUBMIT |====================================
inputForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    const qty = Number(qtyInput.value);


    if (!name || price <= 0 || qty <= 0 ||
        !Number.isFinite(price) || !Number.isInteger(qty)) {
        alert("Enter a valid name, price, and quantity.");
        return;
    }

    cart.push({
        id: nextId++,
        name: name,
        price: price,
        qty: qty
    });
    saveCart();
    rederItemList();

    nameInput.value = "";
    priceInput.value = "";
    qtyInput.value = "";
}
);



// ===| RENDER ITEM LIST |====================================
function rederItemList() {

    if (cart.length === 0) {
        listBox.innerHTML = `
            <div class="list">
                <p class="empty-message">
                    Your cart is empty. Add a product above.
                </p>
            </div>`;

        cartSummary();
        return;
    }


    listBox.innerHTML = cart.map(item => `
         <div class="list">
                <div class="item">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price} for each</div>
                </div>

                <div class="qty-box">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-minus preview-icon">
                            <path d="M5 12h14" />
                        </svg>
                    </button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-plus preview-icon">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                    </button>
                </div>

                <div class="item-total">$${(item.price * item.qty).toFixed(2)}</div>

                <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
            </div>`).join("");

    // saveCart();
    cartSummary();
}




// ===| UPDATE QUANTITY BUTTON |====================================
function updateQty(id, change) {
    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.qty += change;

    if (item.qty < 1) {
        item.qty = 1;
    }

    saveCart();
    rederItemList();
}

// ===| REMOVE ONE ITEM |====================================
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);

    saveCart();
    rederItemList();
}

// ===| CART SUMMARY |====================================
function cartSummary() {


    function calculateTotal() {
        return cart.reduce((sum, item) => {
            return sum + item.price * item.qty;
        }, 0);
    }

    function calculateQty() {
        return cart.reduce((sum, item) => {
            return sum + item.qty;
        }, 0);
    }

    const totalAmount = calculateTotal().toFixed(2);
    const totalQty = calculateQty();


    summaryInfo.innerHTML = `
                    <div id="item-count">${totalQty} items</div>
                <div id="total">$${totalAmount}</div>`
}


// ===| CLEAR ALL ITEMS |====================================
clearBtn.addEventListener("click", function () {
    cart = [];

    saveCart();
    rederItemList();
});
rederItemList();