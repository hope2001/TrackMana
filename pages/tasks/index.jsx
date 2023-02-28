import Layout from "@/components/Layout/layout";
import CreateTask from "@/components/tasks/CreateTask";
import InviteUserToTask from "@/components/tasks/inviteUsertotask";
import TaskItem from "@/components/tasks/TaskItem";
import { ApiContext } from "@/src/controller/apiContext";
import { RequestToResponse } from "@/src/controller/requestParser";
import { api } from "@/src/services";
import { TasksService } from "@/src/services/Projects/tasksServices";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
function Tasks() {
  const [status, setstatus] = useState("progress");
  const [show, setshow] = useState(false);
  const [showAss, setshowAss] = useState(false);
  const [addId, setaddId] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [tasks, settasks] = useState([]);
  const { showToastMessage } = useContext(ApiContext);

  useEffect(()=>{
    let body ={};
    (async () => {
      const { resultStatus, result, errorStatus, errorMessage } =
        await RequestToResponse(await TasksService.getAllTasks(body));
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
  },[])
  
  


 function TaskItem(props) {
  function assignUser(id){
    setaddId(id)
    setshowAss(!showAss)
    
  }
  return (
    props.data && props.data.map((item,index)=>( 
   <div key={index} className="dd-handle col-lg-5 col-md-5 col-sm-12">
      <div className="task-info d-flex align-items-center justify-content-between">
        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">

          {item.label}
          
        </h6>
        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
          <div className="avatar-list avatar-list-stacked pt-2 m-0">
                      {item.TaskMembers.length >0 && item.TaskMembers.map((profil, index) => (
                        <img
                        key={index}
                        title={profil.User.firstName +" "+profil.User.lastName}
                          className="avatar rounded-circle sm"
                          src={api + profil.User.picture}
                          alt=""
                        />
                      ))}
                      {/* <img className="avatar rounded-circle sm" src="/assets/images/xs/avatar1.svg" alt=""/> */}
                      <span
                        className="avatar rounded-circle text-center pointer sm"
                        onClick={() => assignUser([item.Project.id, item.label, item.id])}
                      >
                        <i className="icofont-ui-add"></i>
                      </span>
                    </div>
          <span className="badge bg-warning text-end mt-2"> {item.priority} </span>
        </div>
      </div>
      <p className="py-2 mb-0">
        {
          item.description
        }
      </p>
      <div className="tikit-info row g-3 align-items-center">
        <div className="col-sm">
          <ul className="d-flex list-unstyled align-items-center flex-wrap">
            <li className="me-2">
              <div className="d-flex align-items-center">
                <i className="icofont-flag"></i>
                <span className="ms-1">28 Mar</span>
              </div>
            </li>
            <li className="me-2">
              <div className="d-flex align-items-center">
                <i className="icofont-ui-text-chat"></i>
                <span className="ms-1">5</span>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <i className="icofont-paper-clip"></i>
                <span className="ms-1">5</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm text-end">
          <Link href={"projects/projectdetails?id=" + item.Project.id} className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
            {item.Project.label}
          </Link>
        </div>
        
      </div>
      <div className="d-flex w-100 p-0 justify-content-end gap-3">
          <span onClick={()=>('')} className="btn btn-primary btn-sm">  <i className="bi bi-pen"></i> Edit</span>
          <span onClick={()=>('')} className="btn btn-danger btn-sm"> <i className="bi bi-trash"></i> Delete</span>
        </div>
    </div>
          ))
  );
}


  return (
    <Layout>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0"> Tasks </h3>
                {/* <h3 className="h4 mb-0"> Project details {asPath}  </h3> */}
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0 flex-wrap">
                  <button
                    type="button"
                    className="btn btn-primary btn-set-task w-sm-100"
                    onClick={()=>setshow(true)}
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i>Add task
                  </button>
                  <ul
                    className="nav nav-tabs tab-body-header rounded ms-0 ms-md-3 prtab-set w-sm-100"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        // data-bs-toggle="tab"
                        // href="#All-list"
                        role="tab"
                        onClick={() => setstatus("progress")}
                      >
                        In progress
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        // data-bs-toggle="tab"
                        // href="#Started-list"
                        role="tab"
                        onClick={() => setstatus("review")}
                      >
                        Need Review
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        // data-bs-toggle="tab"
                        // href="#Approval-list"
                        role="tab"
                        onClick={() => setstatus("approbation")}
                      >
                        Need Validation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        // data-bs-toggle="tab"
                        // href="#Completed-list"
                        role="tab"
                        onClick={() => setstatus("completed")}
                      >
                        Completed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  {status}

                  <div
                    className={
                      status === "progress"
                        ? "d-flex alert-info flex-wrap gap-2 box-border justify-content-evenly p-2 "
                        : "d-none"
                    }
                  >
                    {/* {JSON.stringify(tasks)} */}
                    {
                       tasks && tasks.map((item, index)=>(
                            <TaskItem key={index} data={item} status={status} />
                        ))
                    }
                    
                  </div>
                  <div
                    className={
                      status === "review"
                        ? "d-flex alert-danger flex-wrap gap-2 box-border justify-content-evenly p-2"
                        : "d-none"
                    }
                  >
                    {
                       tasks && tasks.map((item,index)=>(
                            <TaskItem key={index} data={item} status={status} />
                        ))
                    }
                  </div>
                  <div
                    className={
                      status === "approbation"
                        ? "d-flex alert-primary flex-wrap gap-2 box-border justify-content-evenly p-2"
                        : "d-none"
                    }
                  >
                     {
                       tasks && tasks.map((item,index)=>(
                            <TaskItem key={index} data={item} status={status} />
                        ))
                    }
                  </div>
                  <div
                    className={
                      status === "completed"
                        ? "d-flex alert-success flex-wrap gap-2 box-border justify-content-evenly p-2"
                        : "d-none"
                    }
                  >
                     {
                       tasks && tasks.map((item,index)=>(
                            <TaskItem key={index} data={item} status={status} />
                        ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateTask this="undefined" show={show} setshow={setshow} />
      <InviteUserToTask addId={addId[0]} lab={addId[1]} addId2={addId[2]} show={showAss} setshow={setshowAss} />
    </Layout>
    
  );
}

export default Tasks;




