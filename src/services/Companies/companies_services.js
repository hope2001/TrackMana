import Axios from "./../callerservice"

/**
 * Récupération des entreprises 
 *  * @param {object} body
 * @returns {Promise}
 */
 let getCompanies = (body) => {
    return Axios.get('/companies', body)
} 




// Déclaration des services pour import
export const CompanieServices = {

    getCompanies
}