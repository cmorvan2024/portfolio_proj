// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Click event for Email and LinkedIn buttons
document.querySelectorAll(".contact-button").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default for safety (ensures smooth behavior)
        
        let link = this.getAttribute("href"); // Get the button link
        let platform = this.innerText.trim(); // Get button text
        
        if (link.includes("mailto:")) {
            alert("Opening Gmail to send an email...");
        } else if (link.includes("linkedin.com")) {
            alert("Redirecting to LinkedIn profile...");
        }

        // Open the actual link in a new tab
        window.open(link, "_blank");
    });
});
