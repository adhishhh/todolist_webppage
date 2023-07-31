const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', completeTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="completeBtn">Complete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(e) {
    if (e.target.classList.contains('completeBtn')) {
        const li = e.target.parentElement;
        li.classList.toggle('completed');
    }
}
