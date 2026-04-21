// ===== DOM Elements =====
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

// ===== Contact Form Handling =====
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            service: formData.get('service'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!validateForm(data)) {
            return;
        }
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        contactForm.reset();
    });
}

// ===== Form Validation =====
function validateForm(data) {
    // Check if required fields are filled
    if (!data.name.trim()) {
        showError('Please enter your name');
        return false;
    }
    
    if (!data.email.trim()) {
        showError('Please enter your email');
        return false;
    }
    
    if (!isValidEmail(data.email)) {
        showError('Please enter a valid email address');
        return false;
    }
    
    if (!data.service) {
        showError('Please select a service');
        return false;
    }
    
    if (!data.message.trim()) {
        showError('Please enter a message');
        return false;
    }
    
    return true;
}

// ===== Email Validation =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== Show Error Message =====
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.textContent = message;
    
    contactForm.insertBefore(errorDiv, contactForm.firstChild);
    
    // Remove error after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// ===== Show Success Message =====
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
    `;
    
    contactForm.insertBefore(successDiv, contactForm.firstChild);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ===== Add Active State to Navigation Links =====
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Add Scroll Animation to Elements =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ===== Apply Scroll Animation =====
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.feature-card, .service-item, .team-member, .choose-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== Mobile Menu Toggle (if needed) =====
function setupMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        // Mobile adjustments can be made here
    }
}

// ===== Initialize on Load =====
window.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    console.log('Try Digital Website Loaded Successfully!');
});

// ===== Handle Window Resize =====
window.addEventListener('resize', () => {
    setupMobileMenu();
});

// ===== Utility Functions =====

// Format phone number
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
}

// Add toast notification (for future use)
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Log page analytics (for future integration)
function trackPageView(pageName) {
    console.log(`Page View: ${pageName}`);
    // Integrate with Google Analytics or other analytics service
}

// ===== Event Tracking =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const buttonText = this.textContent;
        console.log(`Button clicked: ${buttonText}`);
    });
});

// ===== Performance Optimization =====
// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
