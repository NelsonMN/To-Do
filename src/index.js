const Task = (title, details, priority, dueDate, status) => {
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;

    const getDetails = () => details;
    const setDetails = (newDetails) => details = newDetails;

    const getPriority = () => priority;
    const setPriority = (newPriority) => priority = newPriority

    const getDueDate = () => dueDate;
    const setDueDate = (newDueDate) => dueDate = newDueDate;

    const getStatus = () => status;
    const setStatus = (newStatus) => status = newStatus;

    return {
        getTitle, setTitle, 
        getDetails, setDetails, 
        getPriority, setPriority, 
        getDueDate, setDueDate,
        getStatus, setStatus
    }
};