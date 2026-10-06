// Getting Feature List Elements 
const basicPlan = document.getElementById("basic-plan");
const proPlan = document.getElementById("pro-plan");
const enterprisePlan = document.getElementById("enterprise-plan");

// Plan Features List
const basicFeatures = [
    "Access to basic courses",
    "Community support",
    "10 practice projects",
    "Course completion certificate",
    "Basic code review",
    "Learning progress tracking",
    "Job-ready skill assessments"
];

const proFeatures = [
    "Access to all Pro courses",
    "Priority community support",
    "30 practice projects",
    "Course completion certificate",
    "Advanced code review",
    "Learning progress tracking",
    "Job assistance"
]

const enterpriseFeatures = [
    "Access to all courses",
    "Dedicated support",
    "Unlimited practice projects",
    "Team learning dashboard",
    "Advanced code review",
    "Custom learning paths",
    "1-on-1 mentoring sessions"
]


// Injecting Plan features into elements 
basicPlan.innerHTML = `${basicFeatures.map(feature => `<li>${feature}</li>`).join("")}`;

proPlan.innerHTML = `${proFeatures.map(proFeature => `<li>${proFeature}</li>`).join("")}`;

enterprisePlan.innerHTML = `${enterpriseFeatures.map(feature => `<li>${feature}</li>`).join("")}`;




