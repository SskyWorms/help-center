document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For demonstration, we'll log the form data instead of sending it somewhere
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form fields
    this.reset();
    alert('Thank you for your message!');
});
