const links = [
  { name: "Menu", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Booking", href: "#booking" },
  { name: "Contact", href: "#contact" }
];

const navLinks = document.getElementById("navLinks");

navLinks.innerHTML = links
  .map(link => `<li><a href="${link.href}">${link.name}</a></li>`)
  .join("");

// ================================

const menu = [
    // Burgers
    {
        name: "The Double Stack",
        description: "Two smashed beef patties, cheddar, bacon, lettuce, tomato, house sauce",
        price: 349,
        category: "Burgers",
        veg: false
    },
    {
        name: "Classic Cheeseburger",
        description: "Single patty, American cheese, pickles, onions",
        price: 249,
        category: "Burgers",
        veg: false
    },
    {
        name: "Crispy Chicken",
        description: "Buttermilk-fried thigh, slaw, chilli mayo",
        price: 279,
        category: "Burgers",
        veg: false
    },
    {
        name: "Aloo Tikki Smash",
        description: "Spiced potato patty, cheddar, mint chutney",
        price: 199,
        category: "Burgers",
        veg: true
    },

    // Sides
    {
        name: "Skin-on Fries",
        description: "Hand-cut, salted, fried twice",
        price: 119,
        category: "Sides",
        veg: true
    },
    {
        name: "Peri-peri Wedges",
        description: "Crisp wedges with garlic dip",
        price: 149,
        category: "Sides",
        veg: true
    },
    {
        name: "Onion Rings",
        description: "Beer-style batter, smoky dip",
        price: 139,
        category: "Sides",
        veg: true
    },
    {
        name: "Loaded Cheese Fries",
        description: "Cheddar sauce, jalapeños, spring onion",
        price: 189,
        category: "Sides",
        veg: true
    },

    // Shakes
    {
        name: "Chocolate Fudge",
        description: "Thick, with a fudge ribbon",
        price: 189,
        category: "Shakes",
        veg: true
    },
    {
        name: "Salted Caramel",
        description: "Vanilla ice cream, caramel, sea salt",
        price: 199,
        category: "Shakes",
        veg: true
    },
    {
        name: "Mango Lassi Shake",
        description: "Alphonso mango and curd",
        price: 169,
        category: "Shakes",
        veg: true
    },
    {
        name: "Cold Coffee",
        description: "Strong brew, vanilla ice cream",
        price: 159,
        category: "Shakes",
        veg: true
    },

    // Desserts
    {
        name: "Brownie Sundae",
        description: "Warm brownie, vanilla ice cream, fudge",
        price: 199,
        category: "Desserts",
        veg: true
    },
    {
        name: "Churro Bites",
        description: "Cinnamon sugar, chocolate dip",
        price: 149,
        category: "Desserts",
        veg: true
    },
    {
        name: "Cheesecake Jar",
        description: "Baked, with berry compote",
        price: 179,
        category: "Desserts",
        veg: true
    },
    {
        name: "Banana Split",
        description: "Three scoops, nuts, cherry",
        price: 189,
        category: "Desserts",
        veg: true
    }
];


const menuItems = document.getElementById("menuItems");
const menuTabs = document.querySelectorAll(".tabs");

function showMenu(category) {
    const filteredItems = menu.filter(m => m.category === category);

    menuItems.innerHTML = filteredItems.map(m => `
        <li class="menu-item">
            <div class="item-heading">
                <h3>
                    <span class="food-dot ${m.veg ? "veg" : ""}"></span>
                    ${m.name}
                </h3>
                <strong>₹${m.price}</strong>
            </div>
            <p>${m.description}</p>
        </li>
    `).join("");
}

menuTabs.forEach(menuTab => {
    menuTab.addEventListener("click", () => {
        menuTabs.forEach(button => button.classList.remove("active"));
        menuTab.classList.add("active");

        showMenu(menuTab.dataset.category);
    });
});

showMenu("Burgers");

// RENDERING SERVICE SECTION
const services = [
  {
    icon: "utensils-crossed",
    title: "Dine-in",
    description:
      "Seating for 80 across the courtyard and the main hall. Open 12 pm to 11 pm."
  }, 
    {
    icon: "bike",
    title: "Home Delivery",
    description:
      "Seating for 80 across the courtyard and the main hall. Open 12 pm to 11 pm."
  }, 
    {
    icon: "party-popper",
    title: "Private Event",
    description:
      "Seating for 80 across the courtyard and the main hall. Open 12 pm to 11 pm."
  }, 
    {
    icon: "chef-hat",
    title: "Catering",
    description:
      "Seating for 80 across the courtyard and the main hall. Open 12 pm to 11 pm."
  }, 
];

const sCards = document.getElementById("serciveCards")

sCards.innerHTML = services
  .map(
    service => `
      <div class="card">
        <i data-lucide="${service.icon}" class="icon"></i>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `
  )
  .join("");

lucide.createIcons();


// RENDER SELECT OPTIONS
  const times = ["12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM", "6:30 PM", "8:00 PM", "9:30 PM", "11:00 PM" ];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const time = document.getElementById("time");
  const guests = document.getElementById("guests");

  time.innerHTML = times.map(t => `<option value="${t}">${t}</option>`).join("");

  guests.innerHTML = numbers
  .map(n => `<option value="${n}">${n} ${n === 1 ? "Guest" : "Guests"}</option>`)
  .join("");