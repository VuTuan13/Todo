    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (username === savedUsername && password === savedPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'todo.html';
        } else {
            alert('Tài khoản hoặc mật khẩu bị sai. Vui lòng thử lại.');
        }
    });