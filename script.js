// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenuToggle) {
	mobileMenuToggle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
		mobileMenuToggle.classList.toggle("active");
	});
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navMenu.classList.remove("active");
		mobileMenuToggle.classList.remove("active");
	});
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			const offsetTop = target.offsetTop - 80; // Account for fixed navbar
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}
	});
});

// Contact Form Handling - Dual method: EmailJS (primary) + Netlify Forms (backup)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");

// EmailJS configuration - UPDATE THESE VALUES after setting up EmailJS
const EMAILJS_CONFIG = {
	serviceId: "service_e40mfdc", // Replace with your EmailJS service ID
	templateId: "template_leegxfb", // Replace with your EmailJS template ID
	publicKey: "Mgg0AkZWTZ6FlRqkq", // Replace with your EmailJS public key
};

// Initialize EmailJS if available
if (typeof emailjs !== "undefined") {
	emailjs.init(EMAILJS_CONFIG.publicKey);
}

if (contactForm) {
	contactForm.addEventListener("submit", async function (e) {
		e.preventDefault();

		// Disable submit button
		const submitButton = contactForm.querySelector('button[type="submit"]');
		const originalButtonText = submitButton.textContent;
		submitButton.disabled = true;
		submitButton.textContent = "Sender...";
		formStatus.textContent = "";
		formStatus.className = "form-status";

		// Get form data
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const phone = document.getElementById("phone").value;
		const message = document.getElementById("message").value;

		let emailSent = false;

		// Try EmailJS first (more reliable)
		if (
			typeof emailjs !== "undefined" &&
			EMAILJS_CONFIG.serviceId !== "YOUR_SERVICE_ID"
		) {
			try {
				await emailjs.send(
					EMAILJS_CONFIG.serviceId,
					EMAILJS_CONFIG.templateId,
					{
						name: name,
						email: email,
						phone: phone || "Ikke oppgitt",
						message: message,
						to_email: "kontakt@rentogblankt.no",
					},
				);
				emailSent = true;
				console.log("Email sent successfully via EmailJS");
			} catch (error) {
				console.error("EmailJS error:", error);
				// Fall through to Netlify Forms
			}
		}

		// Fallback to Netlify Forms if EmailJS not configured or failed
		if (!emailSent) {
			try {
				const formData = new FormData(contactForm);
				const encoded = new URLSearchParams(formData).toString();

				const response = await fetch("/", {
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
					body: encoded,
				});

				if (response.ok || response.redirected) {
					emailSent = true;
					console.log("Form submitted to Netlify Forms");
				} else {
					throw new Error("Netlify Forms submission failed");
				}
			} catch (error) {
				console.error("Netlify Forms error:", error);
			}
		}

		// Show result
		if (emailSent) {
			formStatus.textContent =
				"✓ Takk for din henvendelse! Vi tar kontakt med deg så snart som mulig.";
			formStatus.className = "form-status success";
			contactForm.reset();
			formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });
		} else {
			formStatus.textContent =
				"✗ Noe gikk galt ved sending. Vennligst kontakt oss direkte på kontakt@rentogblankt.no eller telefon.";
			formStatus.className = "form-status error";
		}

		// Re-enable submit button
		submitButton.disabled = false;
		submitButton.textContent = originalButtonText;
	});
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll > 100) {
		navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
	} else {
		navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
	}

	lastScroll = currentScroll;
});

// Fade in animation on scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = "1";
			entry.target.style.transform = "translateY(0)";
		}
	});
}, observerOptions);

// Observe service cards
document.querySelectorAll(".service-card").forEach((card) => {
	card.style.opacity = "0";
	card.style.transform = "translateY(20px)";
	card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
	observer.observe(card);
});

// Observe contact items
document.querySelectorAll(".contact-item").forEach((item) => {
	item.style.opacity = "0";
	item.style.transform = "translateX(-20px)";
	item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
	observer.observe(item);
});

// Footer links handling
const cookieLink = document.getElementById("cookie-link");
const accessibilityLink = document.getElementById("accessibility-link");

if (cookieLink) {
	cookieLink.addEventListener("click", function (e) {
		e.preventDefault();
		alert(
			"Informasjonskapsler: Denne nettsiden bruker kun nødvendige informasjonskapsler for å fungere. Vi bruker ikke sporing eller markedsførings-informasjonskapsler.",
		);
	});
}

if (accessibilityLink) {
	accessibilityLink.addEventListener("click", function (e) {
		e.preventDefault();
		alert(
			"Tilgjengelighet: Vi jobber kontinuerlig med å forbedre tilgjengeligheten på vår nettside. Hvis du opplever problemer med tilgjengelighet, vennligst kontakt oss på kontakt@rentogblankt.no",
		);
	});
}
