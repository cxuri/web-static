document.addEventListener('DOMContentLoaded', function() {
    // Handle Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = window.innerHeight * 0.8; // 80vh

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled'); // Add 'scrolled' class when scroll position exceeds 80vh
        } else {
            navbar.classList.remove('scrolled'); // Remove 'scrolled' class when scroll position is above 80vh
        }
    });

    // Text and Heading Slideshow
    const texts = [
        "At SafePlay, your security is our top priority because we believe that peace of mind is the foundation of trust.",
        "Innovation is the key to securing your digital future—SafePlay brings cutting-edge solutions to the table.",
        "SafePlay provides peace of mind with our robust cybersecurity measures designed to protect your business.",
        "Customer satisfaction is our mission—your feedback helps us continually improve our services."
    ];

    const headings = [
        "Embracing Security",
        "Innovating Your Digital Future",
        "Ensuring Your Digital Peace of Mind",
        "We Value Your Feedback"
    ];

    let index = 0;

    function changeText() {
        const textElement = document.getElementById('slideshow-text');
        const headingElement = document.querySelector('.hero-text-1');

        // Remove 'show' class for fade-out effect
        textElement.classList.remove('show');
        headingElement.classList.remove('show');

        // After the fade-out effect, change the text
        setTimeout(() => {
            // Update both heading and text
            headingElement.textContent = headings[index];
            textElement.textContent = texts[index];

            // Add 'show' class to fade them in
            textElement.classList.add('show');
            headingElement.classList.add('show');

            // Update index and loop through the arrays
            index = (index + 1) % texts.length;
        }, 1000); // Timeout for fade-out effect
    }

    // Change text every 10 seconds
    setInterval(changeText, 5000);

    // Initialize slideshow
    changeText();
});
