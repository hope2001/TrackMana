import Layout from "@/components/Layout/layout";
import Loader from "@/components/Layout/partials/Loader";
import CreateTask from "@/components/tasks/CreateTask";
import TaskItem from "@/components/tasks/TaskItem";
import { ApiContext } from "@/src/controller/apiContext";
import { RequestToResponse } from "@/src/controller/requestParser";
import { api } from "@/src/services";
import { ProjectService } from "@/src/services/Projects/projects_service";
import { TasksService } from "@/src/services/Projects/tasksServices";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";

function ProjectDetails({ params }) {
  const Router = useRouter();

  // if(document !== undefined) alert(projectId)
  const { showToastMessage } = useContext(ApiContext);
  const [projectDetails, setprojectDetails] = useState("");
  const [thisProject, setthisProject] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [show, setshow] = useState(false);
  const [url, seturl] = useState("");
  
  const [tasks, settasks] = useState([]);
  const { asPath, pathname } = useRouter();

  let projectId = Router.query["id"];
  useEffect(() => {
    (async () => {
      let plt = asPath.split("/");
      seturl(plt[plt.length - 1]);
      projectId = Router.query["id"];

      if (projectId) {
        setthisProject(projectId)
        const body = { ids: [projectId] };
        //  alert(JSON.stringify(body))
        const { resultStatus, result, errorStatus, errorMessage } =
          await RequestToResponse(await ProjectService.getAllProjects(body));
        console.warn("if", resultStatus, result, errorStatus, errorMessage);

        if (result !== null && resultStatus === "OK") {
          setprojectDetails(result), setisLoading(false);
          console.warn(" projectdetails ---------->", projectDetails);
        } else showToastMessage(errorMessage, "error");

        let bodyy ={projectId: projectId};
    (async () => {
      const { resultStatus, result, errorStatus, errorMessage } =
        await RequestToResponse(await TasksService.getAllTasks(bodyy));
      console.warn("tasks", resultStatus, result, errorStatus, errorMessage);
  
      if (result !== null && resultStatus === "OK") {
        settasks(result), setisLoading(false);
      }
      else if( errorStatus > 200){
        showToastMessage(errorMessage, "error")
      }
      else{
        showToastMessage("Something bad happen !!!", " warning")
      }
    })();
      }
    })();

    
  }, [asPath]);

  useEffect(()=>{
    
  },[])


  return (
    <Layout>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0"> Project details </h3>
                {/* <h3 className="h4 mb-0"> Project details {asPath}  </h3> */}
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  <Link
                    href="/projects"
                    type="button"
                    className="btn btn-primary btn-set-task w-sm-100"
                    onClick={() => ""}
                  >
                    <i className="icofont-arrow-left me-2 fs-6"></i>back
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  {/* {JSON.stringify(projectDetails)} */}
                  {projectDetails.length > 0 ? (
                    projectDetails.map((item) => (
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Project {item.label}
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="p-2">
                                <strong> Label :</strong>
                                <span> {item.label}</span>
                              </div>
                              <div className="p-2">
                                <strong> Description :</strong>
                                <span> {item.description}</span>
                              </div>
                              <div className="p-2">
                                <strong className="mr-2">
                                  {" "}
                                  <i className="bi bi-calendar-week"></i>{" "}
                                  Duration :
                                </strong>
                                <span className="p-2 alert-success">
                                  {" "}
                                  {item.startDate.split("T")[0]}
                                </span>
                                <span className="mx-2"> to </span>
                                <span className="p-2 alert-danger">
                                  {" "}
                                  {item.endDate.split("T")[0]}
                                </span>
                              </div>
                              <div className="p-2">
                                <strong>
                                  {" "}
                                  <i className="bi bi-hourglass-split"></i>{" "}
                                  Counter :
                                </strong>
                                <span>
                                  {" "}
                                  {getRemainingDay(
                                    item.startDate,
                                    item.endDate
                                  )}{" "}
                                  Days remaining
                                </span>
                              </div>
                              <div className="p-2">
                                <strong>
                                  {" "}
                                  <i className="bi bi-cash-coin"></i> Budget :
                                </strong>
                                <span>
                                  {" "}
                                  {item.budget} {currency(item.budgetCurrency)}{" "}
                                </span>
                              </div>
                              <div className="p-2">
                                <strong>
                                  {" "}
                                  <i className="bi bi-bar-chart-steps"></i>{" "}
                                  Priority :
                                </strong>
                                <span> {item.priority} </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Actors
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              {item.ProjectMembers.map((mem, index) => (
                                <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                  <UserList
                                    key={index}
                                    picture={mem.User.picture}
                                    firstName={mem.User.firstName}
                                    lastName={mem.User.lastName}
                                    email={mem.User.email}
                                  />
                                </ul>
                                // { mem.User.firstName}
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Tasks
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className="row justify-content-evenly gap-3">
                                <div className="d-flex p-3 justify-content-end">
                                  <span className="btn btn-info" onClick={()=> setshow(true)}> <i className="bi bi-plus-circle"></i> Add task </span>
                                </div>
                                {  
                                tasks.length>0 ?
                                tasks.map((item)=>(
                                 item.length>0  && <> <TaskItem data={item} /></>
                                ))
                                :
                                <div className="p-3 alert-dark text-center">No task</div>
                              }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Loader />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateTask this={thisProject} show={show} setshow={setshow} />
    </Layout>
  );
}

export default ProjectDetails;

function getRemainingDay(date1, date2) {
  // i'm using it to get the project duration and the remainning time
  if (!!date1 && !!date2) {
    // alert('in')
    return (
      (new Date(date2).getTime() - new Date(date1).getTime()) /
      (1000 * 3600 * 24)
    );
  } else {
    // alert('out')
    // alert(date1)
    let r = Math.ceil(
      (new Date(date1).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
    );
    if (r >= 0) {
      return r;
    } else {
      return 0;
    }
  }
}

function currency(value) {
  if (value === "EUR") return <i className="bi bi-currency-euro"></i>;
  if (value === "USD") return <i className="bi bi-currency-dollar"></i>;
  if (value === "NGN")
    return (
      <span className="">
        <i className="bi bi-cash-stack"></i> Naira
      </span>
    );
  if (value === "XOF")
    return (
      <span className="">
        <i className="bi bi-cash-stack"></i> Fcfa{" "}
      </span>
    );
  else
    <span className="">
      <i className="bi bi-cash-stack"></i> {value}{" "}
    </span>;
}

function UserList(props) {
  return (
    <li key={props.key} className="list-group-item px-md-4 py-3">
      <Link href="" className="d-flex">
        <img
          className="avatar rounded-circle"
          src={api + props.picture}
          alt=""
        />
        <div className="flex-fill ms-3 text-truncate">
          <h6 className="d-flex justify-content-between mb-0">
            <span> {props.firstName + " " + props.lastName} </span>
          </h6>
          <span className="text-muted">
            {" "}
            <Link href={`mailto:` + props.email}></Link> {props.email}{" "}
          </span>
        </div>
      </Link>
    </li>
  );
}
