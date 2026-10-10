
/* =========================================
   HWWGS WEBSITE JAVASCRIPT
   ========================================= */

// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );

    mobileMenu.hidden = isOpen;
  });

  // Close the menu when a navigation link is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.hidden = true;

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    });
  });
}


// 2. AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// 3. CONTACT FORM
const companyEmail = "info@hwwgs.com";

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = String(
      formData.get("name") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const service = String(
      formData.get("service") || ""
    ).trim();

    const message = String(
      formData.get("message") || ""
    ).trim();

    // Check that the company email has been configured
    if (!companyEmail) {
      formStatus.textContent =
        "The form is ready, but the company's official email address has not been configured. Add it to script.js before using the form.";

      return;
    }

    // Prepare the email subject
    const subject = encodeURIComponent(
      "HWWGS Enquiry: " + service
    );

    // Prepare the email body
    const body = encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Service: " + service + "\n\n" +
      "Message:\n" + message
    );

    // Open the visitor's default email application
    formStatus.textContent =
      "Opening your email application...";

    window.location.href =
      "mailto:" +
      companyEmail +
      "?subject=" +
      subject +
      "&body=" +
      body;
  });
}
