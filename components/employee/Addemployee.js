import { useState } from "react";
import { useForm } from "react-hook-form";
import { employeeService } from '@/src/services';

function Addemployee({toggleAdd,settoggleAdd}) {
  const empltype = ["CEO", "CFO", "CTO", "Manager", "Worker"];
  const [actionmessage, setactionmessage] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    alert(JSON.stringify(data))
    let body = {
      label: data.Label,
      description: data.description,
      email: data.email,
      companyId: data.company,
      type: data.type,
    };
    alert(JSON.stringify(data));

    if (data && body) {
        // alert(JSON.stringify(data))
        console.log(body);
        console.log(data);
      employeeService.addEmployee(body)
      .then((res) => {
        console.log(">-+-++++> data");
        console.log(res);
        alert("Utilisateur ajouté avec success");
        setactionmessage(["Modification Effectuée", 'yes', res.statusText, res.status])
        settoggleAdd(false)
        Router.push("/employee")
 
      })
      .catch((error) => {
        setactionmessage(["Echec de l'Ajout" , "no", error.response, error.status])
        console.error(error.response.data.message);
        // return error.message;
      });
      alert('Eglooo')
    } else {
      alert("There is an error");
    }
    // alert(JSON.stringify(body))
    //     if(data){
    //         employeeService.addEmployee(body)
    //   .then((res) => {
    //     console.log(res.data);

    //     alert("Employé suspendu avec success");
    //     setactionmessage(["Procédure d'ajout d'employé enclanchée", 'yes', res.statusText, res.status])
    //     Router.push("/employee")

    //   })
    //   .catch((error) => {
    //     console.log("----Error full" + JSON.stringify(error));
    //     setactionmessage(["Echec de la procédure" , "no", error.message, error.status])
    //     console.error(error.message);
    //     // return error.message;
    //   });
    //     }
  };

  return (
    <div className={`modal fade  ${toggleAdd? "show fade d-block": "d-none"}`} id="addemp" style={{background:"rgba(0, 0, 0, 0.7)"}} tabIndex={-1} aria-hidden="true">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
      >
        <div className="modal-content">
          {/* <form > */}
          <div className="modal-header">
            <h5 className="modal-title  fw-bold" id="createprojectlLabel">
              {" "}
              Add Employee
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={()=>(settoggleAdd(false))}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="deadline-form">
              <>
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label className="form-label">Email ID</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput477"
                      placeholder="User Name"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label">Label</label>
                    <input
                      {...register("Label")}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1778"
                      placeholder="Label"
                    />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col">
                    <input
                      {...register("type")}
                      className="form-control"
                      list="datalistOption"
                      id="DataList"
                      placeholder="Employee type!!!"
                    />
                    <datalist id="datalistOption">
                      {empltype.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </datalist>
                  </div>
                </div>

                <div className="row g-3 mb-3">

                <div className="col">
                    <label className="form-label">Company ID</label>
                    <select
                      {...register("company")}
                      className="form-select"
                      aria-label="Default select company"
                    >
                      <option value="1">Website Design</option>
                    </select>
                  </div>
                  <div className="col">
                    <label className="form-label">Department</label>
                    <select
                      {...register("departement")}
                      className="form-select"
                      aria-label="Default select Departement"
                    >
                      <option>Web Development</option>
                    </select>
                  </div>
                </div>
              </>
            </div>
            <div className="mb-3">
              <label className="form-label">Description (optional)</label>
              <textarea
                {...register("description")}
                className="form-control"
                id="exampleFormControlTextarea78"
                rows="3"
                placeholder="Add any extra details about the request"
              ></textarea>
            </div>
            <div className="table-responsive">
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
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
          {/* </form> */}
        </div>
      </form>
    </div>
  );
}

export default Addemployee;
