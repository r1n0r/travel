const bookNowButtons = document.querySelectorAll('.book-now');
const formOverlay = document.querySelector('.overlay');
const formContainer = document.querySelector('.form-container');
const bookingForm = document.getElementById('bookingForm');
const messageContainer = document.getElementById('messageContainer');

bookNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        formOverlay.classList.add('active');
        formContainer.classList.add('active');
    });
});

formOverlay.addEventListener('click', (e) => {
    if (e.target === formOverlay) {
        formOverlay.classList.remove('active');
        formContainer.classList.remove('active');
    }
});

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simulate form submission (you would replace this with actual form handling logic)
    // For demonstration, we'll show a message and hide the form
    const message = document.createElement('div');
    message.textContent = 'Thank you for your submission! We will contact you for further information.';
    message.classList.add('success-message');

    messageContainer.appendChild(message);
    formOverlay.classList.remove('active');
    formContainer.classList.remove('active');
    bookingForm.reset(); // Reset the form fields

    // Optionally, you can remove the message after a certain delay
    setTimeout(() => {
        message.remove();
    }, 5000); // Remove message after 5 seconds (adjust as needed)
});