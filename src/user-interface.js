import {Task, Project, ToDoList} from "./index"

// To Do List Initialization:

const toDo = ToDoList();

const home = Project('Home');
const today = Project('Today');
const thisWeek = Project('This Week');

toDo.addProject(home)
toDo.addProject(today)
toDo.addProject(thisWeek)


// Setting default date in Calendar to today:
function getDateToday() {
    let today = new Date();
    let currDay = today.getDate();
    let currMonth = today.getMonth()+1;
    let currYear = today.getFullYear();
    return currYear + "-" + ((currMonth<10) ? '0'+currMonth : currMonth )+ "-" + ((currDay<10) ? '0'+currDay : currDay );
}

const date = document.getElementById('due-date')
date.value = getDateToday()

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

    // Creating elements

    const taskHolder = document.querySelector('.tasks')

    const taskDiv = document.createElement('div');

    const firstTaskElements = document.createElement('div');
    const taskCheckbox = document.createElement('div');
    const taskTitle = document.createElement('div');

    const lastTaskElements = document.createElement('div');
    const details = document.createElement('button')
    const taskDueDate = document.createElement('div');
    const taskEdit = document.createElement('div');
    const editSymbol = document.createElement('span')
    const taskDelete = document.createElement('div');
    const deleteSymbol = document.createElement('span')

    // Adding classes

    taskDiv.classList.add('task')
    firstTaskElements.classList.add('first-task-elements')
    taskCheckbox.classList.add('task-checkbox')
    taskTitle.classList.add('task-title')

    lastTaskElements.classList.add('last-task-elements')
    taskDueDate.classList.add('task-due-date')
    
    taskEdit.classList.add('task-edit')
    editSymbol.classList.add('material-icons-outlined', 'edit-symbol')
    editSymbol.dataset.modalTarget = "#edit-modal"

    taskDelete.classList.add('task-delete')
    deleteSymbol.classList.add('material-icons-outlined', 'delete-symbol')
    
    // Adding styles and text Content
    
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

    details.textContent = 'Details';

    editSymbol.textContent = 'edit';
    editSymbol.addEventListener('click', openEditTask)

    deleteSymbol.textContent = 'delete';
    deleteSymbol.addEventListener('click', deleteTask)

    // Appending items to DOM

    const id = home.addTask(task)
    taskDiv.id = id
    taskDiv.append(firstTaskElements, lastTaskElements)
    firstTaskElements.append(taskCheckbox, taskTitle)
    lastTaskElements.append(details, taskDueDate, taskEdit, taskDelete)
    taskEdit.append(editSymbol)
    taskDelete.append(deleteSymbol)
    taskHolder.append(taskDiv)
    
}

function editTask(task) {
    const taskToEdit = home.getTask(task.getTitle())
    taskToEdit.setTitle(document.getElementById("edit-title").value);
    taskToEdit.setDueDate(document.getElementById("edit-due-date").value);
    taskToEdit.setPriority(document.getElementById("edit-priority").value);
    taskToEdit.setDetails(document.getElementById("edit-details").value);
    const status = document.getElementById("edit-status").checked
    if (status) {
        taskToEdit.setStatus('Complete');
    } else {
        taskToEdit.setStatus('Not Complete');
    }
}



const submitButton = document.querySelector('#submit-task')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (submitButton.textContent == 'Add Task') {
        const newTask = getTaskInfo()
        createTask(newTask)}
    else if (submitButton.textContent == "Edit Task") {
        

    }
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

function openAddTask(e) {
    const modal = document.querySelector(e.target.dataset.modalTarget)
    openModal(modal)
}

function openEditTask(e) {
    const modal = document.querySelector(e.target.dataset.modalTarget)
    openModal(modal)
    console.log(e.target)
}

function closeAddTask(e) {
    const modal = e.target.closest('.modal')
    closeModal(modal)
}

function closeEdit(e) {
    const modal = e.target.closest('.modal')
    closeModal(modal)
}

addTaskButtons.forEach(button => {
    button.addEventListener('click', openAddTask)  
})

closeTaskButtons.forEach(button => {
    button.addEventListener('click', closeAddTask)
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