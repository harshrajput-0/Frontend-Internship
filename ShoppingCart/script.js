const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const qtyInput = document.getElementById("qty");

const listBox = document.getElementById("list");
const inputForm = document.getElementById("input-form");


let cart = [
    { id: 1, name: "Notebook", price: 4.5, qty: 2 },
    { id: 2, name: "Pen set", price: 3, qty: 1 }
];
let nextId = 3;


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

    rederItemList();

    nameInput.value = "";
    priceInput.value = "";
    qtyInput.value = "";
}
);


function rederItemList() {
    listBox.innerHTML = cart.map(item => `
         <div class="list">
                <div class="item">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price} for each</div>
                </div>

                <div class="qty-box">
                    <button class="qty-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-minus preview-icon">
                            <path d="M5 12h14" />
                        </svg>
                    </button>
                    <span>${item.qty}</span>
                    <button class="qty-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-plus preview-icon">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                    </button>
                </div>

                <div class="item-total">$${(item.price * item.qty).toFixed(2)}</div>

                <button class="remove-btn">Remove</button>
            </div>`).join("");
}








// Calculate Total Cost
function calculateTotal() {
    return cart.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);

}


const totalAmount = calculateTotal();

rederItemList();

console.log(totalAmount); // 12
