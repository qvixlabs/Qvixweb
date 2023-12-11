  const textParts = [
            "brand",
            "product",
            "business",
            // Add more text parts as needed
        ];

        let partIndex = 0;  // Index of the current text part
        let charIndex = 0;  // Index of the current character within the text part
        const typingText = document.getElementById("typing-text");

        function type() {
            const currentPart = textParts[partIndex];

            if (charIndex < currentPart.length) {
                const coloredText = `<span style="color: #5956E9">${currentPart.charAt(charIndex)}</span>`;
                typingText.innerHTML += coloredText;
                charIndex++;
                setTimeout(type, 300); // Adjust the typing speed by changing the timeout value
            } else {
                setTimeout(erase, 1800); // Wait for a second before erasing
            }
        }

        function erase() {
            if (typingText.innerHTML.length > 0) {
                const visibleText = typingText.innerHTML;
                typingText.innerHTML = visibleText.slice(0, -33); // Assuming 33 characters for the span opening and closing tags
                setTimeout(erase, 100); // Adjust the erasing speed by changing the timeout value
            } else {
                partIndex = (partIndex + 1) % textParts.length; // Move to the next text part or loop back to the beginning
                charIndex = 0; // Reset the character index
                setTimeout(type, 180); // Wait for a second before typing the next part
            }
        }

        type();