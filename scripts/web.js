const webDevelopmentTexts = [
    "At SafePlay, we specialize in crafting custom websites that enhance your online presence and drive business growth.",
    "Our web development services combine cutting-edge technologies with responsive design to create engaging user experiences.",
    "Whether you're launching an e-commerce site or a custom platform, SafePlay has the expertise to build scalable, high-performance websites.",
    "From concept to launch, our web development team ensures every project meets your business goals and exceeds expectations."
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
    const currentText = webDevelopmentTexts[index];

    // Start typing the text letter by letter
    typeLetter(textElement, currentText, 0);

    // Update index and loop through the array
    index = (index + 1) % webDevelopmentTexts.length;
}

// Change text every 5 seconds
setInterval(typeEffect, 5000);

// Initialize the typing effect on page load
typeEffect();
