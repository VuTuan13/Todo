    const todoForm = document.querySelector('.todo-form');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');
    const logoutBtn = document.getElementById('logoutBtn');

    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });

    todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        todoItem.appendChild(textSpan);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa công việc này?");
        if (confirmDelete) {
            todoItem.remove();
        }
    });

    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
        todoInput.value = '';
    }
    });