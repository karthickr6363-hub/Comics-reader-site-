// Contact Page JavaScript

function handleContact(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // In a real app, this would send to backend
    console.log('Contact form submitted:', formData);
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    event.target.reset();
}

