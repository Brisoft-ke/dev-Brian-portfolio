/* ============================================================
   DEV BRIAN PORTFOLIO — main.js
   ============================================================ */

// ---- Timely greeting in footer ----
function setFooterGreeting() {
    const el = document.getElementById('footerGreeting');
    if (!el) return;

    const hour = new Date().getHours();
    let emoji, time, message;

    if (hour >= 5 && hour < 12) {
        emoji = '🌅'; time = 'Good Morning';
        message = 'Hope your morning is as clean as good code.';
    } else if (hour >= 12 && hour < 17) {
        emoji = '☀️'; time = 'Good Afternoon';
        message = 'Keep shipping, the grind is paying off.';
    } else if (hour >= 17 && hour < 21) {
        emoji = '🌇'; time = 'Good Evening';
        message = 'Wind down, debug tomorrow — you\'ve earned it.';
    } else {
        emoji = '🌙'; time = 'Good Night';
        message = 'Still up? Respect. The best devs work in the dark.';
    }

    el.innerHTML = `${emoji} <span>${time}</span> — ${message}`;
}

setFooterGreeting();

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// ---- Project filter ----
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = '';
                card.style.animation = 'fadeUp 0.4s ease both';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ---- Scroll-triggered fade-in for cards ----
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .timeline-item, .project-card, .contact-item')
    .forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease`;
        observer.observe(el);
    });

// ---- Contact form (basic) ----
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = '✓ Message Sent!';
        btn.style.background = 'var(--accent)';
        btn.style.color = '#0a0a0c';
        setTimeout(() => {
            btn.textContent = 'Send Message →';
            btn.style.background = '';
            btn.style.color = '';
            form.reset();
        }, 3000);
    });
}