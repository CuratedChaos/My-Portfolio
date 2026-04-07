// SMOOTH SCROLL FUNCTION
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}


// CAROUSEL SCROLL
const carousel = document.getElementById("carousel");

function scrollCarousel(direction) {
  const scrollAmount = 300;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}


// OPTIONAL: AUTO SCROLL (like premium sites)
let autoScroll = setInterval(() => {
  carousel.scrollBy({
    left: 1,
    behavior: "smooth"
  });
}, 20);


// PAUSE AUTO SCROLL ON HOVER (important UX)
carousel.addEventListener("mouseenter", () => {
  clearInterval(autoScroll);
});

carousel.addEventListener("mouseleave", () => {
  autoScroll = setInterval(() => {
    carousel.scrollBy({
      left: 1,
      behavior: "smooth"
    });
  }, 20);
});


// NAVBAR ACTIVE LINK HIGHLIGHT
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


// BUTTON RIPPLE EFFECT (VERY SEXY DETAIL 😏)
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const diameter = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = e.offsetX - diameter / 2 + "px";
    circle.style.top = e.offsetY - diameter / 2 + "px";
    circle.classList.add("ripple");

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

button {
  position: relative;
  overflow: hidden;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 208, 0, 0.4);
  transform: scale(0);
  animation: ripple 0.6s linear;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}


<!-- ================= script.js ================= -->
<script>
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
</script>

