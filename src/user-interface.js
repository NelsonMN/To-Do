import {Task, Project, ToDoList} from "./index"

// To Do List Initialization:

const toDo = ToDoList();

const home = Project('Home');
const today = Project('Today');
const thisWeek = Project('This Week');

toDo.addProject(home)
toDo.addProject(today)
toDo.addProject(thisWeek)

const date = document.getElementById('due-date')
date.value = getToday()

// Div list

const divObject = {}

// Today's Date
function getToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}

// Get/Set New and Previous Takss:

function getNewTaskInfo() {
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

function getPreviousTaskInfo() {
    const title = document.getElementById("edit-title").value;
    const dueDate = document.getElementById("edit-due-date").value;
    const priority = document.getElementById("edit-priority").value;
    const details = document.getElementById("edit-details").value;
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

function setPreviousTaskInfo(task) {
    const newTitle = document.getElementById("edit-title").value;
    const newDueDate = document.getElementById("edit-due-date").value;
    const newPriority = document.getElementById("edit-priority").value;
    const newDetails = document.getElementById("edit-details").value;
    const newStatus = document.getElementById("edit-status").checked;

    task.setTitle(newTitle)
    task.setDueDate(newDueDate)
    task.setPriority(newPriority)
    task.setDetails(newDetails)

    if (newStatus) {
        task.setStatus('Complete')
    } else {
        task.setStatus('Not Complete')
    }
}

// Creating Task UI

function createTaskUI(task) {
    // Creating elements
    const taskHolder = document.querySelector('.tasks')
    const taskDiv = document.createElement('div');
    const firstTaskElements = document.createElement('div');
    const taskCheckbox = document.createElement('div');
    const taskTitle = document.createElement('div');
    const lastTaskElements = document.createElement('div');
    const detailsBtn = document.createElement('button')
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
    detailsBtn.textContent = 'Details';
    editSymbol.textContent = 'edit';
    deleteSymbol.textContent = 'delete';

    // Event Listeners
    deleteSymbol.addEventListener('click', deleteTask)
    editSymbol.addEventListener('click', openEditTask)
    editSymbol.addEventListener('click', editTask)

    // Add Task to Main Project
    home.addTask(task)

    // Appending items to DOM
    taskDiv.append(firstTaskElements, lastTaskElements)
    firstTaskElements.append(taskCheckbox, taskTitle)
    lastTaskElements.append(detailsBtn, taskDueDate, taskEdit, taskDelete)
    taskEdit.append(editSymbol)
    taskDelete.append(deleteSymbol)
    taskHolder.append(taskDiv)

    // Adding Item to DivObject
    divObject[task] = taskDiv
}

// Updating Task UI

function updateTaskUI(task) {
    const div = divObject[task]

    const title = div.children[0].children[1]
    title.textContent = task.getTitle()
    
    const dueDate = div.children[1].children[1]
    dueDate.textContent = task.getDueDate()

    if (task.getPriority() == 'low') {
        div.style.borderLeft = '5px solid green';
    } else if (task.getPriority() == 'medium') {
        div.style.borderLeft = '5px solid orange';
    } else if (task.getPriority() == 'high') {
        div.style.borderLeft = '5px solid red';
    }

    const taskCheckbox = div.children[0].children[0]

    if (task.getStatus() == 'Complete') {
        taskCheckbox.style.background = 'green';
    } else if (task.getStatus() == 'Not Complete') {
        taskCheckbox.style.background = 'white';
    }
}


// Event Listener Tasks:

function deleteTask(e) {
    const title = e.target.parentNode.parentNode.parentNode.children[0].children[1].textContent
    home.removeTask(title)
    const item = e.target.parentNode.parentNode.parentNode
    item.remove()
}

function editTask(e) {
    const title = e.target.parentNode.parentNode.parentNode.children[0].children[1].textContent
    const task = home.getTask(title)
    const dueDate = task.getDueDate()
    const priority = task.getPriority()
    const details = task.getDetails()
    const status = task.getStatus()

    const editTitle = document.getElementById('edit-title')
    const editDueDate = document.getElementById('edit-due-date')
    const editPriority = document.getElementById('edit-priority')
    const editDetails = document.getElementById('edit-details')
    const editStatus = document.getElementById('edit-status')

    editTitle.value = title
    editDueDate.value = dueDate
    editPriority.value = priority
    editDetails.value = details

    if (status == 'Not Complete') {
        editStatus.checked = false
    } else {
        editStatus.checked = true
    }
}

// Submit Form Button Functionalities
const submitButton = document.getElementById('submit-task')

submitButton.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    if (e.target.closest('form').checkValidity()) {
        e.preventDefault()
        const newTask = getNewTaskInfo()
        createTaskUI(newTask)
        const form = document.getElementById('new-task')
        const date = document.getElementById('due-date')
        form.reset()
        date.value = getToday(); 
    }})

const editTaskButton = document.getElementById('edit-task-submit')
editTaskButton.addEventListener('click', (e) => {
    if (e.target.closest('form').checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        const originalInfo = getPreviousTaskInfo()
        setPreviousTaskInfo(originalInfo)
        updateTaskUI(originalInfo)
        const form = document.getElementById('new-task')
        form.reset()
    }
})


// Modal Opening / Closing

const addTaskButtons = document.querySelectorAll('[data-modal-target]')
const closeTaskButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

function openAddTask(e) {
    const modal = document.querySelector(e.target.dataset.modalTarget)
    openModal(modal)
}

function closeTask(e) {
    const modal = e.target.closest('.modal')
    closeModal(modal)
}

function openEditTask(e) {
    const modal = document.querySelector(e.target.dataset.modalTarget)
    openModal(modal)
}

addTaskButtons.forEach(button => {
    button.addEventListener('click', openAddTask)  
})

closeTaskButtons.forEach(button => {
    button.addEventListener('click', closeTask)
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