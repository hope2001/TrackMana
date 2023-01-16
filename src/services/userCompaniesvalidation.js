import Axios from "./callerservice"

/**
 * Récupération des validations d'employés 
 *  * @param {object} body
 * @returns {Promise}
 */
 let getAllpendingRequests = (body) => {
    return Axios.post('/employees/getEmployeeRequests', body)
} 


/**
 * Récupération des validations d'employés 
 *  * @param {object} id
 * @returns {Promise}
 */
 let approveCompanyRequest = (id) => {
    return Axios.post('/employees/approveRequest', id)
} 




// Déclaration des services pour import
export const userValidations = {
    getAllpendingRequests, approveCompanyRequest
}