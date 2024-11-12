const appDevelopmentTexts = [
    "SafePlay’s app development services deliver intuitive, user-friendly mobile apps for both iOS and Android platforms.",
    "We develop mobile applications that are tailored to your business, with a focus on user experience and seamless performance.",
    "Our app development team uses the latest tools and technologies to create custom solutions that solve real business problems.",
    "Whether it's an enterprise app or a consumer-facing product, SafePlay ensures your app is optimized for success on every device."
];

let index = 0;
let isTyping = false; // Flag to prevent resetting text while typing

function typeEffect() {
    const textElement = document.getElementById('hero-text');
    
    // Check if the typing effect is in progress, if so, do not reset
    if (isTyping) return;

    // Mark typing as in progress
    isTyping = true;

    // Clear the text element initially to start fresh
    textElement.textContent = '';
    
    // Function to type out the text letter by letter
    function typeLetter(element, text, currentIndex) {
        if (currentIndex < text.length) {
            element.textContent += text[currentIndex];  // Append one letter at a time
            setTimeout(() => typeLetter(element, text, currentIndex + 1), 30);  // Delay of 100ms between letters
        } else {
            // Once typing is finished, mark typing as complete
            isTyping = false;
        }
    }

    // Start typing the next text
    const currentText = appDevelopmentTexts[index];

    // Start typing the text letter by letter
    typeLetter(textElement, currentText, 0);

    // Update index and loop through the array
    index = (index + 1) % appDevelopmentTexts.length;
}

// Change text every 5 seconds
setInterval(typeEffect, 5000);

// Initialize the typing effect on page load
typeEffect();