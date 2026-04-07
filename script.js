// ==============================
// SAFE LOAD (prevents duplication bugs)
// ==============================
document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // SCROLL REVEAL (no repeat glitch)
    // ==============================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // IMPORTANT: prevents repeat
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".p-card, .c-item, .social-card, .hobby-card").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });


    // ==============================
    // NAVBAR SCROLL EFFECT
    // ==============================
    const nav = document.querySelector(".nav-content");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(255,255,255,0.08)";
            nav.style.backdropFilter = "blur(25px)";
        } else {
            nav.style.background = "rgba(255,255,255,0.05)";
        }
    });


    // ==============================
    // PARALLAX BACKGROUND
    // ==============================
    const bg = document.querySelector(".mesh-gradient");

    document.addEventListener("mousemove", (e) => {
        if (!bg) return;

        const x = (e.clientX - window.innerWidth / 2) * 0.01;
        const y = (e.clientY - window.innerHeight / 2) * 0.01;

        bg.style.transform = `translate(${x}px, ${y}px)`;
    });


    // ==============================
    // SMOOTH SCROLL NAV
    // ==============================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // ==============================
    // BUTTON MICRO INTERACTION
    // ==============================
    document.querySelectorAll(".btn-main").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });


    // ==============================
    // EMAIL FORM → GMAIL
    // ==============================
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

});


// ==============================
// ADD REVEAL ANIMATION STYLE (auto)
// ==============================
const style = document.createElement("style");
style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}
.show {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);
tsParticles.load("particles-js", {
    background: {
        color: "transparent"
    },
    particles: {
        number: {
            value: 60
        },
        color: {
            value: ["#00f2ff", "#7000ff"]
        },
        links: {
            enable: true,
            color: "#00f2ff",
            opacity: 0.2
        },
        move: {
            enable: true,
            speed: 1
        },
        size: {
            value: 2
        },
        opacity: {
            value: 0.5
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            repulse: {
                distance: 100
            }
        }
    }
});
