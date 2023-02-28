import Axios from "../callerservice"

/**
 * Récupération de la liste des taches
 * @param {object} body
 * @returns {Promise}
 */
let getAllTasks = (body) => {
    // alert('get', JSON.stringify(body))
    return Axios.post('/tasks/getTasks', body)
}

/**
 * Ajout d'un projet
 * @param body {object} 
 * @returns {Promise}
 */
let addTasks = (body) => {
    return Axios.put('/tasks', body)
}
/**
 * Ajout d'un utilisateur à un projet
 * @param body {object} 
 * @returns {Promise}
 */
let assignUsertoTask = (body) => {
    return Axios.put('/task-members', body)
}

/**
 * Mise à jour d'un projet
 * @param {object} body
 * @returns {Promise}
 */
let updateTasks = (body) => {
    return Axios.patch('/tasks', body)
}

/**
 * desactivation d'un projet
 * @param {object} cid 
 * @returns {Promise}
 */
let deleteTask = (cid) => {
    return Axios.post('/tasks/trash', cid)
}

/**
 * activation d'un projet
 * @param {object} cid 
 * @returns {Promise}
 */
 let undeleteTask = (cid) => {
    return Axios.post('/tasks/untrash', cid)
}

// Déclaration des services pour import
export const TasksService = {
    getAllTasks, addTasks, updateTasks, deleteTask,undeleteTask, assignUsertoTask 
}
