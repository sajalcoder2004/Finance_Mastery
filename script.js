
// Navbar Fade-in Effect on Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("show-navbar");
    } else {
        navbar.classList.remove("show-navbar");
    }
});



// Scroll Animation for Benefit Cards
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".animate-slide-in");

    function revealOnScroll() {
        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger when page loads
});




