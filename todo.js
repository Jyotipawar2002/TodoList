document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('task-list');
    const deleteAllButton = document.getElementById('deleteAll');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        } else {
            alert("Enter The Task");
        }
    });

    deleteAllButton.addEventListener('click', function () {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
