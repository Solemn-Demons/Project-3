const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    mutation Login($username: String!, $password: String!) {
                        login(username: $username, password: $password) {
                            token
                            user {
                                id
                                username
                            }
                        }
                    }
                `,
                variables: {
                    username,
                    password,
                },
            }),
        });
  
        const responseBody = await response.json();

        if (response.ok && responseBody.data && responseBody.data.login) {
            const { token } = responseBody.data.login;
            const tokenExpiryTime = new Date().getTime() + 3600000;
            localStorage.setItem('token', token);
            localStorage.setItem('tokenExpiry', tokenExpiryTime.toString());
            document.location.replace('/');
        } else {
            const errorData = responseBody.errors[0];
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
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    mutation Signup($username: String!, $email: String!, $password: String!) {
                        signup(username: $username, email: $email, password: $password) {
                            token
                            user {
                                id
                                username
                            }
                        }
                    }
                `,
                variables: {
                    username,
                    email,
                    password,
                },
            }),
        });

        const responseBody = await response.json();

        if (response.ok && responseBody.data && responseBody.data.signup) {
            const { token } = responseBody.data.signup;
            localStorage.setItem('token', token);
            const tokenExpiryTime = new Date().getTime() + 3600000;  // Assuming token is valid for 1 hour
            localStorage.setItem('tokenExpiry', tokenExpiryTime.toString());
            document.location.replace('/');
        } else {
            const errorData = responseBody.errors[0];
            alert(`Failed to sign up. ${errorData.message || ''}`);
        }
    }
};

const signupForm = document.querySelector('.signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
}
