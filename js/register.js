    const registerBtn = document.getElementById('registerBtn');

    registerBtn.addEventListener('click', () => {
        const newUsername = document.getElementById('newUsername').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (newUsername === '' || newPassword === '' || confirmPassword === '') {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Mật khẩu không đúng. Mời nhập lại.');
            return;
        }

        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        alert('Đăng kí thành công. Mời đăng nhập');
        window.location.href = 'login.html';
        });