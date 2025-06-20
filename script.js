// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const spinner = document.getElementById('loginSpinner');
  const errorMsg = document.getElementById('loginError');
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Show loading state
  spinner.style.display = 'inline-block';
  document.getElementById('loginText').textContent = 'Signing in...';
  
  // Simulate API call
  setTimeout(() => {
    spinner.style.display = 'none';
    document.getElementById('loginText').textContent = 'Sign In';
    
    // Validate inputs
    if (email && password) {
      window.location.href = 'dashboard.html';
    } else {
      errorMsg.textContent = 'Please enter both email and password';
      errorMsg.style.display = 'block';
    }
  }, 1500);
});

// Mobile menu toggle
document.querySelector('.menu-btn')?.addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('active');
});