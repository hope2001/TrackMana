import Axios from "../callerservice"

/**
 * Récupération de la liste des projets
 * @param {object} body
 * @returns {Promise}
 */
let getAllProjects = (body) => {
    // alert('get', JSON.stringify(body))
    return Axios.post('/projects/getProjects', body)
}
/**
 * Récupération de la liste des membres de projets
 * @param {object} body
 * @returns {Promise}
 */
let getAllProjectsMembers = (body) => {
    // alert('get', JSON.stringify(body))
    return Axios.post('/project-members/getProjectMembers', body)
}

/**
 * Ajout d'un projet
 * @param body {object} 
 * @returns {Promise}
 */
let addProject = (body) => {
    return Axios.put('/projects', body)
}
/**
 * Ajout d'un utilisateur à un projet
 * @param body {object} 
 * @returns {Promise}
 */
let inviteUsertoProject = (body) => {
    return Axios.put('/project-members', body)
}

/**
 * Mise à jour d'un projet
 * @param {object} body
 * @returns {Promise}
 */
let updateProject = (body) => {
    return Axios.patch('/projects', body)
}

/**
 * desactivation d'un projet
 * @param {object} cid 
 * @returns {Promise}
 */
let deleteProject = (cid) => {
    return Axios.post('/projects/trash', cid)
}

/**
 * activation d'un projet
 * @param {object} cid 
 * @returns {Promise}
 */
 let undeleteProject = (cid) => {
    return Axios.post('/projects/untrash', cid)
}

// Déclaration des services pour import
export const ProjectService = {
    getAllProjects, getAllProjectsMembers, addProject, updateProject, deleteProject,undeleteProject, inviteUsertoProject 
}
