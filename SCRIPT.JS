
document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.getElementById('users');
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `<p>${user.name}</p>`;
                usersContainer.appendChild(userDiv);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
