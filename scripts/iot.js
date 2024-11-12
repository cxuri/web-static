const iotDevelopmentTexts = [
    "With our IoT development expertise, we help businesses integrate intelligent, connected solutions that drive innovation.",
    "SafePlay develops IoT systems that optimize operations, improve efficiency, and create new opportunities through connected devices.",
    "Our IoT solutions bridge the gap between the physical world and digital technologies, providing real-time data and insights for smarter decision-making.",
    "From smart home products to industrial IoT systems, SafePlay offers end-to-end development for the connected future."
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
    const currentText = iotDevelopmentTexts[index];

    // Start typing the text letter by letter
    typeLetter(textElement, currentText, 0);

    // Update index and loop through the array
    index = (index + 1) % iotDevelopmentTexts.length;
}

// Change text every 5 seconds
setInterval(typeEffect, 5000);

// Initialize the typing effect on page load
typeEffect();