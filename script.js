// Fade-in Reveal Animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .p-card, .c-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
    revealOnScroll.observe(el);
});

// Adding Active Class Styles via JS for simplicity
const revealStyle = document.createElement('style');
revealStyle.innerHTML = `
    .active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(revealStyle);

// Subtle Parallax for Background
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    document.querySelector('.mesh-gradient').style.transform = `translate(${moveX}px, ${moveY}px)`;
});
