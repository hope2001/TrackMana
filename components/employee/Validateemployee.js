import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { employeeService, userValidations, api } from "@/src/services";
import { ApiContext } from "@/src/controller/apiContext";
import { RequestToResponse } from "@/src/controller/requestParser";
function ValidateEmployee({toggleValidation,settoggleValidation, forValidation}) {

    const [confirmDelete, setconfirmDelete] = useState(false)
    const [actionmessage, setactionmessage] = useState([])
    const { register, handleSubmit, formState: { errors }, formState } = useForm({ mode: "onChange" });
    const {showToastMessage} = useContext(ApiContext);

    const confirmValid = async()=>{
 let body={
  id: forValidation[4]
 }
 alert(body)
        const {resultStatus, result, errorStatus, errorMessage} = await RequestToResponse( await userValidations.approveCompanyRequest(body))
        // console.log(resultStatus, result, errorStatus, errorMessage);
        if(result !== null && resultStatus === "OK"){
          showToastMessage("Confirmed with Success", "success")
          // alert(isLoading)
        }else{
          showToastMessage("An error occured", "error")
        }
    }
    useEffect(() => {
        console.log("+++++++++>>>forval",forValidation);
    }, [forValidation,toggleValidation]);
    return ( 
        <div
        className={`modal fade  ${toggleValidation? "show fade d-block": "d-none"}`}
        id="deleteemp"
        tabIndex={-1}
        style={{background:"rgba(0, 0, 0, 0.7)"}}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="deleteprojectLabel">
                Validation
              </h5>
              <button
              onClick={(e)=>{settoggleValidation(false)}}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            {/* style={{width:"30px", height:"30px"}} */}
            <div className="modal-body justify-content-center flex-column d-flex">
                <img className=" lg align-self-center" src="/assets/images/confirm.svg" alt="profile" style={{width:"150px", height:"150px"}} quality={60}  />
                           
              {/* <i className="bi bi-trash text-danger display-2 text-center mt-2"></i> */}
              <p className="mt-4 fs-5 text-center">
                confirm this ?
                {/* {JSON.stringify(forValidation)} */}
              </p>
              <div className="d-flex shadow-sm p-3  border-4 border-warning justify-content-space-between flex-column" style={{borderLeft:"solid", borderRadius:"10px"}}>
                
                <img className="avata lg rounded-circle Image-thumbnail" src={api+forValidation[0]} alt="profile" quality={60} style={{width:"30px", height:"30px"}} />
                <div><strong>Company Name:</strong> {forValidation[1]} </div>
                <div><strong>Your Role:</strong> {forValidation[2]} </div>
                <div><strong>Label:</strong> {forValidation[3]} </div>
              </div>

            </div>
            <div className="modal-footer">
            { actionmessage.length === ""&& '' }
                    { actionmessage[1] ==="yes"&& <div className="col-sm-6 mx-auto p-3 alert-success text-center rounded "> {actionmessage[0]} <br/> {actionmessage[2]} {actionmessage[3]} </div>}
                    { actionmessage[1] ==="no"&& <div className="col-sm-6 mx-auto p-3 alert-danger text-center rounded "> {actionmessage[0]} <br/> {actionmessage[2]} {actionmessage[3]} </div>}
               
              <button
              onClick={(e)=>{settoggleValidation(false)}}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button role="button" aria-label="Name" type="button" className="btn btn-success ">
              <span onClick={(e)=>confirmValid()} >Yes</span>
                
              </button>
            </div>
          </div>
        </div>
      </div>
     );
}

export default ValidateEmployee;