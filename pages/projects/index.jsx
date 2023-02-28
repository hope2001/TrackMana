import Layout from "@/components/Layout/layout";
import Createproject from "@/components/project/Createproject";
import Deleteproject from "@/components/project/Deleteproject";
import Editproject from "@/components/project/Editproject";
import Invitetoproject from "@/components/project/Invitetoproject";
import Project from "@/components/project/Project";
import { RequestToResponse } from "@/src/controller/requestParser";
import { ProjectService } from "@/src/services/Projects/projects_service";

import { useState, useEffect } from "react";

function Projectlist() {
    const [status, setstatus] = useState('all');
    // const [show, setshow] = useState(false);
    const [toggleAdd, settoggleAdd] = useState(false);
    const [projectfilter, setprojectfilter] = useState('');

    const [projectsList, setprojectsList] = useState([]);
    const [projectisLoading, setprojectisLoading] = useState(true);
    const [thisData, setthisData] = useState({});

    let body;
    useEffect(()=>{
        (async () => {
            if (projectfilter.length >1) {
                body = {
                  companyId: activecompany.id,
                };
              }else{
                body={}
              }
      const { resultStatus, result, errorStatus, errorMessage } =
      await RequestToResponse(await ProjectService.getAllProjects(body));
    console.warn("if", resultStatus, result, errorStatus, errorMessage);

    if (result !== null && resultStatus === "OK") {
      setprojectsList(result), setprojectisLoading(false);
      console.warn(result);
    }else alert('No result')
        })()
    },[projectfilter])
    return ( 
    <Layout>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header p-0 no-bg bg-transparent align-items-center px-0 d-flex border-bottom flex-wrap">
                <h3 className="h4 py-3 mb-0">Projects</h3>
                <div className="d-flex py-2 project-tab flex-wrap w-sm-100 ms-auto">
                  <button
                    onClick={() => settoggleAdd(true)}
                    type="button"
                    className="btn btn-dark w-sm-100 mb-2 mb-md-0"
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i>Create
                    Project
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
                        onClick={()=>(setstatus('all'))}
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        // data-bs-toggle="tab"
                        // href="#Started-list"
                        role="tab"
                        onClick={()=>(setstatus('started'))}
                      >
                        Started
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        // data-bs-toggle="tab"
                        // href="#Approval-list"
                        role="tab"
                        onClick={()=>(setstatus('approved'))}
                      >
                        Approval
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        // data-bs-toggle="tab"
                        // href="#Completed-list"
                        role="tab"
                        onClick={()=>(setstatus('completed'))}
                      >
                        Completed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 flex-column">
              <div className="tab-content mt-4 project-board">
                <div className="tab-pane fade show active" id="All-list">
                  <div className="row g-3 gy-5 py-3 row-deck">
                    {/* {JSON.stringify(projectsList, null, 8)} */}
                    
                        <Project  json={projectsList} status={status} thisData={thisData} setthisData={setthisData} />
                  
                  </div>
                </div>
                {/* <div className="tab-pane fade" id="Started-list">
                <div className="row g-3 gy-5 py-3 row-deck">
                  <Project/>
                  </div>
                </div>
                <div className="tab-pane fade" id="Approval-list">
                <div className="row g-3 gy-5 py-3 row-deck">
                  <Project/>
                  </div>
                </div>
                <div className="tab-pane fade" id="Completed-list">
                <div className="row g-3 gy-5 py-3 row-deck">
                  <Project/>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>



 {/* Create projects */}
<Createproject toggleAdd={toggleAdd} settoggleAdd={settoggleAdd}/>
<Invitetoproject thisData={thisData} setthisData={setthisData}/>
    {/* <Editproject show={show} setshow={setshow} thisData={thisData} setthisData={setthisData}/>

    <Invitetoproject thisData={thisData} setthisData={setthisData}/>

    <Deleteproject thisData={thisData} setthisData={setthisData}/> */}

</Layout>
     );
}

export default Projectlist;