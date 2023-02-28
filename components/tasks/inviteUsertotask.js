import { ApiContext } from "@/src/controller/apiContext";
import { RequestToResponse } from "@/src/controller/requestParser";
import { ProjectService } from "@/src/services/Projects/projects_service";
import { TasksService } from "@/src/services/Projects/tasksServices";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function InviteUserToTask(props) {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [MembersList, setMembersList] = useState([]);
  const [projectsMembers, setprojectsMembers] = useState([]);
  const { showToastMessage } = useContext(ApiContext);

  /**fetch all projects**/
  useEffect(() => {
      
      (async () => {
          if (props.show) {
          let body = { ids: [props.addId] };
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
          setprojectsMembers(result);
          // console.warn(result);
        } else alert("No result");
      }
    })();
  }, [props.id, props.addId]);

  const onSubmit = async (data) => {
    let body = {
        projectMemberIds: data.task_member,
        taskId: props.addId2,
  };
  alert(JSON.stringify(body))
  if (data && body){
    TasksService.assignUsertoTask(body)
    .then((res) => {
        // console.log(">-+-++++> data");
        console.log(res);
        // alert("Tache ajoutée avec success");
        showToastMessage(" User added to Task with success","success")
        props.setshow(false)
        Router.push("/tasks")
      })
      .catch((error) => {
    //    if( error.response) setactionmessage(["Echec de l'Ajout" , "no", error.response, error.status])
       if( error.response) console.error(error.response.data.message);
       if( error.response) showToastMessage( error.response.data.message,"error");
        // return error.message;
      });
  }
  }
  return (
    <div
      className={`modal fade  ${props.show ? "show fade d-block" : "d-none"}`}
      id="addproj"
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
      tabIndex={-1}
      aria-hidden="true"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold" id="createprojectlLabel">
              {" "}
              Assign User To Task {props.lab}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => props.setshow(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Project Name
                 {/* {JSON.stringify(projectsMembers)}{" "} */}
              </label>
              <select
                {...register("task_member")}
                className="form-select"
                aria-label="Default select Project Category"
                multiple
              >
                { projectsMembers.length>0 !== undefined && projectsMembers.map((p)=>(
                    p.members.map((member, index) => (
                  <option key={index} value={member.id} >
                    {member.User.firstName+ " "}
                    {member.User.lastName }
                  </option>
                )) 
                ))}
              </select>
              <input {...register("task_id")} defaultValue={props.addId2} type="text" className="" id=""/>
              <input {...register("hidden", { value: props.addId2 })} type="hidden" />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => props.setshow(false)}
            >
              Done
            </button>
            <button type="submit" className="btn btn-primary">
              Add to task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InviteUserToTask;
