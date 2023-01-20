import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { employeeService } from "../../src/services";
import { api } from '@/src/services/apip';


function Deleteemployee({toggleDelete,settoggleDelete, forDelete}) {
    const [confirmDelete, setconfirmDelete] = useState(false)
    const [actionmessage, setactionmessage] = useState([])
    const { register, handleSubmit, formState: { errors }, formState } = useForm({ mode: "onChange" });

    const onSubmit = async data => {
        let body = {
            id: data.ID,
            suspensionComment: data.deletereason
        }
        alert(JSON.stringify(data))
        alert(JSON.stringify(body))
        if(data){
            employeeService.deleteEmployee(body)
      .then((res) => {
        console.log(res.data);

        alert("Employé suspendu avec success");
        setactionmessage(["Suspension Effectuée", 'yes', res.statusText, res.status])
        Router.push("/employee")
 
      })
      .catch((error) => {
        console.log("----Error full" + JSON.stringify(error));
        setactionmessage(["Echec de la suspension" , "no", error.response.data.message, error.status])
        console.error(error.message);
        // return error.message;
      });
        }
    }
    return ( 
 
      <div
        className={`modal fade  ${toggleDelete? "show fade d-block": "d-none"}`}
        id="deleteemp"
        tabIndex={-1}
        style={{background:"rgba(0, 0, 0, 0.7)"}}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="deleteprojectLabel">
                Delete employee Permanently?b
              </h5>
              <button
              onClick={(e)=>{settoggleDelete(false)}}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body justify-content-center flex-column d-flex">
              <i className="bi bi-trash text-danger display-2 text-center mt-2"></i>
              <p className="mt-4 fs-5 text-center">
                Are you sure to delete {} ?
                {JSON.stringify(forDelete)}
              </p>
              {confirmDelete &&
               <form className="alert-warnin rounded mb-3 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
              <h4 className="mt-4 fs-5 text-center">
                Why?
              </h4>
              <div className="row g-3 mb-3 p-3">
                                <div className="col-6 px-3 d-none">
                                    <label  className="form-label"> ID</label>
                                    <input disabled {...register("id")} defaultValue={id} type="text"  className="form-control" id="exampleFormControlInput" placeholder="User id"/>
                                </div>
                                <div className="col-12 px-3">
                                    <label  className="form-label "> Reason of suspenssion:</label>
                                    <input {...register("deletereason")}  type="text"  className="form-control" id="exampleFormControlInput" placeholder="Reason of suspenssion"/>
                                </div>
                                <div className="col px-3">
                                    <Link href={api+"/deleteemp/"} className="btn btn-danger">Delete</Link>
                                </div>
                            </div>
              </form>}
            </div>
            <div className="modal-footer">
            { actionmessage.length === ""&& '' }
                    { actionmessage[1] ==="yes"&& <div className="col-sm-6 mx-auto p-3 alert-success text-center rounded "> {actionmessage[0]} <br/> {actionmessage[2]} {actionmessage[3]} </div>}
                    { actionmessage[1] ==="no"&& <div className="col-sm-6 mx-auto p-3 alert-danger text-center rounded "> {actionmessage[0]} <br/> {actionmessage[2]} {actionmessage[3]} </div>}
               
              <button
              onClick={(e)=>{settoggleDelete(false)}}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button role="button" aria-label="Name" type="button" className="btn btn-warning ">
              <span onClick={(e)=>{setconfirmDelete(true)}} >Yes</span>
                
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Deleteemployee;