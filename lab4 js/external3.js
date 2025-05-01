let task_input = document.getElementById('task_input');
let add_btn = document.getElementById('add_btn');
let task_list = document.getElementById('task_list');

function addTask() {
    let taskText = task_input.value.trim(); 

    if (taskText === '') {
        alert('Please enter a task!');
        return; 
    }

    let tr = document.createElement('tr');

    let td_done = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    td_done.appendChild(checkbox); 

    let td_task = document.createElement('td');
    td_task.innerText = taskText; 

    let td_delete = document.createElement('td');
    let deleteBtn = document.createElement('button');
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
    let targetElement = event.target; 

    if (targetElement.type === 'checkbox') {
        let taskRow = targetElement.closest('tr'); 
        let taskTextCell = taskRow.querySelector('td:nth-child(2)'); 
        if (targetElement.checked) {
            taskTextCell.classList.add('task-done'); 
        } else {
            taskTextCell.classList.remove('task-done'); 
        }
    }

    if (targetElement.classList.contains('delete-btn')) {
        let taskRow = targetElement.closest('tr'); 
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