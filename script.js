// Wedding Invitation JavaScript

// Set the wedding date (change this to your actual wedding date)
const weddingDate = new Date('2025-12-21T16:00:00').getTime();

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        // Wedding day has arrived!
    document.getElementById('countdown').innerHTML = '<h2 style="color: white; font-family: \'Amsterdam Four\', \'Alegreya\', serif; font-size: 3rem;">¡Es nuestro día especial!</h2>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown on page load
updateCountdown();

// Smooth scrolling for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    document.querySelector('.wedding-details').scrollIntoView({
        behavior: 'smooth'
    });
});

// Photo Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides ? slides.length : 0;

// Initialize carousel
function initCarousel() {
    if (!document.getElementById('carouselTrack')) return; // guard if carousel not present
    // Create dots
    const dotsContainer = document.getElementById('carouselDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // Add event listeners to navigation buttons
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    
    // Auto-play carousel
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    
    // Move track
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Update slide active class
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Modal functions
function showModal() {
    document.getElementById('successModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Map functions (you can customize these with actual coordinates)
function openMap(location) {
    let coordinates;
    let placeName;
    
    if (location === 'ceremony') {
        // Replace with actual ceremony coordinates
        coordinates = '18.508880708768615, -97.18317770420616'; // Example: Mexico City coordinates
        placeName = 'Parroquia La Inmaculada Concepción';
    } else if (location === 'reception') {
        // Replace with actual reception coordinates
        coordinates = '18.510035600416888, -97.1706675494456'; // Example: Mexico City coordinates
        placeName = 'Casa Sara y Honorato';
    }
    
    // Open Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}&query_place_id=${encodeURIComponent(placeName)}`;
    window.open(url, '_blank');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel only if present
    initCarousel();
    
    const animatedElements = document.querySelectorAll('.detail-card, .info-card, .countdown-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Lightbox setup for simple gallery
    const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImage');
    const lbCaption = document.getElementById('lightboxCaption');
    const lbCounter = document.getElementById('lightboxCounter');
    const btnClose = document.getElementById('lightboxClose');
    const btnPrev = document.getElementById('lightboxPrev');
    const btnNext = document.getElementById('lightboxNext');

    let currentIndex = 0;
    let touchStartX = null;

    function updateLightbox() {
        if (!galleryImages.length) return;
        const img = galleryImages[currentIndex];
        lbImg.src = img.getAttribute('src');
        lbImg.alt = img.getAttribute('alt') || 'Foto';
        lbCaption.textContent = img.getAttribute('alt') || '';
        lbCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    }

    function openLightbox(index) {
        if (!galleryImages.length) return;
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        // focus for accessibility
        btnNext && btnNext.focus();
        document.addEventListener('keydown', onKeydown);
    document.body.style.overflow = 'hidden';
    }

    function closeLightboxHandler() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.removeEventListener('keydown', onKeydown);
    document.body.style.overflow = '';
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightbox();
    }

    function onKeydown(e) {
        if (e.key === 'Escape') closeLightboxHandler();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    }

    // Touch swipe
    function onTouchStart(e) {
        touchStartX = e.changedTouches[0].clientX;
    }
    function onTouchEnd(e) {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const threshold = 40; // px
        if (dx > threshold) {
            prevImage();
        } else if (dx < -threshold) {
            nextImage();
        }
        touchStartX = null;
    }

    // Wire up events if gallery exists
    if (galleryImages.length && lightbox && lbImg && lbCaption) {
        galleryImages.forEach((img, idx) => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => openLightbox(idx));
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') openLightbox(idx);
            });
            img.setAttribute('tabindex', '0');
        });

        btnClose && btnClose.addEventListener('click', closeLightboxHandler);
        btnPrev && btnPrev.addEventListener('click', prevImage);
        btnNext && btnNext.addEventListener('click', nextImage);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightboxHandler();
        });
        lightbox.addEventListener('touchstart', onTouchStart, { passive: true });
        lightbox.addEventListener('touchend', onTouchEnd, { passive: true });
    }
});

// Add floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '♥';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 10 + 10 + 'px';
    heart.style.color = '#D4AF37';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'floatUp 4s linear infinite';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            bottom: -10vh;
            transform: translateX(0px) rotate(0deg);
        }
        25% {
            transform: translateX(10px) rotate(90deg);
        }
        50% {
            transform: translateX(-10px) rotate(180deg);
        }
        75% {
            transform: translateX(5px) rotate(270deg);
        }
        100% {
            bottom: 100vh;
            transform: translateX(-5px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add click effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add music player functionality (optional)
let isPlaying = false;
let audio = null;

function toggleMusic() {
    if (!audio) {
        // You can add a wedding song URL here
        // audio = new Audio('path-to-your-wedding-song.mp3');
        // audio.loop = true;
        // audio.volume = 0.3;
    }
    
    if (isPlaying) {
        // audio.pause();
        isPlaying = false;
    } else {
        // audio.play();
        isPlaying = true;
    }
}

// Add music control button (uncomment if you want to add background music)
/*
const musicButton = document.createElement('button');
musicButton.innerHTML = '<i class="fas fa-music"></i>';
musicButton.style.position = 'fixed';
musicButton.style.bottom = '20px';
musicButton.style.right = '20px';
musicButton.style.zIndex = '1000';
musicButton.style.background = '#D4AF37';
musicButton.style.color = 'white';
musicButton.style.border = 'none';
musicButton.style.borderRadius = '50%';
musicButton.style.width = '50px';
musicButton.style.height = '50px';
musicButton.style.cursor = 'pointer';
musicButton.onclick = toggleMusic;
document.body.appendChild(musicButton);
*/

// Add loading animation
window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        ">
            <div style="text-align: center;">
                <div style="
                    font-family: 'Amsterdam Four', 'Alegreya', serif;
                    font-size: 3rem;
                    color: #0C4A6E;
                    margin-bottom: 20px;
                ">Rosa & Honorato</div>
                <div style="
                    width: 50px;
                    height: 50px;
                    border: 3px solid #D4AF37;
                    border-top: 3px solid transparent;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto;
                "></div>
            </div>
        </div>
    `;
    
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);
});

console.log('¡Invitación de boda cargada exitosamente! 💕 - Rosa & Honorato');