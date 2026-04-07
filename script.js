// Custom Cursor Glow
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    // Subtle lag effect for the glow
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Create the cursor element in CSS for better performance
const style = document.createElement('style');
style.innerHTML = `
    .cursor-glow {
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255,208,0,0.1) 0%, transparent 70%);
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
    }
`;
document.head.appendChild(style);

// Smooth Scroll Function
function scrollToSection(id) {
    const element = document.getElementById(id);
    window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky nav
        behavior: 'smooth'
    });
}

// Reveal Animation on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Horizontal Scroll with Mouse Wheel for Projects
const scrollContainer = document.querySelector(".carousel-container");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
