import {Task, Project, ToDoList} from "./index"

// To Do List Initialization:

const toDo = ToDoList();

const home = Project('Home');
const today = Project('Today');
const thisWeek = Project('This Week');

toDo.addProject(home)
toDo.addProject(today)
toDo.addProject(thisWeek)



// Add Tasks to Data Structures

function getTaskInfo() {
    const title = document.getElementById("title").value
    const dueDate = document.getElementById("due-date").value
    const priority = document.getElementById("priority").value
    const details = document.getElementById("details").value
    const status = document.getElementById("status").checked
    let taskStatus
    if (status) {
        taskStatus = 'Complete';
    } else {
        taskStatus = 'Not Complete'
    }
    const task = Task(title, dueDate, priority, details, taskStatus)
    return task
}

const submitButton = document.querySelector('#submit-task')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const newTask = getTaskInfo()
    home.addTask(newTask)
})





















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