const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry'); 
    document.location.replace('/');
};

const logoutButton = document.querySelector('#logout');
if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}
