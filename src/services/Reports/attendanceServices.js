import Axios from './callerservice'

/**
 * Récupération de la liste des présence
 * @param {object} body
 * @returns {Promise}
 */
let getAttendance = (body) => {
    // alert('get', JSON.stringify(body))
    return Axios.post('/attendance/getAttendance', body)
}

/**
 * Ajout d'une categorie
 * @param {object} empl
 * @returns {Promise}
 */
let addCategory = (empl) => {
    return Axios.put('/categories', empl)
}


/**
 * Mise à jour d'un employé/auth/logga
 * @param {object} empl 
 * @returns {Promise}
 */
let updateCategory = (empl) => {
    return Axios.patch('/categories', empl)
}

/**
 * desactivation d'un employé
 * @param {object} cid 
 * @returns {Promise}
 */
let deleteCategory = (cid) => {
    return Axios.post('/categories/trash', cid)
}

/**
 * activation d'un employé
 * @param {object} cid 
 * @returns {Promise}
 */
 let undeleteCategory = (cid) => {
    return Axios.post('/categories/untrash', cid)
}


// Déclaration des services pour import
export const categoriesService = {
    getCategories, addCategory, updateCategory, deleteCategory, undeleteCategory
}


/*** Tasks part */



/**
 * Récupération de la liste des categories
 * @param {object} body
 * @returns {Promise}
 */
let getTaskCategories = (body) => {
    // alert('get', JSON.stringify(body))
    return Axios.post('/task-categories/getTaskCategories', body)
}

/**
 * Ajout d'une categorie
 * @param {object} empl
 * @returns {Promise}
 */
let addTasksCategory = (empl) => {
    return Axios.put('/task-categories', empl)
}


/**
 * Mise à jour d'un employé/auth/logga
 * @param {object} empl 
 * @returns {Promise}
 */
let updateTasksCategory = (empl) => {
    return Axios.patch('/task-categories', empl)
}

/**
 * desactivation d'un employé
 * @param {object} cid 
 * @returns {Promise}
 */
let deleteTasksCategory = (cid) => {
    return Axios.post('/task-categories/trash', cid)
}

/**
 * activation d'un employé
 * @param {object} cid 
 * @returns {Promise}
 */
 let undeleteTasksCategory = (cid) => {
    return Axios.post('/task-categories/untrash', cid)
}


// Déclaration des services pour import
export const categoriesTaskService = {
    getTaskCategories, addTasksCategory, updateTasksCategory, deleteTasksCategory, undeleteTasksCategory
}
// getEmployee