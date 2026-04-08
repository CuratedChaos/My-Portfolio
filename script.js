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

// ==============================
// ADVANCED PARTICLES SYSTEM
// ==============================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 90;

// mouse
const mouse = {
    x: null,
    y: null,
    radius: 120
};

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

// particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.baseX = this.x;
        this.baseY = this.y;

        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
    }

    update() {
        // normal movement
        this.x += this.speedX;
        this.y += this.speedY;

        // screen bounds
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // mouse repulsion
        if (mouse.x && mouse.y) {
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                let force = (mouse.radius - distance) / mouse.radius;
                let directionX = dx / distance;
                let directionY = dy / distance;

                this.x += directionX * force * 5;
                this.y += directionY * force * 5;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 242, 255, 0.8)";
        ctx.fill();
    }
}

// init
function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// connect lines
function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = dx * dx + dy * dy;

            if (distance < 10000) { // adjust connection distance
                let opacity = 1 - distance / 10000;

                ctx.strokeStyle = `rgba(0,242,255,${opacity})`;
                ctx.lineWidth = 0.5;

                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

// animation
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    connectParticles();

    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// resize fix
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});
