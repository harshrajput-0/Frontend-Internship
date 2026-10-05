
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const printButton = document.getElementById("printBtn");

// Loading Theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

// Adding theme toggle event
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    // Saving them to local storage
    localStorage.setItem("theme", isDark ? "dark" : "light");

});


// Adding print event to button -----------------
printButton.addEventListener("click", function () { window.print(); });

