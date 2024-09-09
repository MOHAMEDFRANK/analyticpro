// Sample users with email, password, and redirect page
const users = [
    { email: "admin@example.com", password: "admin123", redirect: "admin.html" },
    { email: "user@example.com", password: "user123", redirect: "dashboard-user.html" },
    { email: "analytics@example.com", password: "analytics123", redirect: "dashboard-analytics.html" }
];

// Function to handle login and redirection
function loginUser(event) {
    'use strict';
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the entered email and password match any user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful! Redirecting...');
        // Redirect to the user's specific dashboard
        window.location.href = user.redirect;
    } else {
        alert('Invalid email or password');
    }
}

// Add event listener to the login form
document.getElementById('login-form').addEventListener('submit', loginUser);
