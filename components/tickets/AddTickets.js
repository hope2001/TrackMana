import { ApiContext } from "@/src/controller/apiContext";
import { TicketsService } from "@/src/services/Projects/ticketsServices";
import { useContext, useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
// import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";
import { RequestToResponse } from "@/src/controller/requestParser";
import { ProjectService } from "@/src/services/Projects/projects_service";

// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css';

function AddTickets({ settoggleAdd, toggleAdd }) {
  // typeof document !== undefined ? const ReactQuill= require('react-quill') : null;
  const { showToastMessage, projectsList, tasksList } = useContext(ApiContext);

  const [content, setContent] = useState("");
  const [projectsMembers, setprojectsMembers] = useState([]);
  const [verifyProject, setVerifyProject] = useState("");
  const [toggleProject, settoggleProject] = useState(false);
  const [tgglTask, settgglTask] = useState(false);

  const status = ["In Progress", "Completed", "Wating", "Decline"];

  function handleContentChange(newContent) {
    setContent(newContent);
  }

  const handleSelectChange = (e) => {
    // alert(e.target.value);
    setVerifyProject(e.target.value);
  };
  const {
    register,
    watch,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  // const { companies, activecompany, setactivecompany, isLoading, loggedUser } = useContext(ApiContext);

  useEffect(() => {
    (async () => {
      if (toggleAdd) {
        let body = { ids: [parseInt(verifyProject)] };
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
  }, [verifyProject]);

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    // const cont = JSON.Stringify(content)
    let body = {
      label: data.subject,
      description: content,
      taskId: data.taskId,
      projectId: data.projectID,
      startDate: new Date(),
      status: data.status,
      targetId: data.user,
      priority: data.priority,
    };
    // departementId: data.departementId,
    // files: data.files,
    // assignedEmployee: data.assignedEmployee,
    // notifTo: data.notif_to
    alert(JSON.stringify(body));

    if (data && body) {
      // alert(JSON.stringify(data))
      console.log(body);
      console.log(data);
      TicketsService.addTicket(body)
        .then((res) => {
          console.log(res);
          showToastMessage("ticket added with success", "success");
          settoggleAdd(false);
          Router.push("/tickets");
        })
        .catch((error) => {
          if (error.response) console.error(error.response.data.message);
          if (error.response)
            showToastMessage(error.response.data.message, "warning");
          // return error.message;
        });
      alert("Tickets");
    } else {
      alert("There is an error");
    }
  };
  return (
    <div
      className={`modal fade  ${toggleAdd ? "show fade d-block" : "d-none"}`}
      id="addtickets"
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold" id="leaveaddLabel">
              {" "}
              Add Ticket{" "}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => settoggleAdd(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Project</label>
              <input
                onChange={() => settoggleProject(!toggleProject)}
                type="checkbox"
                className=" mx-4 form-contro"
              />
              <select
                disabled={toggleProject}
                {...register("projectID")}
                onChange={(e) => handleSelectChange(e)}
                className="form-select"
                aria-label="Default select Project Category"
              >
                {projectsList.map(
                  (project, index) =>
                    project !== null && (
                      <option key={index} value={project.id}>
                        {" "}
                        {project.label}{" "}
                      </option>
                    )
                )}
              </select>
              {verifyProject}
            </div>
            <div className="mb-3">
              <label className="form-label">Task</label>
              <input
                onChange={() => settgglTask(!tgglTask)}
                type="checkbox"
                className=" bg-primary text-danger mx-4 form-contro"
              />
              <select
                disabled={tgglTask}
                {...register("taskid")}
                className="form-select"
                aria-label="Default select Project Category"
              >
                {/* { <option  value="any"> Just to the project </option>} */}
                {tasksList.map((tasks) =>
                  tasks.map(
                    (task, index) =>
                      task !== null && (
                        <option key={index} value={task.id}>
                          {" "}
                          {task.label} ({task.Project.label}){" "}
                        </option>
                      )
                  )
                )}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="sub" className="form-label">
                Subject
              </label>
              <input
                {...register("subject")}
                type="text"
                className="form-control"
                id="sub"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sub" className="form-label">
                Description
              </label>
              {/* { typeof document !== undefined && <JoditTextEditor placeholder="Type the description here"/>} */}
              {typeof document !== undefined && (
                <JoditEditor value={content} onChange={handleContentChange} />
              )}
              {/* <div className="p-3 alert-success"> {content} </div> */}
              {/* {typeof document !== undefined && <ReactQuill value={content} onChange={handleContentChange}/>} */}
            </div>

            <div className="deadline-form">
              <>
                <div className="row g-3 mb-3">
                  <div className="col">
                    <label htmlFor="depone" className="form-label">
                      Assign Name
                    </label>
                    <div>
                    {projectsMembers.length > 0 !== undefined &&
                        projectsMembers.map((member, index) => (
                          member.id
                          // JSON.stringify(member)
                          // member.map((item, index1)=>(
                          //   <option key={index1} value={item.id}>
                          //   {item.User.firstName + " "}
                          //   {item.User.lastName}
                          // </option>
                          // ))
                        ))}
                    </div>
                    {/* <input {...register("user")} type="text" className="form-control" id="depone"/> */}
                    <select {...register("user")} className="form-select">
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
                  <div className="col">
                    <label htmlFor="deptwo" className="form-label">
                       Date
                    </label>
                    <input
                      {...register("dateStart")}
                      type="date"
                      className="form-control"
                      id="deptwo"
                      defaultValue={new Date()}
                      // new Date().split("T")[0]
                    />
                  </div>
                </div>
              </>
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select {...register("status")} className="form-select">
                {status.map((stat) => (
                  <option value={stat}>{stat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => settoggleAdd(false)}
            >
              Done
            </button>
            <button type="submit" className="btn btn-primary">
              sent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTickets;
