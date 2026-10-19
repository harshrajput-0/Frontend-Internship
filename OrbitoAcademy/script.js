// ================================================================
// -----------------------| HEADER SECTION |-----------------------
// ================================================================
const menuBtn = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("open")
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
  })
})

// Navigation Link Array
const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  // { name: "Faculty", href: "#faculty" },
  { name: "Facilities", href: "#facilities" },
  // { name: "Admissions", href: "#admissions" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

// Rendering links
navLinks.innerHTML = navigationLinks.map((item) => `
  <li>
    <a class="links" href="${item.href}">${item.name}</a>
  </li>
`).join("");



const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});






// ================================================================
// -----------------------| COURSE SECTION |-----------------------
// ================================================================
const courses = [
  {
    name: "Science",
    image: "assets/science-lab.jpg",
    description:
      "Explore physics, chemistry, and biology through practical learning and experiments.",
  },
  {
    name: "Commerce",
    image: "assets/commerce.jpg",
    description:
      "Learn accounting, economics, business studies, and financial management.",
  },
  {
    name: "Arts & Humanities",
    image: "assets/art.jpg",
    description:
      "Discover history, geography, literature, and social sciences.",
  },
  {
    name: "Computer Science",
    image: "assets/computer-lab.jpg",
    description:
      "Build digital skills through programming, technology, and problem-solving.",
  },
];

const coursesContainer = document.getElementById("coursesContainer");

coursesContainer.innerHTML = courses
  .map(
    (course) => `
      <article class="course-card">
        <img
          src="${course.image}"
          alt="${course.name}"
          class="course-img"
        >

        <div class="course-content">
          <h3>${course.name}</h3>
          <p>${course.description}</p>
        </div>
      </article>
    `
  )
  .join("");



// =================================================================
// -----------------------| FACULTY SECTION |-----------------------
// =================================================================

const faculty = [
  {
    name: "Dr. Rahul Sharma",
    designation: "Senior Faculty",
    subject: "Physics",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Priya Verma",
    designation: "Senior Faculty",
    subject: "Chemistry",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Amit Kumar",
    designation: "Assistant Professor",
    subject: "Mathematics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Neha Singh",
    designation: "Senior Faculty",
    subject: "English",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Vikram Patel",
    designation: "Faculty Member",
    subject: "Computer Science",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ananya Gupta",
    designation: "Faculty Member",
    subject: "Biology",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  },
];



const facultyContainer = document.getElementById("facultyContainer");

facultyContainer.innerHTML = faculty
  .map(
    (member) => `
      <article class="faculty-card">
        <img
          src="${member.image}"
          alt="${member.name}"
          class="faculty-image"
          loading="lazy"
        >

        <div class="faculty-info">
          <h3>${member.name}</h3>
          <p class="faculty-designation">${member.designation}</p>
          <span class="faculty-subject">${member.subject}</span>
        </div>
      </article>
    `
  )
  .join("");




// ==================================================================
// -----------------------| FACILITY SECTION |-----------------------
// ==================================================================
const facilities = [
  {
    title: "Modern Library",
    image: "/assets/library.jpg",
    alt: "School library",
    description:
      "Our library provides a peaceful environment for students to learn, research, and grow.",
    features: [
      "Extensive collection of books",
      "Quiet study areas",
      "Digital learning facilities",
      "Friendly and helpful staff",
    ],
  },
  {
    title: "Science Laboratories",
    image: "/assets/science-lab.jpg",
    alt: "Science laboratory",
    description:
      "Our laboratories encourage curiosity through practical experiments and scientific exploration.",
    features: [
      "Well-equipped laboratories",
      "Hands-on experiments",
      "Safe learning environment",
      "Practical science activities",
    ],
  },
  {
    title: "Computer Lab",
    image: "/assets/computer-lab.jpg",
    alt: "School computer lab",
    description:
      "Our computer lab helps students develop digital literacy and essential technology skills.",
    features: [
      "Modern computer systems",
      "Digital learning resources",
      "Programming fundamentals",
      "Technology-based education",
    ],
  },
  {
    title: "Sports Facilities",
    image: "/assets/sports.jpg",
    alt: "School sports ground",
    description:
      "Our sports facilities promote fitness, teamwork, discipline, and a healthy lifestyle.",
    features: [
      "Spacious playground",
      "Indoor and outdoor games",
      "Physical education",
      "Sports competitions",
    ],
  },
  {
    title: "Smart Classrooms",
    image: "/assets/classroom.jpg",
    alt: "Modern school classroom",
    description:
      "Our classrooms combine interactive teaching methods with technology to make learning engaging.",
    features: [
      "Digital learning resources",
      "Comfortable seating",
      "Interactive lessons",
      "Student-focused teaching",
    ],
  },
  {
    title: "School Auditorium",
    image: "/assets/auditorium.jpg",
    alt: "School auditorium",
    description:
      "Our auditorium provides a space for school events, performances, presentations, and celebrations.",
    features: [
      "Stage for performances",
      "School assemblies",
      "Cultural events",
      "Presentations and seminars",
    ],
  },
];



const facilitiesContainer = document.getElementById("facilitiesContainer");

facilitiesContainer.innerHTML = facilities
  .map(
    (facility) => `
            <div class="overlay-card">
                <div class="card-image">
                    <img src="${facility.image}" alt="${facility.alt}">
                </div>

                <div class="card-content">
                    <h2>${facility.title}</h2>
                    <p>${facility.description}</p>

                    <ul>
                        ${facility.features
        .map((feature) => `<li>${feature}</li>`)
        .join("")}
                    </ul>
                </div>
            </div>
        `
  )
  .join("");














// ================================================================
// -----------------------| EVENT SECTION |-----------------------
// ================================================================

const eventBox = document.getElementById("event-box");

const events = [
  {
    name: "Annual Day Celebration",
    image: "/assets/annual.jpg"
  },
  {
    name: "Sports Day",
    image: "/assets/sports.jpg"
  },
  {
    name: "Science Exhibition",
    image: "/assets/science-lab.jpg"
  },
  {
    name: "Cultural Festival",
    image: "/assets/cultural.jpg"
  },
  {
    name: "Art & Craft Exhibition",
    image: "/assets/art.jpg"
  },
  {
    name: "Graduation Ceremony",
    image: "/assets/graduation.jpg"
  },
];


eventBox.innerHTML = events.map((e) => `<div class="event-card">
                            <img src="${e.image}" alt="${e.name} Image">

                            <div class="event-overlay">
                                <h3>${e.name}</h3>
                            </div>
                        </div>`).join("")