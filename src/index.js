const Task = (title, description, dueDate, priority, status, id) => {

    const setTitle = newTitle => title = newTitle;
    const setDescription= newDescription => description = newDescription;
    const setDueDate = newDate => dueDate = newDate;
    const setPriority = newPriority => priority = newPriority;
    const setStatus = newStatus => status = newStatus;

    return {title, setTitle, description, setDescription, dueDate, setDueDate, priority, setPriority, status, setStatus, id}
}

