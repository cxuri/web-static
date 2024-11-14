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
        "At SafePlay, your security is our top priority because we believe that peace of mind is the foundation of trust. We understand the importance of safeguarding your personal and business data, which is why our expert team works tirelessly to provide comprehensive protection against ever-evolving threats.",
        "Innovation is the key to securing your digital future—SafePlay brings cutting-edge solutions to the table. Our team is constantly researching and adopting the latest advancements in cybersecurity, ensuring that we stay ahead of emerging risks and provide you with the most effective protection available.",
        "SafePlay provides peace of mind with our robust cybersecurity measures designed to protect your business from cyber threats. From data encryption to real-time monitoring and proactive threat detection, we tailor our solutions to your unique needs, offering a safety net for your most valuable assets.",
        "Customer satisfaction is our mission—your feedback helps us continually improve our services. We value each relationship we build and strive to exceed your expectations. Our dedicated support team is always ready to assist, ensuring you have the best experience with our products and services."
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

    // Change text every 5 seconds
    setInterval(changeText, 7000);

    // Initialize slideshow
    changeText();
});

document.querySelector('.scroll-arrow a').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const nextSection = document.querySelector('#services');
    const scrollDuration = 800; // Time in ms for the scroll (e.g., 800ms)

    if (nextSection) {
        const startPosition = window.pageYOffset; // Get current scroll position
        const targetPosition = nextSection.offsetTop; // Get target section's position
        const distance = targetPosition - startPosition; // Calculate the scroll distance
        let startTime = null;

        function animateScroll(currentTime) {
            if (startTime === null) startTime = currentTime; // Initialize start time
            const timeElapsed = currentTime - startTime; // Calculate time elapsed
            const scrollProgress = Math.min(timeElapsed / scrollDuration, 1); // Calculate progress (clamped to 1)
            
            // Scroll the page incrementally
            window.scrollTo(0, startPosition + distance * scrollProgress - 50);

            if (timeElapsed < scrollDuration) {
                requestAnimationFrame(animateScroll); // Continue the scroll if duration hasn't elapsed
            }
        }

        requestAnimationFrame(animateScroll); // Start the smooth scroll
    }
});



const industryBtns = document.querySelectorAll('.industry-btn');
const industryDetails = document.querySelectorAll('.industry-details');
const industryImg = document.getElementById('industry-img');

let lastClickedIndex = null;  // To store the index of the last clicked button

// Handle mouse hover over the button to change image
industryBtns.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
        // Change the image on hover (only changes image, not details)
        const newImageSrc = btn.getAttribute('data-image');
        industryImg.src = newImageSrc;
    });
});

// Handle the click event to toggle the details
industryBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Check if the clicked industry is already expanded
        const details = industryDetails[index];
        
        // If it's the same industry as last clicked, toggle it
        if (lastClickedIndex === index) {
            details.classList.toggle('show');
            // If it's collapsing, reset the last clicked index
            if (!details.classList.contains('show')) {
                lastClickedIndex = null;
            }
        } else {
            // Collapse any previously expanded details
            industryDetails.forEach((detail, idx) => {
                if (idx !== index) {
                    detail.classList.remove('show');
                }
            });
            // Expand the current industry details
            details.classList.add('show');
            // Update the image
            const newImageSrc = btn.getAttribute('data-image');
            industryImg.src = newImageSrc;
            // Update the last clicked index
            lastClickedIndex = index;
        }
    });
});

