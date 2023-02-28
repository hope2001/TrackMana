import { useForm } from "react-hook-form";
import {useState, useContext} from "react"
import {ProjectService} from "@/src/services/Projects/projects_service"
import { ApiContext } from "@/src/controller/apiContext";


const currencies = ['XOF', 'NGN', 'EUR', 'USD']
const priorities = ['Faible', 'Moyen', 'Important', 'Urgent', 'Très urgent']
function Createproject({toggleAdd,settoggleAdd}) {
  const { showToastMessage, categories } = useContext(ApiContext);
  const [actionmessage, setactionmessage] = useState([]);
  const {
    register,
    handleSubmit,
     formState,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  // const { companies, activecompany, setactivecompany, isLoading, loggedUser } = useContext(ApiContext);

  const onSubmit = async (data) => {
    alert(JSON.stringify(data))

    let body = {
      label: data.project_name,
      description: data.description,
      categoryId: data.category,
      startDate: data.start_date,
      endDate: data.end_date,
      budget: data.budget,
      budgetCurrency : data.currencies,
      priority: data.priority,
    };
    // departementId: data.departementId,
    // files: data.files,
    // assignedEmployee: data.assignedEmployee,
    // notifTo: data.notif_to
    alert(JSON.stringify(data));

    if (data && body) {
        // alert(JSON.stringify(data))
        console.log(body);
        console.log(data);
      ProjectService.addProject(body)
      .then((res) => {
        console.log(">-+-++++> data");
        console.log(res);
        alert("Projet ajouté avec success");
        showToastMessage("Project added with success","success")
        setactionmessage(["Modification Effectuée", 'yes', res.statusText, res.status])
        settoggleAdd(false)
        Router.push("/projects/projectslist")
      })
      .catch((error) => {
       if( error.response) setactionmessage(["Echec de l'Ajout" , "no", error.response, error.status])
       if( error.response) console.error(error.response.data.message);
       if( error.response) showToastMessage( error.response.data.message,"success");
        // return error.message;
      });
      alert('Project')
    } else {
      alert("There is an error");
    }
  };

    return ( 
        <div className={ `modal fade  ${toggleAdd? "show fade d-block": "d-none"}`} id="addproj" style={{background:"rgba(0, 0, 0, 0.7)"}} tabIndex={-1} aria-hidden="true">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="createprojectlLabel">
                Create Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>(settoggleAdd(false))}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput77" className="form-label">
                  Project Name
                </label>
                <input
                {...register("project_name")}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput77"
                  placeholder="Explain what the Project Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Project Category</label>
                <select
                {...register("category")}
                  className="form-select"
                  aria-label="Default select Project Category"
                >
                  {
                    categories && categories.map((category,index)=>(
                      <option key={index} value={category.id}> {category.label} </option>
                    ))
                  }
                  
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="formFileMultipleone" className="form-label">
                  Project Images & Document
                </label>
                <input
                  {...register('file')}
                  className="form-control"
                  type="file"
                  id="formFileMultipleone"
                  multiple
                />
              </div>
              <div className="deadline-form">
                <div>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label htmlFor="datepickerded" className="form-label">
                        Project Start Date
                      </label>
                      <input
                      {...register("start_date")}
                        type="date"
                        className="form-control"
                        id="datepickerded"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="datepickerdedone" className="form-label">
                        Project End Date
                      </label>
                      <input
                      {...register("end_date")}
                        type="date"
                        className="form-control"
                        id="datepickerdedone"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label className="form-label">Notifation Sent</label>
                      <select
                      {...register("notif_to")}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="1">All</option>
                        <option value="2">Team Leader Only</option>
                        <option value="3">Team Member Only</option>
                      </select>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="formFileMultipleone" className="form-label">
                        Task Assign Person
                      </label>
                      <select
                      {...register("assigned_employee")}
                        className="form-select"
                        multiple
                        aria-label="Default select Priority"
                      >
                        <option value="1">Ryan Nolan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Budget
                  </label>
                  <input {...register("budget")} type="number" className="form-control" />
                </div>
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Currency
                  </label>
                  <select
                  {...register("currencies")}
                    className="form-select"
                    aria-label="Default select currency"
                  >
                    
                    {
                      currencies.map((current, index)=>(
                          <option key={index} value={current}> {current} </option>
                      ))
                    }
                  </select>
                </div>
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Priority
                  </label>
                  <select
                  {...register("priority")}
                    className="form-select"
                    aria-label="Default select Priority"
                  >
                    {
                      priorities.map((prior, index)=>(
                          <option key={index} value={prior}> {prior} </option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea78"
                  className="form-label"
                >
                  Description (optional)
                </label>
                <textarea
                {...register("description")}
                  className="form-control"
                  id="exampleFormControlTextarea78"
                  rows="3"
                  placeholder="Add any extra details about the request"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
            { actionmessage.length === ""&& '' }
                    { actionmessage[1] ==="yes"&& <div className="col-sm-6 mx-auto p-3 alert-success text-center rounded "> {actionmessage[0]} <br/> {actionmessage[2]} {actionmessage[3]} </div>}
                    { actionmessage[1] ==="no"&& <div className="col-sm-6 mx-auto p-3 alert-danger text-center rounded "> {actionmessage[0]} <br/> {actionmessage[2]} {actionmessage[3]} </div>}
                
              <button
                type="button"
                className="btn btn-secondary"
                onClick={()=>(settoggleAdd(false))}
              >
                Done
              </button>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
     );
}

export default Createproject;