import { api } from "@/src/services";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Deleteproject from "./Deleteproject";
import Editproject from "./Editproject";

function Project({ json, status, thisData, setthisData }) {
  const [tothis,settothis] = useState({})
  
  const [show, setshow] = useState(false);
  const [showD, setshowD] = useState(false);
  const Router = useRouter();
  const projectPrior = (pr) => {
    if (pr === "Faible")
      return (
        <h6 className="mb-0 fw-light  fs-6 p-2 self-center text-center pulse   mb-2 alert-dark">
          {" "}
          {pr}
        </h6>
      );
    if (pr === "Moyen")
      return (
        <h6 className="mb-0 fw-light  fs-6 p-2 self-center text-center pulse   mb-2 alert-info">
          {" "}
          {pr}
        </h6>
      );
    if (pr === "Urgent")
      return (
        <h6 className="mb-0 fw-light  fs-6 p-2 self-center text-center pulse   mb-2 alert-primary">
          {" "}
          {pr}
        </h6>
      );
    if (pr === "Très urgent")
      return (
        <h6 className="mb-0 fw-light  fs-6 p-2 self-center text-center pulse   mb-2 alert-danger">
          {" "}
          {pr}
        </h6>
      );
    if (pr === "Important")
      return (
        <h6 className="mb-0 fw-light  fs-6 p-2 self-center text-center pulse   mb-2 alert-warning">
          {" "}
          {pr}
        </h6>
      );
  };
  
  useEffect(()=>{
    if(show){
      // alert(show)
      alert(JSON.stringify(tothis))
      // console.log('tothis -+++++++++++>', tothis);
    }
    
  },[show])
  
 

  return (
    <>
      {/* <span className="p-2 bg-info"> {status} </span> */}

      {json.map(
        (item, index) =>
          item !== null && (
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6"
              key={index}
            >
              <div className="card  border-primar">
                <div className="card-body ">
                  <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="lesson_name">
                      <div className="project-block light-success-bg">
                        <i className="icofont-tick-boxed"></i>
                      </div>
                      {/* <span className="small text-muted project_name fw-bold"> Box of Crayons {item.category} </span> */}
                      <h6 className="mb-0 fw-bold  fs-6  mb-2">
                        {" "}
                        {item && item.label}{" "}
                      </h6>
                      {projectPrior(item.priority)}
                      {/* <h6 className="mb-0 fw-light  fs-6  mb-2 alert-warning"> { item.priority}</h6> */}
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        onClick={() =>( setshow(true), settothis(item))}
                        id="buttonTitle"
                        title="Edit project"
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="icofont-edit text-success"></i>
                      </button>
                      <button
                        onClick={() =>( setshowD(true), settothis(item))}
                        id="buttonTitle"
                        title="Delete project"
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteproject"
                      >
                        <i className="icofont-ui-delete text-danger"></i>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="avatar-list avatar-list-stacked pt-2">
                      {item.ProjectMembers.map((profil) => (
                        <img
                        title={profil.User.firstName +" "+profil.User.lastName}
                          className="avatar rounded-circle sm"
                          src={api + profil.User.picture}
                          alt=""
                        />
                      ))}
                       <span
                        className="avatar rounded-circle text-center pointer sm"
                        data-bs-toggle="modal"
                        data-bs-target="#addUser"
                        onClick={() => setthisData([item.id, item.label])}
                      >
                        <i className="icofont-ui-add"></i>
                      </span>
                    </div>
                  </div>
                  <div className="row g-2 pt-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-paper-clip"></i>
                        <span className="ms-2">1 Attach</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-sand-clock"></i>
                        <span className="ms-2">
                          {" "}
                          {getRemainingDay(
                            item && item.startDate,
                            item && item.endDate
                          )}{" "}
                          days
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-group-students "></i>
                        <span className="ms-2">
                          {" "}
                          {item.ProjectMembers.length} Members{" "}
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-ui-text-chat"></i>
                        <span className="ms-2">15</span>
                      </div>
                    </div>
                  </div>
                  <div className="dividers-block"></div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="small fw-bold mb-0">Progress</h4>
                    <span className="small light-danger-bg  p-1 rounded">
                      <i className="icofont-ui-clock"></i>{" "}
                      {getRemainingDay(item && item.endDate)} Days remaining
                    </span>
                  </div>

                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="title"
                      title="Title"
                    ></div>
                    <div
                      className="progress-bar bg-warning ms-1"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="title"
                      title="Title"
                    ></div>
                    <div
                      className="progress-bar bg-danger ms-1"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      id="title"
                      title="Title"
                    ></div>
                  </div>
                  <Link href={"/projects/projectdetails?id="+item.id} className="btn alert-dark mt-3 d-flex justify-content-center align-self-center "> <i className="bi bi-ey fs-5 px-2 align-self-center"> </i>  <span> view details</span> </Link>
   
                </div>
              </div>
            </div>
          )
      )}
       <Editproject show={show} setshow={setshow} thisData={tothis} setthisData={settothis}/>



<Deleteproject show={showD} setshow={setshowD} thisData={tothis} setthisData={settothis}/>
    </>
  );
}

export default Project;

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
