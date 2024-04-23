document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const error = document.getElementById('error');
    const success = document.getElementById('success');

    // Show registration form
    document.getElementById('showRegisterForm').addEventListener('click', function() {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        error.classList.add('hidden');
        success.classList.add('hidden');
    });

    // Show login form
    document.getElementById('showLoginForm').addEventListener('click', function() {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        error.classList.add('hidden');
        success.classList.add('hidden');
    });

    // Show error message
    if (location.search.includes('error=true')) {
        error.textContent = 'Invalid username or password';
        error.classList.remove('hidden');
    }

    // Show success message
    if (location.search.includes('register=true')) {
        success.textContent = 'Registration successful. Please login.';
        success.classList.remove('hidden');
    }
});
