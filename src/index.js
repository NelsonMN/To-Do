import { isDate, toDate, isThisWeek, isToday } from "date-fns";
import { id } from "date-fns/locale";

// Task Factory

const Task = (title = '', details = '', priority = 'Low', dueDate = 'No Due Date', status) => {
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

    const setTasks = (newTasks) => tasks = newTasks;
    
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
        getTasks, setTasks,
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

    const setAllTasks = () => {}

    const setToday = () => {}

    const setThisWeek = () => {}

    return {
        getProjects,
        getProject,
        containsProject,
        addProject, removeProject
    }
}

export {Task, Project, ToDoList}