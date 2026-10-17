const form = document.getElementById("bookingForm");


// Save to localStorage
function saveAppointment() {
    localStorage.setItem("appointments", JSON.stringify(appointments));
}

// LOAING APPOINMENTS 
let appointments = JSON.parse(
    localStorage.getItem("appointments")
) || [
        {
            id: 1,
            name: "Harsh",
            phone: "2456789087",
            doctor: "Abraham Baker",
            service: "General Check-up",
            date: "2026-10-23",
            time: "09:00"
        }
    ];


// =======================================================================
// ============================| DOCTOR SECTION |=========================
// =======================================================================
const doctors = [
    {
        name: "Abraham Baker",
        image: "abraham-baker.jpg",
        specialization: "Cardiologist",
        experience: "15 years",
    },
    {
        name: "Adem Lane",
        image: "adem-lane.jpg",
        specialization: "Dermatologist",
        experience: "10 years",
    },
    {
        name: "Adil Floyd",
        image: "adil-floyd.jpg",
        specialization: "Neurologist",
        experience: "8 years",
    },
    {
        name: "Adriana Sullivan",
        image: "adriana-sullivan.jpg",
        specialization: "Pediatrician",
        experience: "12 years",
    },
    {
        name: "Alec Whitten",
        image: "alec-whitten.jpg",
        specialization: "Orthopedic",
        experience: "9 years",
    },
    {
        name: "Alesha Barry",
        image: "alesha-barry.jpg",
        specialization: "Dentist",
        experience: "7 years",
    },
    {
        name: "Ali Mahdi",
        image: "ali-mahdi.jpg",
        specialization: "General Physician",
        experience: "11 years",
    },
    {
        name: "Aliah Lane",
        image: "aliah-lane.jpg",
        specialization: "Ophthalmologist",
        experience: "6 years",
    },
];


const cardContainer = document.getElementById("doctor-card");

doctors.forEach((doctor) => {
    cardContainer.innerHTML += `
        <div class="card">
            <img
                class="icon"
                src="/assets/${doctor.image}"
                alt="${doctor.name}"
            >

            <h3 class="cname">${doctor.name}</h3>
            <p class="sub">${doctor.specialization}</p>
            <p class="exp">${doctor.experience}</p>
            <a href="#booksec">
                 <button class="cta-btn">Book Now</button>
            </a>
        </div>
    `;
});




// ========================================================================
// ============================| SERVICE SECTION |=========================
// ========================================================================

const services = [
    { name: "General Check-up", description: "Routine health check", price: 500, icon: "🩺" },
    { name: "Heart Screening (ECG)", description: "Heart health screening", price: 1200, icon: "❤️" },
    { name: "Skin Consultation", description: "Skin health consultation", price: 800, icon: "🧴" },
    { name: "Dental Cleaning", description: "Oral hygiene care", price: 700, icon: "🦷" },
    { name: "Child Wellness Visit", description: "Healthcare for children", price: 600, icon: "🧸" },
    { name: "Blood Test Package", description: "Routine blood tests", price: 900, icon: "🧪" },
];


const serviceContainer = document.getElementById("sercive-card");

serviceContainer.innerHTML = "";

services.forEach((service) => {
    serviceContainer.innerHTML += `
    <div class="scard">
      <span class="icon">${service.icon}</span>

      <div class="seperator"></div>

      <div class="sinfo">
        <h3 class="sname">${service.name}</h3>
        <p class="sub">${service.description}</p>
      </div>

      <p class="price">₹${service.price}</p>
    </div>
  `;
});





// ========================================================================
// =============================| FORM SECTION |===========================
// ========================================================================


// Populating doctor select input
const doctorSelect = document.getElementById("doctorSelect");
const serciveSeletct = document.getElementById("serviceSelect");
const timeSelect = document.getElementById("time");


const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];

// Render Doctor Options
doctorSelect.innerHTML = doctors.map(d => `
    <option value="${d.name}">${d.name}</option>`);

// Render Service Options
serciveSeletct.innerHTML = services.map(s => `
    <option value="${s.name} (₹${s.price})">${s.name} (₹${s.price})</option>`);

// Render Time Options
timeSelect.innerHTML = timeSlots.map(time => `
    <option value="${time}">${time}</option>`);



// For indexing item list
let nextId = appointments.length
    ? Math.max(...appointments.map(item => item.id)) + 1
    : 1;



// ADD APPOINTMENT 
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const msg = document.getElementById("message");

    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const doctorId = doctorSelect.value;
    const serviceId = serviceSelect.value;
    const date = document.getElementById("date").value;
    const timeId = timeSelect.value;

    console.log(
        name, phone, doctorId, serviceId, date, timeId
    )



    // Phone
    if (!/^\d{10}$/.test(phone)) {
        msg.className = "msg err";
        msg.textContent = "Please enter a valid 10-digit phone number.";
        return;
    }


    // Check for empty values
    if (
        name === "" ||
        phone === "" ||
        doctorId === "" ||
        serviceId === "" ||
        date === "" ||
        timeId === ""
    ) {
        msg.className = "msg err";
        msg.textContent = "Please fill in all fields.";
        return;
    }


    const appointment = {
        id: nextId++,
        name,
        phone,
        doctor: doctorId,
        service: serviceId,
        date,
        time: timeId
    };


    appointments.push(appointment);
    saveAppointment();
    console.log(appointments);
    showAppointments()
});




// REMOVE APPOINTMENT
function removeAppointment(id) {
    appointments = appointments.filter(
        (a) => a.id !== id
    );
    saveAppointment();
    showAppointments()

}



// APPOINTMENT LIST RENDERING
const appointmentList = document.getElementById("appointment-list");

function showAppointments() {
    appointmentList.innerHTML = appointments.map(a => `
        <li class="appointment">
                    <p class="ap-no">${a.id}</p>
                    <div class="ap-info">
                        <h3 class="sname">${a.service} appointment</h3>
                        <p class="sub">By ${a.doctor} at ${a.time}, ${a.date}</p>
                    </div>
                    <button class="cancel-btn" onclick="removeAppointment(${a.id})">Cancel</button>
                </li>`).join("");
}


console.log("iddue")


showAppointments()
