import React, { createContext, useEffect, useState, useRef } from "react";
import { CompanieServices } from "../services/Companies/companies_services";
import { RequestToResponse } from "./requestParser";
import { accountService } from "@/src/services/accountServices";

import { toast } from "react-toastify";
import Categories from "./../../pages/categories";
import {
  categoriesService,
  categoriesTaskService,
} from "../services/categories_Services";
import { ProjectService } from "../services/Projects/projects_service";
import { TasksService } from "../services/Projects/tasksServices";
export const ApiContext = createContext({});

const ApiProvider = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);
  const [tasksList, setTasksList] = useState([]);
  const [categories, setcategories] = useState([]);
  const [TCategories, setTCategories] = useState([]);
  const [projectsList, setprojectsList] = useState([]);
  const [companies, setcompanies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  // const activecompany = useRef('')
  const [activecompany, setactivecompany] = useState(""); // pour selectionner l'id de l'entreprise à effet de contexte general
  const [loggedUser, setloggedUser] = useState({});

  // company selection and fetching
  useEffect(() => {
    if (typeof document !== "undefined" && accountService.isLogged() === true) {
      // console.log("accountService.isLogged", accountService.isLogged());
      (async () => {
        const { resultStatus, result, errorStatus, errorMessage } =
          await RequestToResponse(await CompanieServices.getCompanies());
        // console.log(resultStatus, result, errorStatus, errorMessage);
        if (result !== null && resultStatus === "OK") {
          setcompanies(result);
        }
        setisLoading(false);
        // result[0].id.value
        // setactivecompany("fg");
      })();
    }
  }, [accountService.isLogged()]);

  //  get user info from local storage
  useEffect(() => {
    if (accountService.isLogged()) {
      setloggedUser(accountService.getConnectedUserInfo());
      // console.log(accountService.getConnectedUserInfo());
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

  //  Categories for project
  (() => {
    let body = {};
    useEffect(() => {
      (async () => {
        const { resultStatus, result, errorStatus, errorMessage } =
          await RequestToResponse(await categoriesService.getCategories(body));
        // console.warn("if category", resultStatus, result, errorStatus, errorMessage);

        if (result !== null && resultStatus === "OK") {
          setcategories(result), setisLoading(false);
        }
      })();
    }, []);
  })();

  /** task categories */
  useEffect(() => {
    let body = {};
    (async () => {
      const { resultStatus, result, errorStatus, errorMessage } =
        await RequestToResponse(
          await categoriesTaskService.getTaskCategories(body)
        );
      // console.warn("if", resultStatus, result, errorStatus, errorMessage);

      if (result !== null && resultStatus === "OK") {
        setTCategories(result), setisLoading(false);
      }
    })();
  }, []);

  /**fetch all projects**/
  useEffect(() => {
    let body = {};
    (async () => {
      const { resultStatus, result, errorStatus, errorMessage } =
        await RequestToResponse(await ProjectService.getAllProjects(body));
      console.warn("project", resultStatus, result, errorStatus, errorMessage);

      if (result !== null && resultStatus === "OK") {
        setprojectsList(result);
        // console.warn(result);
      } else console.log("No result");
    })();
  }, []);


    /**fetch all tasks**/
    useEffect(() => {
      let body = {};
      (async () => {
        const { resultStatus, result, errorStatus, errorMessage } =
          await RequestToResponse(await TasksService.getAllTasks(body));
        console.warn("task", resultStatus, result, errorStatus, errorMessage);
  
        if (result !== null && resultStatus === "OK") {
          
          setTasksList(result);
          // console.warn(result);
        } else console.log("No result");
      })();
    }, []);

  // fetch projects members
  // function fetchProjectMember(id) {
  //   alert(id)
  //   if (id) {
  //     let body = { id: id };
  //     (async () => {
  //       const { resultStatus, result, errorStatus, errorMessage } =
  //         await RequestToResponse(await ProjectService.getAllProjects(body));
  //       console.warn("if", resultStatus, result, errorStatus, errorMessage);
  //       if (result !== null && resultStatus === "OK" && !!id) {
  //         // const Projects = result
  //         // console.warn(result);
  //         let projectList = result[0].ProjectMembers;
  //         // let projectList = result.map((p) => p.ProjectMembers);
  //         // alert(JSON.stringify(projectList));
  //         console.log("Project list---------------->",projectList);
  //         return projectList;
  //       } else alert("No result");
  //     })();
  //   }
  // }

  return (
    <ApiContext.Provider
      value={{
        name,
        age,
        happyBirthday,
        showToastMessage,
        companies,
        activecompany,
        setactivecompany,
        tasksList,
        categories,
        TCategories,
        projectsList,
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
