const testimonialList = document.getElementById("testimonial-list");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Data Array 
const testimonials = [
    {
        name: "Abraham Baker",
        role: "Product Designer",
        text: "Working with this team has been a game-changer — their attention to detail, creativity, and commitment to deadlines exceeded every expectation I had.",
        image: "abraham-baker.jpg",
    },
    {
        name: "Adem Lane",
        role: "Frontend Developer",
        text: "The entire process was smooth and professional. They understood our requirements quickly and delivered a result that was better than we imagined.",
        image: "adem-lane.jpg",
    },
    {
        name: "Adil Floyd",
        role: "Marketing Manager",
        text: "Their creativity and attention to detail really stood out. The final result helped us present our brand in a much stronger way.",
        image: "adil-floyd.jpg",
    },
    {
        name: "Adriana Sullivan",
        role: "UX Researcher",
        text: "I was impressed by how carefully they listened to our feedback and turned every idea into a polished and practical solution.",
        image: "adriana-sullivan.jpg",
    },
    {
        name: "Alec Whitten",
        role: "Project Manager",
        text: "They consistently delivered high-quality work on time. Communication was clear, and every part of the project felt thoughtfully handled.",
        image: "alec-whitten.jpg",
    },
    {
        name: "Alesha Barry",
        role: "Content Strategist",
        text: "The quality of the work was excellent from start to finish. They brought fresh ideas while still keeping our original goals in focus.",
        image: "alesha-barry.jpg",
    },
    {
        name: "Ali Mahdi",
        role: "Software Engineer",
        text: "The attention to detail was exceptional. Everything was implemented cleanly, and the final product feels both reliable and easy to use.",
        image: "ali-mahdi.jpg",
    },
    {
        name: "Aliah Lane",
        role: "Creative Director",
        text: "From the initial concept to the final delivery, the team was thoughtful, responsive, and committed to producing work that truly stood out.",
        image: "aliah-lane.jpg",
    },
];


// Mapping the cards 
testimonialList.innerHTML = testimonials.map((t) => `<article class="testimonial-card">
    <div class="testimonial-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor"
                d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.9 2.9 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789M20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.9 2.9 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2" />
        </svg>


        <p>${t.text}</p>
    </div>

    <div class="testimonial-author">
        <img src="./assets/${t.image}" alt="Profile">
        <div>
            <h2>${t.name}</h2>

            <span>${t.role}</span>
        </div>

    </div>
</article>`
).join("");




const step = () => {
    return (
        testimonialList.querySelector(".testimonial-card").offsetWidth +
        parseFloat(getComputedStyle(testimonialList).gap)
    );
};

// Scroll Previous Card 
prev.onclick = () => {
    testimonialList.scrollBy({
        left: -step(),
        behavior: "smooth"
    });
};

// Scroll Next Card 
next.onclick = () => {
    testimonialList.scrollBy({
        left: step(),
        behavior: "smooth"
    });
};


// For disabling buttons
function updateArrows() {
    prev.disabled = testimonialList.scrollLeft <= 0;

    next.disabled =
        testimonialList.scrollLeft + testimonialList.clientWidth >=
        testimonialList.scrollWidth;
}

testimonialList.addEventListener("scroll", updateArrows);

updateArrows();