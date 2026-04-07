// =============================
// SCROLL REVEAL ANIMATION
// =============================
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, observerOptions);

document.querySelectorAll("section, .p-card, .c-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
    revealOnScroll.observe(el);
});

// =============================
// ADD ACTIVE STYLE (AUTO)
// =============================
const style = document.createElement("style");
style.innerHTML = `
.active {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
`;
document.head.appendChild(style);


// =============================
// PARALLAX BACKGROUND
// =============================
document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    const bg = document.querySelector(".mesh-gradient");
    if (bg) {
        bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});


// =============================
// NAVBAR SCROLL EFFECT
// =============================
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav-content");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(255,255,255,0.06)";
        nav.style.backdropFilter = "blur(25px)";
    } else {
        nav.style.background = "rgba(255,255,255,0.03)";
    }
});


// =============================
// EMAIL FORM → GMAIL OPEN
// =============================
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const gmailURL =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=vedant9badgujar@gmail.com` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;

        window.open(gmailURL, "_blank");
    });
}


// =============================
// BUTTON HOVER MICRO INTERACTION
// =============================
document.querySelectorAll(".btn-main").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});


// =============================
// SMOOTH SCROLL (EXTRA POLISH)
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
