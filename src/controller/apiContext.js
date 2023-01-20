import React, { createContext, useEffect, useState,useRef } from "react";
import { CompanieServices } from "../services/Companies/companies_services";
import { RequestToResponse } from "./requestParser";
import { accountService } from "@/src/services/accountServices";

import { toast } from "react-toastify";
export const ApiContext = createContext({});

const ApiProvider = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);

  const [companies, setcompanies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const activecompany = useRef('')
  // const [activecompany, setactivecompany] = useState(''); // pour selectionner l'id de l'entreprise à effet de contexte general
  const [loggedUser, setloggedUser] = useState({});

  // company selection and fetching
  useEffect(() => {
    if  (typeof document !== "undefined"&& accountService.isLogged() === true) {
      console.log("accountService.isLogged", accountService.isLogged());
      (async () => {
        const { resultStatus, result, errorStatus, errorMessage } =
          await RequestToResponse(await CompanieServices.getCompanies());
        console.log(resultStatus, result, errorStatus, errorMessage);
        if (result !== null && resultStatus === "OK") {
          setcompanies(result);
        }
        setisLoading(false);
        activecompany.current = result[0].id.value;
      })();
    }
  }, [accountService.isLogged()]);

  //  get user info from local storage
  useEffect(() => {
    if (accountService.isLogged()) {
      setloggedUser(accountService.getConnectedUserInfo());
      console.log(accountService.getConnectedUserInfo());
    }
  }, []);

  //** Toast*/
  const showToastMessage = (message, type) => {
    if (type === "success") {
      toast.success(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (type === "warning") {
      toast.warning(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (type === "error") {
      toast.error(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (type === "info") {
      toast.info(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <ApiContext.Provider
      value={{
        name,
        age,
        happyBirthday,
        showToastMessage,
        companies,
        activecompany,
        // setactivecompany,
        isLoading,
        loggedUser,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

const withApi = (Child) => (props) =>
  (
    <ApiContext.Consumer>
      {(context) => <Child {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </ApiContext.Consumer>
  );

export { ApiProvider, withApi };
