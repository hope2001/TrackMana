import { api } from "@/src/services";
import Link from "next/link";

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

export default TaskItem;