import Axios from './callerservice'

/**
 * Récupération de la liste des employés
 * @param {object} body
 * @returns {Promise}
 */
let getAllEmployees = (body) => {
    // alert('get', JSON.stringify(body))
    return Axios.post('/employees/getEmployees', body)
}

/**
 * Ajout d'un employé
 * @param {object} empl
 * @returns {Promise}
 */
let addEmployee = (empl) => {
    return Axios.put('/employees', empl)
}

/**
 * Mise à jour d'un employé/auth/logga
 * @param {object} empl 
 * @returns {Promise}
 */
let updateEmployee = (empl) => {
    return Axios.patch('/employees', empl)
}

/**
 * desactivation d'un employé
 * @param {object} cid 
 * @returns {Promise}
 */
let deleteEmployee = (cid) => {
    return Axios.post('/employees/trash', cid)
}

/**
 * activation d'un employé
 * @param {object} cid 
 * @returns {Promise}
 */
 let undeleteEmployee = (cid) => {
    return Axios.post('/employees/untrash', cid)
}

// Déclaration des services pour import
export const employeeService = {
    getAllEmployees, addEmployee, updateEmployee, deleteEmployee,undeleteEmployee 
}
// getEmployee