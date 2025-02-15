document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active section in the navbar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Toggle menu for mobile view
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    document.querySelector("header").appendChild(menuToggle);
    
    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener("click", (event) => {
        if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
            nav.classList.remove("active");
            menuToggle.classList.remove("open");
        }
    });

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    
    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on load

    // Hover animations for sections
    document.querySelectorAll("section").forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.02)";
            section.style.transition = "transform 0.3s ease-in-out";
        });
        section.addEventListener("mouseout", () => {
            section.style.transform = "scale(1)";
        });
    });

    // Button hover effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#0056b3";
            button.style.transition = "background-color 0.3s ease-in-out";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "";
        });
    });
});
