import { useContext, useRef, useState, useEffect } from "react";
import { RequestToResponse } from "@/src/controller/requestParser";
import { ProjectService } from "@/src/services/Projects/projects_service";
function EditTickets({settoggleEdit, toggleEdit, data}) {
    
  const [projectsMembers, setprojectsMembers] = useState([]);

  useEffect(() => {
    (async () => {
      if (toggleEdit) {
        let body = { ids: [parseInt(data.Project.id)] };
        // alert(JSON.stringify(body));
        const { resultStatus, result, errorStatus, errorMessage } =
          await RequestToResponse(
            await ProjectService.getAllProjectsMembers(body)
          );
        console.warn(
          "project members",
          resultStatus,
          result,
          errorStatus,
          errorMessage
        );

        if (result !== null && resultStatus === "OK") {
          // alert(result)
          setprojectsMembers(result);
          // console.warn(result);
        } else alert("No result");
      }
    })();
  }, [data]);
    return ( 
        <div className={ `modal fade  ${toggleEdit? "show fade d-block": "d-none"}`} id="addproj" style={{background:"rgba(0, 0, 0, 0.7)"}} tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div className="modal-content">
           
            <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="leaveaddLabel"> Ticket Edit</h5>
                <button type="button" className="btn-close" onClick={()=>(settoggleEdit(false))} aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                    <label for="sub" className="form-label">Subject</label>
                    <input type="text" defaultValue={data.label} className="form-control" id="sub"/>
                </div>
                <div className="deadline-form">
                    <form>
                        <div className="row g-3 mb-3">
                        <div className="col">
                            <label for="depone" className="form-label">Assign to</label>
                            {/* <input type="text" className="form-control" id="depone"/> */}
                            <select  className="form-select">
                    {projectsMembers.length > 0 !== undefined &&
                        projectsMembers.map((member, index) => (
                          member.members.map((item, index1)=>(
                          <option key={index1} value={item.User.id}>
                            {item.User.firstName + " "}
                            {item.User.lastName}
                          </option>
                          ))

                        ))}
                    </select>
                        </div>
                        <div className="col">
                            <label for="deptwo" className="form-label">Created Date</label>
                            <input type="date" defaultValue={data.startDate} className="form-control" id="deptwo"/>
                        </div>
                        {data.startDate}
                        </div>
                    </form>
                </div>
                <div className="mb-3">
                    {JSON.stringify(data)}
                    <label  className="form-label">Status</label>
                    <select className="form-select">
                        <option selected>In Progress</option>
                        <option value="1">Completed</option>
                        <option value="2">Wating</option>
                        <option value="3">Decline</option>
                    </select>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={()=>(settoggleEdit(false))}>Done</button>
                <button type="submit" className="btn btn-primary">sent</button>
            </div>
        </div>
        </div>
    </div>
     );
}

export default EditTickets;