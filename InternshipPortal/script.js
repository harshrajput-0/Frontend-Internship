const menuBtn = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("open")
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("open");
  })
})


// =================================================================
const internships = [
  {
    id: 1, title: "Frontend Developer Intern", company: "PixelCraft", category: "Web Development", mode: "Remote", location: "Anywhere", duration: "3 months", stipend: "₹15,000/month", deadline: "2026-11-30",
    description: "Build responsive user interfaces with HTML, CSS and JavaScript and work with a small product team.",
    requirements: ["Basic HTML, CSS, JavaScript", "Familiarity with Git", "Eagerness to learn React"]
  },
  {
    id: 2, title: "Backend Developer Intern", company: "CloudNest", category: "Web Development", mode: "On-site", location: "Bengaluru", duration: "6 months", stipend: "₹20,000/month", deadline: "2026-11-20",
    description: "Create REST APIs using Node.js and MongoDB and help improve server performance.",
    requirements: ["Node.js basics", "Understanding of databases", "Good problem-solving"]
  },
  {
    id: 3, title: "Data Analyst Intern", company: "InsightLabs", category: "Data Science", mode: "Remote", location: "Anywhere", duration: "4 months", stipend: "₹12,000/month", deadline: "2026-12-05",
    description: "Clean datasets, build dashboards and share insights with business teams.",
    requirements: ["Excel or Python basics", "Interest in statistics", "Clear communication"]
  },
  {
    id: 4, title: "Machine Learning Intern", company: "NeuroWorks", category: "Data Science", mode: "On-site", location: "Hyderabad", duration: "6 months", stipend: "₹25,000/month", deadline: "2026-12-15",
    description: "Train and test small ML models and help document experiments.",
    requirements: ["Python", "Basic ML concepts", "Curiosity about research"]
  },
  {
    id: 5, title: "UI/UX Design Intern", company: "Designly", category: "Design", mode: "Remote", location: "Anywhere", duration: "3 months", stipend: "₹10,000/month", deadline: "2026-11-25",
    description: "Design wireframes and prototypes, and test them with real users.",
    requirements: ["Figma basics", "Portfolio with 2 projects", "Attention to detail"]
  },
  {
    id: 6, title: "Social Media Marketing Intern", company: "BrandBuzz", category: "Marketing", mode: "On-site", location: "Delhi", duration: "2 months", stipend: "₹8,000/month", deadline: "2026-12-01",
    description: "Plan content calendars, write posts and track campaign results.",
    requirements: ["Good writing skills", "Knowledge of social platforms", "Creativity"]
  }
];

const internshipListContainer = document.getElementById('internship-list');

function renderInternships(data) {
  internshipListContainer.innerHTML = data.map(item => {


    // Badge based on location
    const modeBadge = item.mode === "Remote"
      ? `<p class="remote pill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop-minimal preview-icon">
            <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
            <line x1="2" x2="22" y1="20" y2="20" />
          </svg>
          Remote
         </p>`
      : `<p class="on-site pill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin preview-icon">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          ${item.location}
         </p>`;

    // Dynamically generate requirements <li> list items
    const requirementsList = item.requirements
      .map(req => `<li>${req}</li>`)
      .join('');

    return `
      <article class="card">
        <div class="card-head">
          <p class="label">${item.category}</p>
          <h2 class="intern-role">${item.title}</h2>
          <div class="company tag">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-complex preview-icon">
              <path d="M10 12h4" />
              <path d="M10 8h4" />
              <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
              <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
              <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
            </svg>
            ${item.company}
          </div>

          <p class="description">${item.description}</p>
          ${modeBadge}
        </div>

        <div class="metadata">
          <p class="tag">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee preview-icon">
              <path d="M6 3h12" />
              <path d="M6 8h12" />
              <path d="m6 13 8.5 8" />
              <path d="M6 13h3" />
              <path d="M9 13c6.667 0 6.667-10 0-10" />
            </svg>
            ${item.stipend}
          </p>

          <p class="tag">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock preview-icon">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            ${item.duration}
          </p>

          <p class="tag" style="grid-column: span 2;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar preview-icon">
              <path d="M8 2v3" />
              <path d="M16 2v3" />
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
            </svg>
            Apply by: <strong>${item.deadline}</strong>
          </p>
        </div>

        <div class="requirements">
          <p>Requirements</p>
          <ul>
            ${requirementsList}
          </ul>
        </div>

        <button type="button" class="apply-btn" data-title="${item.title}" data-company="${item.company}">Apply</button>
      </article>
    `;
  }).join('');
}

renderInternships(internships);


// =================
const dialog = document.getElementById("applyDialog");
const modalRole = document.getElementById("modal-role");
const internshipForm = document.getElementById("internshipForm");
const trackerList = document.getElementById("tracker-list");


const STEPS = ["Applied", "Under Review", "Shortlisted", "Selected"];
const STORAGE_KEY = "internship_applications";

let submitApp = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let selectedInternship = null;


// Open application dialog
document.querySelectorAll(".apply-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const button = e.currentTarget;

    selectedInternship = internships.find(
      (item) => item.title === button.dataset.title &&
        item.company === button.dataset.company
    );
    modalRole.textContent = selectedInternship.title;
    dialog.showModal();
  });
});




// SUBMIT DATA FOR RENDERING ON TRACKER 
internshipForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!selectedInternship) return;

  // Prevent applying to the same internship twice
  const alreadyApplied = submitApp.some(
    (app) =>
      app.title === selectedInternship.title &&
      app.company === selectedInternship.company
  );

  if (alreadyApplied) {
    alert("You have already applied for this internship.");
    return;
  }

  // Add the application to the array
  submitApp.push({
    id: crypto.randomUUID(),
    title: selectedInternship.title,
    company: selectedInternship.company,
    date: new Date().toISOString(),
    status: "Applied"
  });

  saveApplications();
  renderTracker();

  console.log(submitApp)

  alert(`Application for ${selectedInternship.title} submitted successfully!`);

  internshipForm.reset();
  dialog.close();
  selectedInternship = null;
});

// =========================================================
// =========================================================
// =========================================================
// =========================================================

// SAVE APPLICAITON
function saveApplications() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submitApp));
}




// RENDERING THE TRACKER (submitApp)

function renderTracker() {
  updateStats(); 
  trackerList.innerHTML = submitApp.map((a) => `
          <div class="track-item">
          <div class="row">

            <div class="info">
      <h3>${a.title}</h3>
              <p class="info">
      <span>${a.company}</span>
                <span class="apply-date">Applied on: ${new Date(a.date).toLocaleDateString()}</span>
              </p>
            </div>

            <div class="status-btn">
              <button class="outline" onclick="nextStatus('${a.id}')">Update Status</button>
<button class="outline withdraw" onclick="withdrawApp('${a.id}')">Withdraw Application</button>
            </div>
          </div>

          <p>Application Status: <strong class="status">${a.status}</strong></p>
          </div>`).join("");
}

renderTracker();
console.log(submitApp)




function nextStatus(id) {
  const app = submitApp.find(a => a.id === id);
  if (!app) return;

  const currentIndex = STEPS.indexOf(app.status);
  const nextIndex = (currentIndex + 1) % STEPS.length;
  app.status = STEPS[nextIndex];

  saveApplications();
  renderTracker();
}

function withdrawApp(id) {
  submitApp = submitApp.filter(a => a.id !== id);
  saveApplications();
  renderTracker();
}


function updateStats() {
  document.getElementById("total").textContent = submitApp.length;
  document.getElementById("in-progress").textContent = submitApp.filter(a => a.status === "Under Review" || a.status === "Shortlisted").length;
  document.getElementById("selected").textContent = submitApp.filter(a => a.status === "Selected").length;
}