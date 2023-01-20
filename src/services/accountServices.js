import Axios from './callerservice'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'
import  Router  from 'next/router'
import { salt } from './apip'
/**
 * Connexion vers l'API
 * @param {object} udata
 * @returns {Promise}
 */
 let register = (udata) => {
    return Axios.put('/users', udata)
}

/**
 * Connexion vers l'API
 * @param {object} credentials 
 * @returns {Promise}
 */
let login = (credentials) => {
    return Axios.post('/auth/login', credentials)
}

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token 
 */
let saveToken = (token) => {
    if (typeof window !== 'undefined') {
    localStorage.setItem('TTrack-token', token)
    }
}



/**
 * Decryptage du token securisé vers api
 * @param {string} o
 * @param {string} salt (key)
 */
 let decryptToken = (o, salt) => {
    o = decodeURI(o);

    if(salt && o.indexOf(salt) != 0)

        throw new Error('object cannot be decrypted');

    o = o.substring(salt.length).split('');

    for(var i = 0, l = o.length; i < l; i++)

        if(o[i] == '{')

            o[i] = '}';

        else if(o[i] == '}')

            o[i] = '{';

    return JSON.parse(o.join(''));
}


/**
 * Encryption securisée vers api
 *@param {string} o
 * @param {string} salt (key)
 */
 let EncryptToken = (o, salt) => {
    o = JSON.stringify(o).split('');

    for(var i = 0, l = o.length; i < l; i++)

        if(o[i] == '{')

            o[i] = '}';

        else if(o[i] == '}')

            o[i] = '{';

    return encodeURI(salt + o.join(''));
}

/**
 * recuperation des données personnelles de l'utilisateur connecté
 */
let getConnectedUserInfo = ()=>{
    if(isLogged){
    let token = getTokenInfo()  
    // console.log(token);
    // alert(token.payload)
    // alert(salt)
    let dtoken = decryptToken(token.payload,salt)
    return dtoken
//    console.log(dtoken);
}
}






/**
 * Suppression du token du localStorage
 */
let logout = () => {

       if (typeof window !== 'undefined')
       {
        alert('logout')
        localStorage.removeItem('TTrack-token')
        Router.push("/auth/login")
        }
    }

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
    if (typeof window !== 'undefined') {
        // console.log('isLogedIn')
        let token = localStorage.getItem('TTrack-token')
           return !!token
      
        
    }
        }
    

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
    if (typeof window !== 'undefined') {
        // console.log('getToken')
        // alert(localStorage.getItem('TTrack-token'))
        return localStorage.getItem('TTrack-token')
      }
    
}

/**
 * Récupération du payload du tkoen
 * @returns {object}
 */
let getTokenInfo = () => {
    return jwt_decode(getToken())
}

/**
 * donnée de l'utilisateur actuellement connecté
 * @param {List} companies
 * @returns {Promise}
 */
 let logedUserCompany = (companies) => {
    return Axios.get('/companies', companies)
}


// Déclaration des serivces pour import
export const accountService = {
    register,login, saveToken, logout, isLogged, getToken, getTokenInfo, decryptToken, getConnectedUserInfo, logedUserCompany
}