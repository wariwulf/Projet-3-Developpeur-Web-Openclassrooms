function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html'; 
  }

const logoutButton = document.querySelector('.logout');

logoutButton.addEventListener('click', function(event) {
event.preventDefault();
logout();
});