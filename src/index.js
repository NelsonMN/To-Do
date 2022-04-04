// Task Factory
const Task = (title, details, priority, dueDate, status) => {
    const getTitle = () => title;
    const setTitle = newTitle => title = newTitle;

    const getDetails = () => details;
    const setDetails = newDetails => details = newDetails;

    const getPriority = () => priority;
    const setPriority = newPriority => priority = newPriority;

    const getDueDate = () => dueDate;
    const setDueDate = newDueDate => dueDate = newDueDate;

    const getStatus = () => status;
    const setStatus = newStatus  => status = newStatus;

    const formatDate = function() {
        const month = date.split('/')[0]
        const day = date.split('/')[1]
        const year = date.split('/')[2]
        return `${month}/${day}/${year}`
    }   

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

    let tasks = [];

    const getTasks = () => tasks;
    
    const getTask = taskTitle => {
        return tasks.find((task) => taskTitle === task.getTitle())
    };

    const containsTask = taskTitle => {
        return tasks.some((task) => taskTitle === task.getTitle())
    };

    const addTask = task => tasks.push(task)

    const removeTask = taskTitle => {
        tasks = tasks.filter((task) => taskTitle !== task.getTitle());
    };

    return {
        getTitle, setTitle,
        getTasks,
        getTask,
        containsTask,
        addTask, removeTask
    }
};

// To Do List Factory

const ToDoList = () => {
    
    let projects = []
    
    const getProjects = () => projects;

    const getProject = (projectTitle) => {
        return projects.find((project) => projectTitle === project.getTitle())
    };

    const containsProject = (projectTitle) => {
        return projects.some((project) => projectTitle === project.getTitle())
    }

    const addProject = (project) => projects.push(project)

    const removeProject = (projectTitle) => {
        projects = projects.filter((project) => projectTitle !== project.getTitle())
    }

    return {
        getProjects,
        getProject,
        containsProject,
        addProject, removeProject
    }
}
