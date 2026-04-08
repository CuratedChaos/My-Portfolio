// ================= SMOOTH SCROLL =================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth"
    });
  }
}


// ================= PARTICLES =================
tsParticles.load("particles", {
  particles: {
    number: {
      value: 30
    },
    color: {
      value: ["#ffd000", "#ff7a00"]
    },
    links: {
      enable: true,
      color: "#ff7a00",
      opacity: 0.3
    },
    move: {
      enable: true,
      speed: 0.8,
      outModes: {
        default: "bounce"
      }
    },
    size: {
      value: { min: 1, max: 3 }
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
        distance: 80
      }
    }
  }
});


// ================= CAROUSEL DRAG SCROLL =================
const carousel = document.querySelector(".carousel");

if (carousel) {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("active");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });
}


// ================= NAV ACTIVE LINK =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
