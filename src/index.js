// Task Factory
const Task = (title, details, priority, dueDate, status) => {
    const getTitle = () => title;
    const setTitle = newTitle => title = newTitle;

    const getDetails = () => details;
    const setDetails = newDetails => details = newDetails;

    const getPriority = () => priority;
    const setPriority = newPriority => priority = newPriority

    const getDueDate = () => dueDate;
    const setDueDate = newDueDate => dueDate = newDueDate;

    const getStatus = () => status;
    const setStatus = newStatus  => status = newStatus;

    return {
        getTitle, setTitle, 
        getDetails, setDetails, 
        getPriority, setPriority, 
        getDueDate, setDueDate,
        getStatus, setStatus
    }
};

// Project Factory
const Project = (title) => {
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;

    let tasks = []

    const getTasks = () => tasks;
    
    const getTask = taskTitle => {
        return tasks.find((task) => taskTitle === task.getTitle())
    }

    const containsTask = taskTitle => {
        return tasks.some((task) => taskTitle === task.getTitle())
    }

    const addTask = task => {
        tasks.push(task)
    }

    const removeTask = taskTitle => {
        tasks = tasks.filter((task) => taskTitle !== task.getTitle())
    }

    return {
        getTitle, setTitle,
        getTasks,
        getTask,
        containsTask,
        addTask, removeTask
    }
}

// To Do List Factory

const toDoList = {}
