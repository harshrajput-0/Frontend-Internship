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