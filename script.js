// KZN Talent Portal Presentation JavaScript
// Interactive presentation controls and animations

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🚀 KZN Talent Portal Presentation Loaded');
    console.log('📌 Use arrow keys or space bar to navigate');
    console.log('🏠 Press Home to return to cover page');
    console.log('📑 Press T to view table of contents');
    
    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================
    document.addEventListener('keydown', function(e) {
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        
        // Left arrow or Page Up - Previous slide
        if ((e.key === 'ArrowLeft' || e.key === 'PageUp') && prevButton) {
            e.preventDefault();
            animateTransition(prevButton);
        }
        
        // Right arrow, Page Down, or Space - Next slide
        if ((e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') && nextButton) {
            e.preventDefault();
            animateTransition(nextButton);
        }
        
        // Home key - Go to cover page
        if (e.key === 'Home') {
            e.preventDefault();
            animateTransition(null, 'index.html');
        }
        
        // T key - Go to table of contents
        if (e.key === 't' || e.key === 'T') {
            e.preventDefault();
            animateTransition(null, 'table-of-contents.html');
        }
        
        // F key - Toggle fullscreen (if supported)
        if (e.key === 'f' || e.key === 'F') {
            e.preventDefault();
            toggleFullscreen();
        }
        
        // Escape - Exit fullscreen
        if (e.key === 'Escape' && document.fullscreenElement) {
            document.exitFullscreen();
        }
    });
    
    // ============================================
    // SMOOTH TRANSITION ANIMATION
    // ============================================
    function animateTransition(button, customUrl = null) {
        const container = document.querySelector('.presentation-container');
        
        // Add fade out animation
        container.style.opacity = '0';
        container.style.transform = 'translateY(-20px)';
        
        setTimeout(function() {
            if (customUrl) {
                window.location.href = customUrl;
            } else if (button) {
                button.click();
            }
        }, 300);
    }
    
    // ============================================
    // FULLSCREEN TOGGLE
    // ============================================
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('Fullscreen not supported:', err);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
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
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll(
        '.info-card, .problem-card, .toc-section, .feature-card, .program-card, .value-item, .participant-card, .process-step'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ============================================
    // PROGRESS TRACKING
    // ============================================
    function updateProgress() {
        const currentPage = window.location.pathname.split('/').pop();
        const slideMatch = currentPage.match(/slide-(\d+)\.html/);
        
        if (slideMatch) {
            const slideNumber = parseInt(slideMatch[1]);
            console.log(`📍 Current Slide: ${slideNumber} of 21`);
        }
    }
    
    updateProgress();
    
    // ============================================
    // TOUCH SWIPE SUPPORT FOR MOBILE
    // ============================================
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                const nextButton = document.querySelector('.next-button');
                if (nextButton) nextButton.click();
            } else {
                // Swipe right - previous slide
                const prevButton = document.querySelector('.prev-button');
                if (prevButton) prevButton.click();
            }
        }
    }
    
    // ============================================
    // AUTO-SAVE PRESENTATION STATE
    // ============================================
    function saveState() {
        const currentPage = window.location.pathname;
        localStorage.setItem('kzn_presentation_last_slide', currentPage);
        localStorage.setItem('kzn_presentation_timestamp', new Date().toISOString());
    }
    
    function loadState() {
        const lastSlide = localStorage.getItem('kzn_presentation_last_slide');
        const timestamp = localStorage.getItem('kzn_presentation_timestamp');
        
        if (lastSlide && timestamp) {
            console.log(`💾 Last viewed: ${lastSlide} at ${timestamp}`);
        }
    }
    
    saveState();
    loadState();
    
    // ============================================
    // PRINT OPTIMIZATION
    // ============================================
    window.addEventListener('beforeprint', function() {
        document.body.classList.add('printing');
        console.log('🖨️ Preparing for print...');
    });
    
    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
        console.log('✅ Print complete');
    });
    
    // ============================================
    // PRESENTATION TIMER (Optional)
    // ============================================
    let presentationStartTime = null;
    
    function startPresentationTimer() {
        if (!presentationStartTime) {
            presentationStartTime = new Date();
            console.log('⏱️ Presentation timer started');
        }
    }
    
    function getPresentationDuration() {
        if (presentationStartTime) {
            const duration = Math.floor((new Date() - presentationStartTime) / 1000);
            const minutes = Math.floor(duration / 60);
            const seconds = duration % 60;
            return `${minutes}m ${seconds}s`;
        }
        return '0m 0s';
    }
    
    // Start timer on first navigation
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', startPresentationTimer, { once: true });
    });
    
    // ============================================
    // ACCESSIBILITY ENHANCEMENTS
    // ============================================
    // Add aria labels to navigation buttons
    document.querySelectorAll('.nav-button').forEach(button => {
        const text = button.querySelector('span')?.textContent || 'Navigate';
        button.setAttribute('aria-label', text);
    });
    
    