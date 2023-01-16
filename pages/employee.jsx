import Layout from "@/components/Layout/layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { api, salt } from "@/src/services/apip";
import Loader from "@/components/Layout/partials/Loader";
import { RequestToResponse } from "@/src/controller/requestParser";
import { accountService } from "@/src/services/accountServices";
import { employeeService } from "@/src/services";
// accountService.getConnectedUserInfo()
function Employee() {
  const [usersList, setusersList] = useState([]);
  const [company, setcompany] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  // let body = { companyId: 1 };
  const [currentid, setcurrentid] = useState("");

  const [idtoggler, setidtoggler] = useState(false);

  useEffect( () => {
    if(typeof document !== undefined){
          (async ()=>{
        //  console.warn(localStorage.getItem('TTrack-token'))

        // parseInt(company.map((emp) => emp.Employees.map((com) => com.Company.id)))
        let body = {
          companyId: 1,
        };
         
         alert(JSON.stringify(body))

         setusersList(await RequestToResponse( await employeeService.getAllEmployees(body)))

    })()
    }

  }, [])

  return (
    <Layout>
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="h4 mb-0">Employee List </h3>
                <div className="col-auto d-flex w-sm-100 mt-2 mt-sm-0">
                  <button
                    type="button"
                    className="btn btn-dark btn-set-task w-sm-100"
                    data-bs-toggle="modal"
                    data-bs-target="#addemp"
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i>Add
                    Employee
                  </button>
                </div>
              </div>
              <div>
                {JSON.stringify(
                  company.map((emp) =>
                    emp.Employees.map((com) => com.Company.id)
                  )
                )}
              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <table
                    id="dtable"
                    className="table table-hover align-middle mb-0"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Employee Name</th>
                        <th>COMPANY</th>
                        <th>ROLE</th>
                        <th>Total Project</th>
                        <th>Email</th>
                        <th>Project Assigned</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersList.map((employee) => (
                        <tr key={employee.User.id}>
                          <td>
                            {/* assets/images/xs/avatar1.svg */}
                            <img
                              className="avatar rounded-circle"
                              src={api + employee.User.picture}
                              alt=""
                            />
                            <span className="fw-bold ms-1">
                              {employee.User.firstName +
                                " " +
                                employee.User.lastName}
                            </span>
                          </td>
                          <td>
                            <Link href="/project">
                              {" "}
                              {employee.label.toUpperCase()}{" "}
                            </Link>
                          </td>
                          <td>
                            <Link href="/project"> {employee.type} </Link>
                          </td>
                          <td>
                            <a href="/task">
                              {" "}
                              {employee.User.Projects.length}{" "}
                            </a>
                          </td>
                          <td>
                            <Link href={"mailto:" + employee.User.email}>
                              {" "}
                              {employee.User.email}{" "}
                            </Link>
                          </td>
                          <td>23/02/21</td>
                          <td>
                            {/* suspensionComment */}
                            {employee.deletedAt === null && (
                              <span className="badge bg-success">Active</span>
                            )}
                            {employee.deletedAt === "suspended" && (
                              <span className="badge bg-warning">
                                Suspended
                              </span>
                            )}
                            {employee.deletedAt !== null && (
                              <span className="badge bg-danger">Inactive</span>
                            )}
                          </td>
                          <td>
                            <div
                              className="btn-group small"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-light border-dark"
                                data-bs-toggle="modal"
                                data-bs-target="#editemp"
                                onClick={() => setcurrentid(employee.userId)}
                              >
                                <i className="bi bi-pen text-success"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-dark deleterow"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteemp"
                                onClick={() => setcurrentid(employee.userId)}
                              >
                                <i className="bi bi-trash text-danger"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {currentid}
                  {isLoading ? <Loader /> : ""} {currentid}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Addemployee />
      <Editemployee id={currentid || 1} />
      <Deleteemployee id={currentid || 1} /> */}
    </Layout>
  );
}


export default Employee;
