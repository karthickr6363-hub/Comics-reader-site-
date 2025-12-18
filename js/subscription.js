// Subscription Page JavaScript

function selectPlan(planType) {
    document.getElementById('paymentSection').style.display = 'block';
    document.getElementById('paymentSection').scrollIntoView({ behavior: 'smooth' });
    
    // Store selected plan
    localStorage.setItem('selectedPlan', planType);
}

function selectPaymentMethod(method) {
    document.querySelectorAll('.payment-method').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

document.getElementById('paymentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, this would process payment
    alert('Payment processing would be implemented here with Stripe/PayPal integration');
    
    // Simulate success
    setTimeout(() => {
        alert('Subscription successful! Welcome to Premium!');
        window.location.href = 'dashboard.html';
    }, 1000);
});

