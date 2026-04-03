// common.js - Shared animations and utilities for Velocity Atelier

document.addEventListener('DOMContentLoaded', () => {
    // Tailwind script already loaded via CDN
    
    // Fade-in animations on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const nav = document.getElementById('top-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('shadow-2xl', 'bg-[#121416]/95');
            } else {
                nav.classList.remove('shadow-2xl', 'bg-[#121416]/95');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Car card hover effects (for inventory & landing)
    const carCards = document.querySelectorAll('.car-card, .group');
    carCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Form submission feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = 'Sending...';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = `✓ Request Sent`;
                    btn.classList.add('!bg-green-500');
                    
                    setTimeout(() => {
                        alert("Thank you! Our concierge team will contact you shortly.");
                        form.reset();
                        btn.textContent = originalText;
                        btn.classList.remove('!bg-green-500');
                        btn.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    });

    console.log('%cVelocity Atelier - Common animations loaded successfully', 'color: #ADC7FF; font-family: monospace;');
});

// Utility functions
function toggleSearch() {
    alert("Search functionality coming soon. Try browsing our inventory!");
}

// Make functions available globally if needed
window.toggleSearch = toggleSearch;