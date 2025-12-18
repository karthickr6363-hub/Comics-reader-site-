// Auth Pages JavaScript

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In a real app, this would make an API call
    console.log('Login attempt:', { email, password });
    
    // Simulate login
    setTimeout(() => {
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html';
    }, 500);
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // In a real app, this would make an API call
    console.log('Register attempt:', { name, email, password });
    
    // Simulate registration
    setTimeout(() => {
        alert('Registration successful! Redirecting...');
        window.location.href = 'dashboard.html';
    }, 500);
}

function socialLogin(provider) {
    // In a real app, this would initiate OAuth flow
    console.log('Social login:', provider);
    alert(`${provider} login would be implemented here`);
}

