import {Task, Project, ToDo} from './index'
// Initialization:

const toDoList = ToDo()

const defaultProject = Project('Default Project')

// Task UI

function createTask() {
    const taskTitle = document.getElementById('title').value
    const taskDescription = document.getElementById('description').value
    const taskDate = document.getElementById('due-date').value
    const taskPriority = document.getElementById('priority').value
    const taskCheckbox = document.getElementById('status').checked
    let taskStatus
    if (taskCheckbox) {
        taskStatus = 'Complete'
    } else {
        taskStatus = 'Incomplete'
    }
    const taskId = self.crypto.randomUUID();
    const newTask = Task(taskTitle, taskDescription, taskDate, taskPriority, taskStatus, taskId)
    return newTask
}

function updateTask() {
    const taskToEdit = defaultProject.getTask(taskId)
    const taskTitle = document.getElementById('edit-title').value
    const taskDescription = document.getElementById('edit-description').value
    const taskDate = document.getElementById('edit-due-date').value
    const taskPriority = document.getElementById('edit-priority').value
    const taskCheckbox = document.getElementById('edit-status').checked

    taskToEdit.setTitle(taskTitle)
    taskToEdit.setDescription(taskDescription)
    taskToEdit.setDate(taskDate)
    taskToEdit.setPriority(taskPriority)
    if (taskCheckbox) {
        taskToEdit.setStatus('Complete')
    } else {
        taskToEdit.setStatus('Incomplete')
    }     
}

function createTaskUI(task) {
    const tasksDiv = document.querySelector(".tasks")
    const div = document.createElement('div');
    div.classList.add("task")
    div.id = task.getId()

    const firstTaskDiv = document.createElement('div');
    firstTaskDiv.classList.add("first-task-elements")

    const title = document.createElement('div');
    title.classList.add("title")
    title.textContent = task.getTitle()

    const lastTaskDiv = document.createElement('div');
    lastTaskDiv.classList.add("last-task-elements");

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('due-date');
    dateDiv.textContent = task.getDate()

    const edit = document.createElement('span');
    edit.classList.add("edit", "material-icons-outlined");
    edit.textContent = 'edit';

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add("delete", "material-icons-outlined");
    deleteBtn.textContent = 'delete';

    firstTaskDiv.append(title)
    lastTaskDiv.append(dateDiv, edit, deleteBtn)
    div.append(firstTaskDiv, lastTaskDiv)
    tasksDiv.append(div)
};

function updateTaskUI(id) {
    const taskDiv = document.getElementById(id)
    const task = defaultProject.getTask(id)

    const taskTitle = taskDiv.childNodes[0]
    taskTitle.textContent = task.getTitle()
    
    const taskDueDate = taskDiv.childNodes[1].childNodes[0]
    taskDueDate.textContent = task.getDate()
}


// Task Event Listeners

let taskId // the variable to access a specific task id for editing

const tasksDiv = document.querySelector(".tasks")
tasksDiv.addEventListener('click', (e) => {   

    // Edit
    if (e.target.matches("span") && e.target.textContent == "edit") {
        const form = document.querySelector("#edit-form");
        openForm(form)

        const id = e.target.parentNode.parentNode.id
        const taskToEdit = defaultProject.getTask(id)

        taskId = id
        
        const taskTitle = document.getElementById('edit-title')
        const taskDescription = document.getElementById('edit-description')
        const taskDate = document.getElementById('edit-due-date')
        const taskPriority = document.getElementById('edit-priority')
        const taskCheckbox = document.getElementById('edit-status')

        taskTitle.value = taskToEdit.getTitle();
        taskDescription.value = taskToEdit.getDescription();
        taskDate.value = taskToEdit.getDate();
        taskPriority.value = taskToEdit.getPriority();
        
        if (taskToEdit.getStatus() == 'Complete') {
            taskCheckbox.checked = true
        } else {
            taskCheckbox.checked = false
        }        

    // Delete  
    } else if (e.target.matches("span") && e.target.textContent == "delete") {
        const task = e.target.parentNode.parentNode
        defaultProject.removeTask(task.id)
        task.remove()
    }
});

// Task Button Functionality

const addTaskButton = document.querySelector('.add-task');
const editTaskButton = document.querySelector('.edit-task');

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault()
    const newTask = createTask()
    createTaskUI(newTask)
    defaultProject.addTask(newTask)
    const formCard = document.querySelector(".form-card");
    formCard.reset();
})

editTaskButton.addEventListener('click', (e) => {
    e.preventDefault()
    updateTask()
    updateTaskUI(taskId)
})


// Modal Actions:

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const form = document.querySelector(button.dataset.modalTarget);
        openForm(form);
    })
}) 

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const form = button.closest(".form")
        closeForm(form);
    })
})

function openForm(form) {
    if (form == null) return
    form.classList.add("active");
    overlay.classList.add("active");
}

function closeForm(form) {
    if (form == null) return
    form.classList.remove("active");
    overlay.classList.remove("active");
}