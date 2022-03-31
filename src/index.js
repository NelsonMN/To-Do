// Task Factory
const Task = (title, details, priority, dueDate, status) => {
    const getTitle = (() => title)();
    const setTitle = newTitle => title = newTitle;

    const getDetails = (() => details)();
    const setDetails = newDetails => details = newDetails;

    const getPriority = (() => priority)();
    const setPriority = newPriority => priority = newPriority

    const getDueDate = (() => dueDate)();
    const setDueDate = newDueDate => dueDate = newDueDate;

    const getStatus = (() => status)();
    const setStatus = newStatus  => status = newStatus;

    return {
        getTitle, setTitle, 
        getDetails, setDetails, 
        getPriority, setPriority, 
        getDueDate, setDueDate,
        getStatus, setStatus
    }
};


const Project = (title) => {
    const getProjectTitle = (() => title)();
    const setProjectTitle = (newTitle) => title = newTitle;

    const tasks = []

    const getTasks = (() => tasks)();
    const setTasks = newTasks => tasks = newTasks
    
    const getTask = {}

    const containsTask = {}

    const addTask = {}

    const deleteTask = {}
}