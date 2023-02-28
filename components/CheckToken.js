// import jwt_decode from "jwt-decode";
// import cookie from 'js-cookie';
import { useRouter } from "next/router";

import { useEffect } from "react";
import { accountService } from "@/src/services";

function TokenChecker({ children }) {
    const router = useRouter()
    useEffect(() => {
        if (router.pathname !== "/auth/login" || router.pathname !== "/auth/register") {
        // alert(router.pathname)
            if ( localStorage.getItem('TTrack-token')) {
                // console.log("Token Exist"); 
                // let token =  localStorage.getItem('TTrack-token');
                let decoded = accountService.getTokenInfo().exp;
                
                let currentTimestamp = new Date().getTime() / 1000;
                let tokenIsNotExpired = decoded.exp > currentTimestamp;


                if (!tokenIsNotExpired) {

                    router.push('/auth/login');
                }
            } else {
                console.log("Token doesn't Exist")
                router.push('/auth/login');
            }
        }
    })

    return (

        <>
            {children}
        </>
    );
}

export default TokenChecker;