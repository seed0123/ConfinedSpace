document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (username === 'admin' && password === 'admin') {
            // Redirect to home page after successful login
            window.location.href = 'home.html';
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});
