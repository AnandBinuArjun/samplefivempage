// NeonRP Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Video background handling
    const video = document.getElementById('background-video');
    if (video) {
        video.playbackRate = 0.8; // Slow down video for better viewing
    }

    // Simulate live player count updates
    function updatePlayerCount() {
        const playerCountElement = document.querySelector('.player-count');
        if (playerCountElement) {
            // Simulate player count between 35-55
            const players = Math.floor(Math.random() * 20) + 35;
            playerCountElement.textContent = `${players}/256 Players`;
        }
    }

    // Update player count every 30 seconds
    setInterval(updatePlayerCount, 30000);
    
    // Initial update
    updatePlayerCount();

    // Server status indicator animation
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        setInterval(() => {
            statusIndicator.style.opacity = statusIndicator.style.opacity === '1' ? '0.5' : '1';
        }, 1000);
    }

    // Enhanced 3D mouse move effect with better performance
    document.addEventListener('mousemove', (e) => {
        // Throttle the mousemove event for better performance
        if (!window.mouseMoveThrottle) {
            window.mouseMoveThrottle = true;
            requestAnimationFrame(() => {
                const cards = document.querySelectorAll('.feature-card, .mode-card, .staff-member, .rules-category, .rules-punishment, .server-info');
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                
                cards.forEach(card => {
                    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(30px)`;
                });
                
                window.mouseMoveThrottle = false;
            });
        }
    });

    // Reset card transform when mouse leaves
    document.addEventListener('mouseleave', () => {
        const cards = document.querySelectorAll('.feature-card, .mode-card, .staff-member, .rules-category, .rules-punishment, .server-info');
        cards.forEach(card => {
            card.style.transform = 'translateZ(0)';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateZ(20px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateZ(0) scale(1)';
        });
        
        // Add click effect
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateZ(10px) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateZ(20px) scale(1.05)';
        });
    });

    // Initialize any animations
    initAnimations();
    
    // Add parallax effect to hero section
    initParallax();
    
    // Touch support for mobile devices
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
});

// Touch event handlers
function handleTouchStart(e) {
    // Add touch feedback for interactive elements
    const target = e.target;
    if (target.classList.contains('btn') || target.closest('.btn')) {
        const button = target.classList.contains('btn') ? target : target.closest('.btn');
        button.style.transform = 'translateZ(10px) scale(0.98)';
    }
}

function handleTouchEnd(e) {
    // Reset button styles after touch
    const target = e.target;
    if (target.classList.contains('btn') || target.closest('.btn')) {
        const button = target.classList.contains('btn') ? target : target.closest('.btn');
        button.style.transform = 'translateZ(0) scale(1)';
        
        // Add a slight delay before resetting to show the effect
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }
}

// Initialize animations
function initAnimations() {
    // Fade in elements when they come into view
    const fadeElements = document.querySelectorAll('.feature-card, .mode-card, .staff-member, .section-title, .rules-category, .accordion-item, .server-info');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateZ(0)';
                    // Stop observing this element to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
        });
        
        fadeElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateZ(50px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        fadeElements.forEach(element => {
            element.style.opacity = 1;
            element.style.transform = 'translateZ(0)';
        });
    }
}

// Parallax effect for hero section
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content-3d');
    
    if (heroSection && heroContent) {
        // Throttle scroll events for better performance
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY;
                    heroContent.style.transform = `translateZ(${50 + scrollPosition * 0.5}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}

// Function to handle Discord button click
function joinDiscord() {
    // In a real implementation, this would redirect to your Discord server
    console.log('Redirecting to Discord server...');
    // window.open('https://discord.gg/your-server', '_blank');
}

// Function to copy server IP to clipboard
function copyServerIP() {
    const ipElement = document.querySelector('.server-info p');
    if (ipElement) {
        const ip = ipElement.textContent;
        navigator.clipboard.writeText(ip).then(() => {
            // Show a temporary message
            const originalText = ipElement.textContent;
            ipElement.textContent = 'Copied to clipboard!';
            setTimeout(() => {
                ipElement.textContent = originalText;
            }, 2000);
        });
    }
}

// Simulate server status changes (for demo purposes)
function simulateServerStatus() {
    const statusIndicator = document.querySelector('.status-indicator');
    const statusText = document.querySelector('.status-text');
    
    if (statusIndicator && statusText) {
        // Randomly change status every few minutes (demo only)
        setInterval(() => {
            const isOnline = Math.random() > 0.1; // 90% chance of being online
            
            if (isOnline) {
                statusIndicator.className = 'status-indicator online';
                statusText.textContent = 'Server Online';
            } else {
                statusIndicator.className = 'status-indicator';
                statusIndicator.style.backgroundColor = '#ff0000';
                statusIndicator.style.boxShadow = '0 0 10px #ff0000';
                statusText.textContent = 'Server Offline';
            }
        }, 180000); // Change every 3 minutes
    }
}

// Run simulation
simulateServerStatus();

// Enhanced accordion functionality with performance improvements
function initAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionItem = this.closest('.accordion-item');
            
            // Add 3D effect on click
            accordionItem.style.transform = 'translateZ(20px)';
            
            // Use requestAnimationFrame for smoother animation
            requestAnimationFrame(() => {
                setTimeout(() => {
                    accordionItem.style.transform = 'translateZ(0)';
                }, 300);
            });
        });
    });
}

// Initialize accordion
initAccordion();

// Add 3D effect to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.neon-header');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.transform = 'translateZ(10px)';
        } else {
            navbar.style.transform = 'translateZ(0)';
        }
    }
});