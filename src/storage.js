import {Task, Project, ToDo} from './index';

class Storage {
    saveList(info) {
        localStorage.setItem('todo', JSON.stringify(info))
    }

    getToDo() {
        const todoList = Object.assign(new ToDo(), JSON.parse(localStorage.getItem('todo')))
        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project)))    
        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task))))
        return todoList
    }

    addProject(project) {
        const todoList = Storage.getTodoList()
        todoList.addProject(project)
        Storage.saveList(todoList)
    }

    changeProjectName(projectID, newTitle) {
        const todoList = Storage.getTodoList()
        todoList.getProject(projectID).setProjectTitle(newTitle)
        Storage.saveList(todoList)
    }

    removeProject(projectID) {
        const todoList = Storage.getTodoList()
        todoList.removeProject(projectID)
        Storage.saveList(todoList)
    }

    addTask(projectID, task) {
        const todoList = Storage.getTodoList()
        todoList.getProject(projectID).addTask(task)
        Storage.saveList(todoList)
    }

    deleteTask(projectID, taskID) {
        const todoList = Storage.getTodoList()
        todoList.getProject(projectID).removeTask(taskID)
        Storage.saveList(todoList)
    }

    changeTaskTitle(projectID, taskID, newTitle) {
        const todoList = Storage.getTodoList()
        todoList.getProject(projectID).getTask(taskID).setTitle(newTitle)
        Storage.saveList(todoList)
    }

    changeTaskDescription(projectID, taskID, newDescription) {
        const todoList = Storage.getTodoList()
        todoList.getProject(projectID).getTask(taskID).setDescription(newDescription)
        Storage.saveList(todoList)
    }

    changeTaskDate(projectID, taskID, newDate) {
        const todoList = Storage.getTodoList()
        todoList.getProject(projectID).getTask(taskID).setDate(newDate)
        Storage.saveList(todoList)
    }

    changeTaskPriority(projectID, taskID, newPriority) {
        const todoList = Storage.getTodoList()
        todoList.getProject(projectID).getTask(taskID).setPriority(newPriority)
        Storage.saveList(todoList)
    }
}