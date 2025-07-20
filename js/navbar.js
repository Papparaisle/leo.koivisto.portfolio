
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${entry.target.id}`) {
        link.classList.add("active");
        }
    });
    }
});
}, {
root: null,
threshold: 0,
rootMargin: "-40% 0px -75% 0px"
});

sections.forEach(section => observer.observe(section));