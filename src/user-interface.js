import {Task, Project, ToDo} from './index'
// Initialization:

const toDoList = ToDo()

const defaultProject = Project('Default Project')



// Modal Actions

const addBookButtons = document.querySelectorAll("[data-modal-target]");
const closeBookButtons = document.querySelectorAll("[data-close-button]");
const submitButton = document.querySelector('.add-edit-task');
const overlay = document.getElementById("overlay");


addBookButtons.forEach(button => {
    button.addEventListener("click", () => {
        const form = document.querySelector(button.dataset.modalTarget);
        openForm(form);
    })
}) 

closeBookButtons.forEach(button => {
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

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const formCard = document.getElementById("form-card");
    formCard.reset();
})