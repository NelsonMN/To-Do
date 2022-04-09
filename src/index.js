const Task = (title, description, dueDate, priority, status, id) => {

    const getTitle = () => title;
    const setTitle = newTitle => title = newTitle;
    const getDescription = () => description;
    const setDescription= newDescription => description = newDescription;
    const getDate = () => dueDate;
    const setDate = newDate => dueDate = newDate;
    const getPriority = () => priority;
    const setPriority = newPriority => priority = newPriority;
    const getStatus = () => status;
    const setStatus = newStatus => status = newStatus;
    const getId = () => id;
    const setId = newId => id = newId;

    return {getTitle, setTitle, getDescription, setDescription, getDate, setDate, getPriority, setPriority, getStatus, setStatus, getId, setId}
};


const Project = (projectTitle, projectId) => {

    let project = [];

    const getProjectTitle = () => projectTitle;
    const setProjectTitle = newTitle => projectTitle = newTitle;
    const getProjectId = () => projectId;
    const setProjectId = newId => projectId = newId;

    const getTask = (id) => {
        return project.find((task) => task.getId() === id)
    };

    const getTasks = () => project;

    const addTask = (task) => {
        project.push(task)
    };

    const removeTask = (id) => {
        project = project.filter((task) => task.getId() !== id)
    };

    return {getTasks, getProjectTitle, getProjectId, setProjectTitle, setProjectId, getTask, addTask, removeTask}
};


const ToDo = () => {
    
    let toDo = [];
    
    const getProject = (projectId) => {
        return toDo.find((project) => project.getProjectId() === projectId)
    };

    const getProjects = () => toDo;

    const addProject = (project) => {
        toDo.push(project)
    };

    const removeProject = (projectId) => {
        toDo = toDo.filter((project) => project.getProjectId() !== projectId)
    };
    
    return {getProject, getProjects, addProject, removeProject}
};

export {Task, Project, ToDo}