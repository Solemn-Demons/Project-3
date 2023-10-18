const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            document.location.replace('/');
        } else {
            const errorData = await response.json();
            alert(`Failed to log in. ${errorData.message || ''}`);
        }
    }
};
  
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            document.location.replace('/');
        } else {
            const errorData = await response.json();
            alert(`Failed to sign up. ${errorData.message || ''}`);
        }
    }
};
  
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
  
if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
}
  
if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
}
