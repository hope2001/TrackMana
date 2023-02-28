import Axios from "../callerservice"

/**
 * Récupération de la liste des taches
 * @param {object} body
 * @returns {Promise}
 */
let getAllTickets = (body) => {
    // alert('get', JSON.stringify(body))
    return Axios.post('/tickets/getTickets', body)
}

/**
 * Ajout d'un projet
 * @param body {object} 
 * @returns {Promise}
 */
let addTicket = (body) => {
    return Axios.put('/tickets', body)
}
// /**
//  * Ajout d'un utilisateur à un projet
//  * @param body {object} 
//  * @returns {Promise}
//  */
// let assignUsertoTask = (body) => {
//     return Axios.put('/task-members', body)
// }


/**
 * Mise à jour d'un projet
 * @param {object} body
 * @returns {Promise}
 */
let updateTicket = (body) => {
    return Axios.patch('/tickets', body)
}

/**
 * desactivation d'un projet
 * @param {object} cid 
 * @returns {Promise}
 */
let deleteTicket = (cid) => {
    return Axios.post('/tickets/trash', cid)
}

/**
 * activation d'un projet
 * @param {object} cid 
 * @returns {Promise}
 */
 let undeleteTicket = (cid) => {
    return Axios.post('/tickets/untrash', cid)
}

// Déclaration des services pour import
export const TicketsService = {
    getAllTickets, addTicket, updateTicket, deleteTicket,undeleteTicket 
}
