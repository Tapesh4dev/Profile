// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    // Add mobile menu functionality here
});

// Hero Section Animation
gsap.from('.hero-content', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.profile-image-container', {
    duration: 1.5,
    scale: 0,
    rotation: 360,
    ease: 'back.out(1.7)'
});

// Skills Section Animation
gsap.utils.toArray('.skill-icon').forEach((icon, i) => {
    gsap.from(icon, {
        scrollTrigger: {
            trigger: icon,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        scale: 0,
        rotation: 180,
        opacity: 0,
        delay: i * 0.1,
        ease: 'back.out(1.7)'
    });
});

// Timeline Section Animation
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// Projects Section Animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 100,
        opacity: 0,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// Contact Form Animation
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

// Parallax Effect for Hero Section
gsap.to('.hero::before', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 100,
    ease: 'none'
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// Add hover effect to skill icons
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1.2,
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
            ease: 'power2.out'
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1,
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            ease: 'power2.out'
        });
    });
});

// Add scroll progress indicator
gsap.to('.scroll-progress', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'max',
        scrub: true
    },
    width: '100%',
    ease: 'none'
});

// Add cursor effect
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
    });
});

// Add cursor styles
const style = document.createElement('style');
style.textContent = `
    .cursor {
        width: 20px;
        height: 20px;
        border: 2px solid var(--secondary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
    }
    
    .cursor.active {
        width: 40px;
        height: 40px;
        background: rgba(9, 132, 227, 0.1);
    }
`;
document.head.appendChild(style);

// Add cursor interaction
document.querySelectorAll('a, button, .skill-icon').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
}); 
