import Layout from "@/components/Layout/layout";
import Loader from "@/components/Layout/partials/Loader";
import { RequestToResponse } from "@/src/controller/requestParser";
import { employeeService, userValidations, api } from "@/src/services";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import ValidateEmployee from "@/components/employee/ValidateEmployee";
import { ApiContext } from "@/src/controller/apiContext";
function CompaniesValidation() {

    const [validations, setvalidations] = useState([])
    const [forValidation, setforValidation] = useState([])
    const [toggleValidation,settoggleValidation] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    
    const valid =(employee)=>{
      setforValidation(employee)
      settoggleValidation(true)
      alert(JSON.stringify(employee))
      alert(toggleValidation)
    }

    useEffect( () => {
      (async ()=>{
        const {resultStatus, result, errorStatus, errorMessage} = await RequestToResponse( await userValidations.getAllpendingRequests())
        // console.log(resultStatus, result, errorStatus, errorMessage);
        if(result !== null && resultStatus === "OK"){
          setvalidations( result );
          setisLoading(false)
          // alert(isLoading)
        }
  
      })()
    }, [])


    return ( 
        <Layout>
            
            <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
            
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0">Validations </h3>
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  {/* <button
                    type="button"
                    className="btn btn-dark btn-set-task w-sm-100"
                    data-bs-toggle="modal"
                    data-bs-target="#addemp"
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i> Add Department
                  </button> */}
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
         {/* {JSON.stringify(validations, null, 6)} */}
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                 { validations.length>0 ?
                  <table
                    id="dtable"
                    className="table table-hover align-middle mb-0"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Company </th>
                        <th>Departement</th>
                        <th>ROLE</th>
                        <th>FUNCTION</th>
                        <th>DESCRIPTION</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      { !isLoading? validations.map((employee, index) => (
                        <tr key={index}>
                          <td>
                            <img className="avata lg rounded-circle Image-thumbnail" src={api+ employee.Company.logo} alt="profile" quality={60} style={{width:"30px", height:"30px"}} />
                            <span className="fw-bold ms-1">
                            {employee.Company.label}
                            </span>
                          </td>
                          <td>
                            <Link href=""> {}
                            </Link>
                          </td>
                          <td>
                            <Link href="">{employee.type} </Link>
                          </td>
                          <td>
                            <a href=""> {employee.label}
                            </a>
                          </td>
                          <td>
                            <a href=""> {employee.description}
                            </a>
                          </td>
                          <td>
                              <span className="badge bg-warning">
                                pending
                              </span>
                          </td>
                          <td className="text-center">
                            
                              <button
                                type="button"
                                title="Confirm"
                                onClick={()=> valid([employee.Company.logo,employee.Company.label,employee.type,employee.label,employee.id])}
                                className="btn btn-sm btn-info"
                              >
                                <i className="bi bi-check-circle text-light"></i>
                              </button>
                          </td>
                        </tr>
                      )): <Loader/>
                      }
                       </tbody>
                  </table> : <div className="d-flex w-100 alert-dark p-3 mx-auto text-center justify-content-center">Any validation pending now !!!</div> }

    </div>
                  {/* {isLoading? <Loader/> :''} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ValidateEmployee toggleValidation={toggleValidation} settoggleValidation={settoggleValidation} forValidation={forValidation} />
        </Layout>
     );
}

export default CompaniesValidation;