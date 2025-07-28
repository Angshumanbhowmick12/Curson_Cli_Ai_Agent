document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `<span>${todoText}</span><button>Delete</button>`;
            todoList.appendChild(li);
            todoInput.value = '';

            li.querySelector('button').addEventListener('click', deleteTodo);
        }
    }

    function deleteTodo(event) {
        event.target.parentNode.remove();
    }
});