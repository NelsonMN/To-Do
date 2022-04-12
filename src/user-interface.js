import {Task, Project, ToDo} from './index'
import {openForm, closeForm} from './modal'


// Initialize To-Do List

const toDoList = ToDo()


// Initialize Default Project
const defaultProject = Project('Default Project')
toDoList.addProject(defaultProject)


// Initialize Form Defaults
const taskDate = document.getElementById('due-date')
const todayDate = new Date().toISOString().slice(0, 10);
taskDate.value = todayDate;


// Project UI

function createProject() {
   const projectTitle = projectTitleInput.value
   const projectId = self.crypto.randomUUID();

   const newProject = Project(projectTitle, projectId)
   return newProject
}

function createProjectUI(project) {

}

// Add Project Event Listeners
const addProjectBtn = document.querySelector('.add-project')
const addProjectDiv = document.getElementById('add-project')
const setProjectBtn = document.querySelector(".set-new-project-btn")
const cancelProjectBtn = document.querySelector(".cancel-new-project-btn")
const projectTitleInput = document.getElementById("project-title-input")

addProjectBtn.addEventListener('click', () => {
    
    addProjectDiv.classList.toggle('hidden')
    addProjectBtn.classList.toggle('hidden')
})

setProjectBtn.addEventListener('click', () => {
    // Add Project
    const newProject = createProject()
    toDoList.addProject(newProject)
    addProjectDiv.classList.toggle('hidden')
    addProjectBtn.classList.toggle('hidden')
    projectTitleInput.value = ''
})

cancelProjectBtn.addEventListener('click', () => {
    addProjectDiv.classList.toggle('hidden')
    addProjectBtn.classList.toggle('hidden')
    projectTitleInput.value = ''
})



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
    const tasksContainer = document.querySelector(".tasks")
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("task")
    taskDiv.id = task.getId()

    const firstTaskDiv = document.createElement('div');
    firstTaskDiv.classList.add("first-task-elements")

    if (task.getPriority() == 'Low') {
        taskDiv.style.borderLeft = '5px solid green';
    } else if (task.getPriority() == 'Medium') {
        taskDiv.style.borderLeft = '5px solid orange'
    } else {
        taskDiv.style.borderLeft = '5px solid red'
    }

    if (task.getStatus() == 'Complete') {
        taskDiv.style.opacity = '0.5'
    } else if (task.getStatus() == 'Incomplete') {
        taskDiv.style.opactiy = '1'
    }

    const title = document.createElement('div');
    title.classList.add("title")
    title.textContent = task.getTitle()

    const lastTaskDiv = document.createElement('div');
    lastTaskDiv.classList.add("last-task-elements");

    const detailsBtn = document.createElement('button')
    detailsBtn.textContent = 'Details'
    detailsBtn.classList.add('details')

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
    lastTaskDiv.append(detailsBtn, dateDiv, edit, deleteBtn)
    taskDiv.append(firstTaskDiv, lastTaskDiv)
    tasksContainer.append(taskDiv)
};

function updateTaskUI(id) {
    const taskDiv = document.getElementById(id)
    const task = defaultProject.getTask(id)

    const taskTitle = taskDiv.childNodes[0]
    taskTitle.textContent = task.getTitle()

    if (task.getPriority() == 'Low') {
        taskDiv.style.borderLeft = '5px solid green';
    } else if (task.getPriority() == 'Medium') {
        taskDiv.style.borderLeft = '5px solid orange';
    } else {
        taskDiv.style.borderLeft = '5px solid red';
    }

    if (task.getStatus() == 'Complete') {
        taskDiv.style.opacity = '0.5';
    } else if (task.getStatus() == 'Incomplete') {
        taskDiv.style.opacity = '1';
    }
    
    const taskDueDate = taskDiv.childNodes[1].childNodes[1]
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
        console.log(id)
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
    

    // Details Button
    } else if (e.target.matches("button") && e.target.textContent == 'Details') {
        const id = e.target.parentNode.parentNode.id
        const task = defaultProject.getTask(id)

        taskId = id
        
        const title = document.getElementById("task-title-output")
        const date = document.getElementById("task-due-date-output")
        const priority = document.getElementById("task-priority-output")
        const status = document.getElementById("task-status-output")
        const details = document.getElementById("task-details-output")


        title.textContent = task.getTitle()
        date.textContent = task.getDate()
        priority.textContent = task.getPriority()
        status.textContent = task.getStatus()
        details.textContent = task.getDescription()

        const detailsModal = document.getElementById("task-details");
        openForm(detailsModal)
        
        const closeModalButtons = document.querySelectorAll("[data-close-button]")
        closeModalButtons.forEach(button => {
            button.addEventListener("click", () => {
                const form = button.closest("#task-details")
                closeForm(form);
            })
        })
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
    const taskDate = document.getElementById('due-date')
    const todayDate = new Date().toISOString().slice(0, 10);
    taskDate.value = todayDate;
})

editTaskButton.addEventListener('click', (e) => {
    e.preventDefault()
    updateTask()
    updateTaskUI(taskId)
})