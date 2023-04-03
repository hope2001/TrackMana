import { ApiContext } from "@/src/controller/apiContext";
import { RequestToResponse } from "@/src/controller/requestParser";
import { ProjectService } from "@/src/services/Projects/projects_service";
import { TasksService } from "@/src/services/Projects/tasksServices";
import { useContext, useEffect,useState } from "react";
import { useForm } from "react-hook-form";

function CreateTask(props) {
    
  const [verifyProject, setVerifyProject] = useState("");
  const [projectsMembers, setprojectsMembers] = useState([]);
    const handleSelectChange = (e) => {
        // alert(e.target.value);
        setVerifyProject(e.target.value);
      };

    const { showToastMessage, TCategories, projectsList } = useContext(ApiContext);
    const priorities = ['Faible', 'Moyen', 'Important', 'Urgent', 'Très urgent']
    const {
        register,
        handleSubmit,
         formState,
        formState: { errors },
      } = useForm({ mode: "onChange" });

      useEffect(() => {
        (async () => {
          if (props.show) {
            let body = { ids: [parseInt(verifyProject)] };
            if(props.this !== undefined){
                 body = { ids: [parseInt(props.this)] }; 
            }
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
      }, [verifyProject, props.this,props.show]);


      const onSubmit = async (data) => {
        // alert(JSON.stringify(data))
        let body
        
        if(props.this !== undefined){
             body = {
                label: data.label,
                description: data.description,
                categoryId: data.category,
                startDate: data.start_date,
                endDate: data.end_date,
                priority: data.priority,
                projectId: data.projectid,
              //   employeeIds: data.employeeIds,
                userIds: data.assigned_employee
              };
        }else{
            body = {
          label: data.label,
          description: data.description,
          categoryId: data.category,
          startDate: data.start_date,
          endDate: data.end_date,
          priority: data.priority,
          projectId: data.projectid,
        //   employeeIds: data.employeeIds,
          userIds: data.assigned_employee
        };
        }
        // departementId: data.departementId,
        // files: data.files,
        // assignedEmployee: data.assignedEmployee,
        // notifTo: data.notif_to
        // alert(JSON.stringify('body',body));
    
        if (data && body) {
            // alert(JSON.stringify(body))
            console.log("body",body);
            console.log(data);
          TasksService.addTasks(body)
          .then((res) => {
            console.log(">-+-++++> data");
            console.log(res);
            // alert("Tache ajoutée avec success");
            showToastMessage("Task added with success","success")
            props.setshow(false)
            Router.push("/tasks")
          })
          .catch((error) => {
           if( error.response) console.error(error.response.data.message);
           if( error.response) showToastMessage( error.response.data.message,"error");
            // return error.message;
          });
        } else {
          alert("There is an error");
        }
      };

    return ( 
        <div className={ `modal fade  ${props.show? "show fade d-block": "d-none"}`} id="addproj" style={{background:"rgba(0, 0, 0, 0.7)"}} tabIndex={-1} aria-hidden="true">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="createprojectlLabel"> Create Task {props.this !== undefined && props.this}</h5>
                
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>(props.setshow(false))}></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                    <label  className="form-label">Task Label Name</label>
                            <input {...register("label")} type="text" className="form-control" />
                </div>
                { (props.this === "undefined" && props.show) && <div className="mb-3">
                    <label  className="form-label">Project Name</label>
                    <select {...register("projectid")} onChange={(e) => handleSelectChange(e)} className="form-select" aria-label="Default select Project Category">
                        {
                            projectsList.map((project, index)=>(

                                project !== null && <option key={index} value={project.id} > {project.label} </option>
                            ))
                        }
                    </select>
                </div>}
                <div className="mb-3">
                    <label  className="form-label">Task Category</label>
                    <select {...register("category")} className="form-select" aria-label="Default select Project Category">
                        {
                            TCategories.map((category, index)=>(
                                <option key={index} value={category.id} > {category.label} </option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htlmFor="formFileMultipleone" className="form-label">Task Images & Document</label>
                    <input {...register("docs")} className="form-control" type="file" id="formFileMultipleone"  multiple/>
                </div>
                <div className="deadline-form mb-3">
                    <form>
                        <div className="row">
                        <div className="col">
                            <label htlmFor="datepickerded" className="form-label">Task Start Date</label>
                            <input {...register("start_date")}  type="date" className="form-control" id="datepickerded"/>
                        </div>
                        <div className="col">
                            <label htlmFor="datepickerdedone" className="form-label">Task End Date</label>
                            <input {...register("end_date")} type="date" className="form-control" id="datepickerdedone"/>
                        </div>
                        </div>
                    </form>
                </div>
                <div className="row g-3 mb-3">
                    <div className="col-sm">
                        <label  className="form-label">Task Assign Person</label>
                        <select {...register("assigned_employee")} className="form-select" multiple aria-label="Default select Priority">
                        {projectsMembers.length > 0 !== undefined &&
                        projectsMembers.map((member, index) => (
                          member.members.map((item, index1)=>(
                          <option key={index1} value={item.User.id}>
                            {item.User.firstName + " "}
                            {item.User.lastName}
                          </option>
                          ))
                          // JSON.stringify(member)
                          // member.map((item, index1)=>(
                          //   <option key={index1} value={item.id}>
                          //   {item.User.firstName + " "}
                          //   {item.User.lastName}
                          // </option>
                          // ))

                        ))}
                        </select>
                    </div>
                </div>
                <div className="row g-3 mb-3">
                    <div className="col-sm">
                        <label  className="form-label">Task Priority</label>
                        <select {...register("priority")} className="form-select" aria-label="Default select Priority">
                            {
                                priorities.map((prior, index)=>(
                                    <option key={index} value={prior}> {prior} </option>
                                ))
                            }
                            
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label htlmFor="exampleFormControlTextarea786" className="form-label">Description (optional)</label>
                    <textarea {...register("description")} className="form-control" id="exampleFormControlTextarea786" rows="3" placeholder="Add any extra details about the request"></textarea>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>(props.setshow(false))}>Done</button>
                <button type="submit" className="btn btn-primary">Create task</button>
            </div>
        </div>
        </form>
    </div>
     );
}

export default CreateTask;