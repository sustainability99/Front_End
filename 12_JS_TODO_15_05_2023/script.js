const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListUl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskListUl.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    if (e.target.checked){
        
    }
});

function addTask() {
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span><input type="checkbox"><button>Delete</button>`;
        taskListUl.appendChild(li);
    }
    task.value = '';
}