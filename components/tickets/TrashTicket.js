import { useContext, useRef, useState, useEffect } from "react";
import { RequestToResponse } from "@/src/controller/requestParser";
import { ProjectService } from "@/src/services/Projects/projects_service";
function TrashTickets({settoggleTrash, toggleTrash, data}) {
    
  const [projectsMembers, setprojectsMembers] = useState([]);

  useEffect(() => {
    (async () => {
      if (toggleTrash) {
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
        <div className={ `modal fade  ${toggleTrash? "show fade d-block": "d-none"}`} id="addproj" style={{background:"rgba(0, 0, 0, 0.7)"}} tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <form className="modal-content">
           
            <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="leaveaddLabel">Trash Ticket  #TC-{data.id} </h5>
                <button type="button" className="btn-close" onClick={()=>(settoggleTrash(false))} aria-label="Close"></button>
            </div>
            <div className="modal-body">
                test
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={()=>(settoggleTrash(false))}>Done</button>
                <button type="submit" className="btn btn-primary">sent</button>
            </div>
        </form>
        </div>
    </div>
     );
}

export default TrashTickets;