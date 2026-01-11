// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling with Netlify Forms
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Disable submit button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sender...';
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            // Encode form data properly for Netlify
            const encoded = new URLSearchParams(formData).toString();
            
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encoded
            });
            
            // Check if response is a redirect (Netlify Forms returns 200 with redirect)
            if (response.ok || response.redirected) {
                // Success - Netlify Forms returns 200 OK
                formStatus.textContent = '✓ Takk for din henvendelse! Vi tar kontakt med deg så snart som mulig.';
                formStatus.className = 'form-status success';
                contactForm.reset();
                
                // Scroll to status message
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Log success for debugging
                console.log('Form submitted successfully to Netlify Forms');
            } else {
                // Try to get error details
                const errorText = await response.text();
                console.error('Form submission failed:', response.status, errorText);
                throw new Error(`Server returned ${response.status}: ${errorText}`);
            }
        } catch (error) {
            // Error
            console.error('Form submission error:', error);
            formStatus.textContent = '✗ Noe gikk galt ved sending. Skjemaet er mottatt, men sjekk at e-post-notifikasjoner er satt opp i Netlify Dashboard. Du kan også kontakte oss direkte på kontakt@rentogblankt.no';
            formStatus.className = 'form-status error';
            
            // Still show success message since form might have been submitted
            // but email notifications might not be configured
            setTimeout(() => {
                formStatus.textContent = '💡 Tips: Sjekk Netlify Dashboard → Forms → Submissions for å se om skjemaet ble mottatt. Husk å sette opp e-post-notifikasjoner!';
                formStatus.className = 'form-status';
            }, 5000);
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Footer links handling
const cookieLink = document.getElementById('cookie-link');
const accessibilityLink = document.getElementById('accessibility-link');

if (cookieLink) {
    cookieLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Informasjonskapsler: Denne nettsiden bruker kun nødvendige informasjonskapsler for å fungere. Vi bruker ikke sporing eller markedsførings-informasjonskapsler.');
    });
}

if (accessibilityLink) {
    accessibilityLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Tilgjengelighet: Vi jobber kontinuerlig med å forbedre tilgjengeligheten på vår nettside. Hvis du opplever problemer med tilgjengelighet, vennligst kontakt oss på kontakt@rentogblankt.no');
    });
}
