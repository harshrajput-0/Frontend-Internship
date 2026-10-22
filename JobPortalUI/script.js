
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


// ==============================================


const jobs = [
        {
            id: 1,
            title: "Frontend Developer Intern",
            company: "PixelCraft",
            category: "Frontend",
            location: "Remote",
            mode: "Remote",
            duration: "3 months",
            stipend: "₹15,000/month",
            deadline: "2026-11-30",
            description: "Build responsive user interfaces and create accessible web experiences with a product team.",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            type: "Full-time",
            experience: "Beginner"
        },
        {
            id: 2,
            title: "Backend Developer Intern",
            company: "CodeBase",
            category: "Backend",
            location: "Bengaluru, India",
            mode: "Hybrid",
            duration: "6 months",
            stipend: "₹18,000/month",
            deadline: "2026-11-25",
            description: "Develop REST APIs, work with databases, and help maintain backend services.",
            skills: ["Node.js", "Express", "MongoDB", "Git"],
            type: "Full-time",
            experience: "Beginner"
        },
        {
            id: 3,
            title: "Full Stack Developer Intern",
            company: "TechNova",
            category: "Full Stack",
            location: "Remote",
            mode: "Remote",
            duration: "4 months",
            stipend: "₹20,000/month",
            deadline: "2026-12-05",
            description: "Work across frontend and backend features to build and improve web applications.",
            skills: ["React", "Node.js", "MongoDB", "REST API"],
            type: "Full-time",
            experience: "Intermediate"
        },
        {
            id: 4,
            title: "React Developer Intern",
            company: "WebWorks",
            category: "Frontend",
            location: "Delhi, India",
            mode: "On-site",
            duration: "3 months",
            stipend: "₹12,000/month",
            deadline: "2026-11-20",
            description: "Build reusable React components and collaborate on responsive application interfaces.",
            skills: ["React", "JavaScript", "CSS", "Git"],
            type: "Full-time",
            experience: "Beginner"
        },
        {
            id: 5,
            title: "Node.js Developer Intern",
            company: "DevSphere",
            category: "Backend",
            location: "Remote",
            mode: "Remote",
            duration: "6 months",
            stipend: "₹16,000/month",
            deadline: "2026-12-10",
            description: "Implement API endpoints, validate incoming data, and integrate database operations.",
            skills: ["Node.js", "Express", "MongoDB", "Postman"],
            type: "Full-time",
            experience: "Intermediate"
        },
        {
            id: 6,
            title: "UI/UX Design Intern",
            company: "DesignNest",
            category: "UI/UX Design",
            location: "Mumbai, India",
            mode: "Hybrid",
            duration: "3 months",
            stipend: "₹10,000/month",
            deadline: "2026-11-28",
            description: "Create wireframes, prototypes, and user-friendly layouts for web products.",
            skills: ["Figma", "Wireframing", "Prototyping", "UI Design"],
            type: "Part-time",
            experience: "Beginner"
        },
        {
            id: 7,
            title: "Web Development Intern",
            company: "BrightLabs",
            category: "Web Development",
            location: "Remote",
            mode: "Remote",
            duration: "2 months",
            stipend: "Unpaid",
            deadline: "2026-12-15",
            description: "Learn by building website pages, fixing UI issues, and improving mobile layouts.",
            skills: ["HTML", "CSS", "JavaScript", "GitHub"],
            type: "Part-time",
            experience: "Beginner"
        },
        {
            id: 8,
            title: "Software Development Intern",
            company: "Innovent",
            category: "Software Development",
            location: "Pune, India",
            mode: "On-site",
            duration: "6 months",
            stipend: "₹22,000/month",
            deadline: "2026-12-01",
            description: "Contribute to application features, write maintainable code, and help debug software.",
            skills: ["JavaScript", "Git", "Problem Solving", "APIs"],
            type: "Full-time",
            experience: "Intermediate"
        }
    ];


const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const jobList = document.getElementById("jobList");




function filterJobs() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;

    const filteredJobs = jobs.filter(function (job) {
        const matchesSearch =
            job.title.toLowerCase().includes(searchValue) ||
            job.company.toLowerCase().includes(searchValue);

        const matchesCategory =
            selectedCategory === "" ||
            job.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayJobs(filteredJobs);
}




function displayJobs(jobs) {
    jobList.innerHTML = "";

    if (jobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found.</p>";
        return;
    }

    jobs.forEach(function (job) {
        jobList.innerHTML += `
            <article class="card">
                    <div class="flex items-center justify-between gap-[12px] text-(--primary)">
                        <div
                            class="w-[48px] h-[48px] flex items-center justify-center  bg-(--primary-bg) rounded-md font-black">
                            ${job.company.charAt(0)}
                        </div>

                        <span class="category">${job.category}</span>
                    </div>

                    <h2 class="text-[22px] font-bold text-(--text) m-0">${job.title}</h2>
                    <p class="company">
                        <i data-lucide="building-complex" class="w-4"></i>
                        ${job.company}
                    </p>
                    <p>${job.description}</p>

                    <!-- DETAILS  -->
                    <div class="flex gap-6">
                        <span class="icon-text">
                            <i data-lucide="map-pin" class="w-4"></i>
                            ${job.location}</span>

                        <span class="icon-text">
                            <i data-lucide="briefcase-business" class="w-4"></i>
                            ${job.mode}</span>


                        <span class="icon-text">
                            <i data-lucide="clock" class="w-4"></i>
                            ${job.duration}</span>
                    </div>

                    <div class="skills flex flex-wrap gap-2">
                        <div class="skills flex flex-wrap gap-2">
    ${job.skills.map(skill => `<span>${skill}</span>`).join("")}
</div>
                    </div>

                    <div class="details">
                        <div>
                            <span>Salary</span>
                            <span class="text-(--text)">${job.stipend}</span>
                        </div>

                        <div>
                            <span>Experience</span>
                            <span class="text-(--text)">${job.experience}</span>
                        </div>

                        <div>
                            <span>Job Type</span>
                            <span class="text-(--text)">${job.type}</span>
                        </div>

                        <div>
                            <span>Deadline</span>
                            <span class="text-(--text)">${job.deadline}</span>
                        </div>
                    </div>

                    <div class="footer">
                        <span class="text-[14px]">Internship</span>
                            <button type="button" commandFor="1" command="request-close">Apply</button>
                    </div>
                </article>
        `;
    });
     lucide.createIcons();
}




searchInput.addEventListener("input", filterJobs);
categorySelect.addEventListener("change", filterJobs);

displayJobs(jobs);

