const task_input = document.getElementById('task_input');
const add_btn = document.getElementById('add_btn');
const task_list = document.getElementById('task_list');

function addTask() {
    const taskText = task_input.value.trim(); 

    if (taskText === '') {
        alert('Please enter a task!');
        return; 
    }

    const tr = document.createElement('tr');

    const td_done = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    td_done.appendChild(checkbox); 

    const td_task = document.createElement('td');
    td_task.innerText = taskText; 

    const td_delete = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '🗑️'; 

    deleteBtn.classList.add('delete-btn');
    td_delete.appendChild(deleteBtn); 

    tr.appendChild(td_done);
    tr.appendChild(td_task);
    tr.appendChild(td_delete);
    task_list.appendChild(tr);
    task_input.value = '';
}

function handleTableClick(event) {
    const targetElement = event.target; 

    if (targetElement.type === 'checkbox') {
        const taskRow = targetElement.closest('tr'); 
        const taskTextCell = taskRow.querySelector('td:nth-child(2)'); 
        if (targetElement.checked) {
            taskTextCell.classList.add('task-done'); 
        } else {
            taskTextCell.classList.remove('task-done'); 
        }
    }

    if (targetElement.classList.contains('delete-btn')) {
        const taskRow = targetElement.closest('tr'); 
        taskRow.remove(); 
    }
}

add_btn.addEventListener('click', addTask);

task_input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(); 
    }
});

task_list.addEventListener('click', handleTableClick);