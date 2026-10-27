const Events = [
  {
    id: 1,
    cat: "tech",
    title: "TechConf 2026",
    date: "Nov 12, 2026",
    time: "9:00 AM - 6:00 PM",
    city: "Expo Center, Bangalore",
    price: "Free",
    vipPrice: 300,
    spots: 12,
    desc: "India's largest annual tech conference featuring talks on AI, cloud, DevOps, and emerging technologies. Hear from 50+ industry speakers and connect with thousands of developers.",
  },
  {
    id: 2,
    cat: "music",
    title: "Rhythms Music Festival",
    date: "Nov 20, 2026",
    time: "5:00 PM - 11:00 PM",
    city: "Open Grounds, Mumbai",
    price: "299",
    vipPrice: 599,
    spots: 180,
    desc: "An outdoor celebration with live performances across three stages — indie, fusion, and classical artists, food stalls, art installations, and a bonfire at midnight.",
  },
  {
    id: 3,
    cat: "business",
    title: "Startup Summit Delhi",
    date: "Dec 3, 2026",
    time: "10:00 AM - 5:00 PM",
    city: "Hotel Leela, New Delhi",
    price: "199",
    vipPrice: 499,
    spots: 45,
    desc: "A curated gathering of founders, investors, and product builders — live pitch sessions, investor office hours, and panels on bootstrapping, hiring, and scaling your startup.",
  },
  {
    id: 4,
    cat: "sports",
    title: "Community Sports Day",
    date: "Dec 8, 2026",
    time: "7:00 AM - 12:00 PM",
    city: "City Sports Complex, Hyderabad",
    price: "Free",
    vipPrice: 300,
    spots: 200,
    desc: "A fun-filled morning of team sports, athletic challenges, and relay races for all age groups. Open to individuals and teams — no experience necessary, just show up and play.",
  },
  {
    id: 5,
    cat: "tech",
    title: "AI and Future Workshop",
    date: "Dec 15, 2026",
    time: "2:00 PM - 6:00 PM",
    city: "IIT Auditorium, Chennai",
    price: "149",
    vipPrice: 449,
    spots: 5,
    desc: "A hands-on session covering the practical foundations of machine learning and generative AI. Ideal for developers and students who want to build real-world AI projects from scratch.",
  },
  {
    id: 6,
    cat: "arts",
    title: "Photography Masterclass",
    date: "Dec 20, 2026",
    time: "10:00 AM - 2:00 PM",
    city: "Studio 18, Pune",
    price: "399",
    vipPrice: 699,
    spots: 20,
    desc: "An intensive half-day workshop covering composition, natural lighting, portrait photography, and post-processing basics. Suitable for beginners to intermediate photographers.",
  },
  {
    id: 7,
    cat: "business",
    title: "Digital Marketing Bootcamp",
    date: "Jan 10, 2027",
    time: "9:00 AM - 5:00 PM",
    city: "WeWork, Gurugram",
    price: "599",
    vipPrice: 899,
    spots: 30,
    desc: "A full-day bootcamp covering SEO, performance marketing, content strategy, and analytics. Walk away with actionable skills to grow any product or brand online.",
  },
  {
    id: 8,
    cat: "health",
    title: "Yoga and Wellness Retreat",
    date: "Jan 18, 2027",
    time: "6:00 AM - 10:00 AM",
    city: "Lakeview Garden, Lucknow",
    price: "Free",
    vipPrice: 300,
    spots: 40,
    desc: "A gentle morning retreat combining yoga, breathwork, and mindfulness sessions. Guided by certified instructors in an outdoor setting. All levels welcome — bring your own mat.",
  },
];


let registeredEvents = [];

// LOAD REGISTRATION ------------------------
registeredEvents = JSON.parse(
  localStorage.getItem("registeredEvents")
) || [];



// RENDERING EVENT CARDS ==================================
// --------------------------------------------------------
const cardArea = document.getElementById("cardArea");

cardArea.innerHTML = Events.map(e => `
    <div class="card">
        <img src="./assets/${e.id}.jpg" alt="${e.title}">

        <div class="card-info">
            <p class="tag">${e.cat}</p>

            <h3>${e.title}</h3>
            <p class="time">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar preview-icon"><path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
            ${e.date}, ${e.time}</p>

            <p class="location">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            ${e.city}</p>

            <p class="price">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee preview-icon"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>
            ${e.price === "Free" ? "Free" : `₹${e.price}`}</p>
        </div>

        <div class="card-foot">
            <p class="spots">${e.spots} spots</p>
            <button class="primary" data-id="${e.id}" commandfor="dialog-${e.id}" command="show-modal">Register</button>
        </div>
    </div>
`).join("");



// RENDERING REGISTRATION DIALOG ================================
// --------------------------------------------------------------
const dialogArea = document.getElementById("dialogArea");

dialogArea.innerHTML = Events.map(e => `
    <dialog id="dialog-${e.id}">
    <form >
        <h3>Register for event </h3>
        <p>${e.title}</p>
        <label for="fName">Full Name<input type="text" name="fName" placeholder="Your full name"></label>
        <label for="fName">Email Address<input type="email" name="email" placeholder="your@email.com"></label>
        <label for="fName">Phone Number<input type="tel" name="phone" placeholder="Your phone"></label>
        <div class="select">
            <label for="tickets">Tickets<input type="number" name="tickets" placeholder="Number of tickets"></label>
            <label for="ticket">Ticket type<select name="ticket">
                <option value="Standard(${e.price})">Standard (${e.price})</option>
                <option value="VIP(${e.vipPrice})">VIP (${e.vipPrice})</option>
            </select></label>
        </div>
        <div class="form-btn">
            <button class="outline" type="button" commandfor="dialog-${e.id}" command="close">Cancel</button>
            <button class="primary" id="submit">Confirm Registration</button>
        </div>
    </form>
</dialog>`).join("");




// FORM SUMBMIT =========================================
// ------------------------------------------------------
dialogArea.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const dialog = form.closest("dialog");

  const id = Number(dialog.id.replace("dialog-", ""));

  const events = Events.find((e) => e.id === id);
  if (!events) return;

  const formData = new FormData(form)


  const registration = {
    regid: crypto.randomUUID(),
    id: events.id,
    title: events.title,
    date: events.date,
    location: events.city,
    ticket: formData.get("ticket"),
    ticketNo: formData.get("tickets"),
  };

  registeredEvents.push(registration);
  console.log(registeredEvents);

  saveRegistrations();
  renderRegistrations();

  form.reset();
  dialog.close();
});



// RENDER REGISTERED EVENTS =================================================
// --------------------------------------------------------------------------
const allRegistration = document.getElementById("allRegistration");

function renderRegistrations() {
  if (registeredEvents.length === 0) {
    allRegistration.innerHTML = `<div class="empty">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list preview-icon"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
                <h3>No registrations yet</h3>
                <p>Browse events and register to see them here</p>
            </div>`;

    return;
  }


  allRegistration.innerHTML = registeredEvents
    .map(
      (reg) => `
        <div class="regCard">
          <div class="regInfo">
            <h3>${reg.title}</h3>
            <p>
              ${reg.date} · ${reg.location} ·
              ${reg.ticketNo} ticket(s) · ${reg.ticket}
            </p>
            <p class="label">Booking ID: ${reg.regid}</p>
          </div>

          <button class="delete" data-id="${reg.regid}">
            Cancel
          </button>
        </div>
      `
    )
    .join("");
}


// DELETE FUNTION =====================================
// ----------------------------------------------------
allRegistration.addEventListener("click", (event) => {
  if (!event.target.matches(".delete")) return;

  const regid = event.target.dataset.id;

  registeredEvents = registeredEvents.filter(
    (reg) => reg.regid !== regid
  );
  saveRegistrations();
  renderRegistrations();
});


// SAVE TO LOCALSTORAGE ----------------
function saveRegistrations() {
  localStorage.setItem("registeredEvents", JSON.stringify(registeredEvents));
}




renderRegistrations();