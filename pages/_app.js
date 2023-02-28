// import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/assets/css/timetracker.style.min.css";
import "../styles/assets/plugin/datatables/responsive.dataTables.min.css";
import "../styles/assets/plugin/datatables/dataTables.bootstrap5.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
// import 'datatables.net-dt'
import { ToastContainer, toast } from "react-toastify";
//import '../styles/assets/plugin/light-gallery/css/lightgallery.css'
// import '../styles/assets/fonts/icofont/css/icofont.css'
// import 'popper.js/dist/popper.min.js';
import { useEffect, useState } from "react";
import { ApiProvider } from "@/src/controller/apiContext";
import { accountService } from "@/src/services";
import Login from "./auth/login";
import { useRouter } from "next/router";
import TokenChecker from "@/components/CheckToken";

// import 'bootstrap/dist/js/bootstrap.min.js'
// import { accountService } from '@/src/services/accountServices';

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  const [contextstate, setcontextstate] = useState(false);
  const [loca, setloca] = useState('');
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    // typeof document !== undefined
    //   ? require("@/styles/assets/bundles/libscripts.bundle.js")
    //   : null;
    typeof document !== undefined
      ? require("@/styles/assets/bundles/dataTables.bundle.js")
      : null;
    typeof document !== undefined
      ? require("datatables.net-dt")

      : null;
  }, []);
  useEffect(()=>{
    if(typeof document !== undefined && accountService.isLogged){
      setcontextstate(true)
      setloca(accountService.isLogged)
    }
 },[loca])

  //    return (<TokenChecker>
  //     <ApiProvider>
  //       <Component {...pageProps} />
  //       <ToastContainer />
  //     </ApiProvider>
  //     </TokenChecker>
  //  );

  if (loca) {
    // console.warn("alert app", contextstate, "ah");
    // console.warn("alert app2",loca);
    // Router.push("/auth/login");
    return (
      <ApiProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ApiProvider>
    );

  }
  else{
   return (<> <Component {...pageProps} /> <ToastContainer /></>);
  }

}
