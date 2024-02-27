const messages = {
    aries: "You clicked Aries button!",
    taurus: "You clicked Taurus button!",
    // Add more messages for other buttons
};

// Attach event listeners to buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id.toLowerCase();
        const message = messages[buttonId];
        if (message) {
            // Display message using JavaScript alert
            alert(message);
        } else {
            console.error('Message not found for button:', buttonId);
        }
    });
});