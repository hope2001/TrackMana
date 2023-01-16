import { Navigate } from "react-router-dom";
import { accountService } from "../services/account_service";

import Router from "next/router";

/**
 * Fonction de vérification de token
 * Et fermetur partie admin
 * 
 * @param {Object} props{children} 
 * @returns {ReactNode}
 */
const AuthGuard = ({children}) => {

    // if(!accountService.isLogged()){
    //     return  <Navigate to="/auth/login"/>
    // }
    // alert(localStorage.getItem('TTrack-token'))
   
    return children
};

export default AuthGuard;