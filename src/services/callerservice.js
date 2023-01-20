import axios from 'axios'
import api from './apip'
import Router from "next/router";
import { accountService } from './accountServices';


// Paramétrage de base d'axios
const Axios = axios.create({
    baseURL: 'https://ttapi.bourjon.com'
})


// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use(request => {

    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
        // request.headers.ContentType = 'application/json; charset=UTF-8'
    }

    // request.headers.AccessControlAllowOrigin = api;
    return request
})

// Intercepteur de réponse API pour vérification de la session
Axios.interceptors.response.use(response => {
    return response
}, error => {
    if(error.response.status === 401){
        alert("access non autorisé")
    }
   else if(error.response.status === 403){
        accountService.logout()
        alert("Votre session  à expirée")
        Router.push('/auth/login')
    }else{
        return Promise.reject(error)
    }
})

export default Axios