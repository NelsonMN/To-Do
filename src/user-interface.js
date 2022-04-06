import {Task, Project, ToDoList} from "./index"

// To Do List Initialization:

const toDo = ToDoList();

const home = Project('Home');
const today = Project('Today');
const thisWeek = Project('This Week');

toDo.addProject(home)
toDo.addProject(today)
toDo.addProject(thisWeek)



// Add Tasks:

function getTaskInfo() {
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    const details = document.getElementById("details").value;
    const status = document.getElementById("status").checked;
    let taskStatus
    if (status) {
        taskStatus = 'Complete';
    } else {
        taskStatus = 'Not Complete';
    }
    const task = Task(title, details, priority, dueDate, taskStatus)
    return task
}

function createTask(task) {
    const taskHolder = document.querySelector('.tasks')

    const taskDiv = document.createElement('div');
    const firstTaskElements = document.createElement('div');
    const taskCheckbox = document.createElement('div');
    const taskTitle = document.createElement('div');
    const lastTaskElements = document.createElement('div');
    const taskDueDate = document.createElement('div');
    const taskEdit = document.createElement('div');
    const editSymbol = document.createElement('span')
    const taskDelete = document.createElement('div');
    const deleteSymbol = document.createElement('span')

    taskDiv.classList.add('task')
    firstTaskElements.classList.add('first-task-elements')
    taskCheckbox.classList.add('task-checkbox')
    taskTitle.classList.add('task-title')
    lastTaskElements.classList.add('last-task-elements')
    taskDueDate.classList.add('task-due-date')
    taskEdit.classList.add('task-edit')
    editSymbol.classList.add('material-icons-outlined', 'edit-symbol')
    taskDelete.classList.add('task-delete')
    deleteSymbol.classList.add('material-icons-outlined', 'delete-symbol')
    
    
    if (task.getStatus() == 'Complete') {
        taskCheckbox.style.background = 'green';
    } else {
        taskCheckbox.style.background = 'white';
    }

    if (task.getPriority() == 'low') {
        taskDiv.style.borderLeft = '5px solid green';
    } else if (task.getPriority() == 'medium') {
        taskDiv.style.borderLeft = '5px solid orange';
    } else if (task.getPriority() == 'high') {
        taskDiv.style.borderLeft = '5px solid red';
    }

    taskTitle.textContent = task.getTitle();
    taskDueDate.textContent = task.getDueDate();
    editSymbol.textContent = 'edit';

    deleteSymbol.textContent = 'delete';
    deleteSymbol.addEventListener('click', deleteTask)
    
    home.addTask(task)
    taskDiv.append(firstTaskElements, lastTaskElements)
    firstTaskElements.append(taskCheckbox, taskTitle)
    lastTaskElements.append(taskDueDate, taskEdit, taskDelete)
    taskEdit.append(editSymbol)
    taskDelete.append(deleteSymbol)
    taskHolder.append(taskDiv)
}


const submitButton = document.querySelector('#submit-task')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const newTask = getTaskInfo()
    createTask(newTask)
})


// Delete Tasks:

function deleteTask(e) {
    const title = e.target.parentNode.parentNode.parentNode.children[0].children[1].textContent
    home.removeTask(title)
    const item = e.target.parentNode.parentNode.parentNode
    item.remove()
}




















// Modal Opening / Closing

const addTaskButtons = document.querySelectorAll('[data-modal-target]')
const closeTaskButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

addTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    })
})

closeTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}