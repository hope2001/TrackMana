import Layout from "@/components/Layout/layout";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { api, salt } from "@/src/services/apip";
import Loader from "@/components/Layout/partials/Loader";
import { RequestToResponse } from "@/src/controller/requestParser";
import { accountService } from "@/src/services/accountServices";
import { employeeService } from "@/src/services";
import useFetch from "@/src/controller/useFetch";
import Editemployee from "@/components/employee/Editemployee";
import Deleteemployee from "@/components/employee/Deleteemployee";
import Addemployee from "@/components/employee/Addemployee";
import { ApiContext } from "@/src/controller/apiContext";
import { useRouter } from "next/router";

// accountService.getConnectedUserInfo()
function Employee() {
  const { companies, Activecompany, setactivecompany, showToastMessage } =
    useContext(ApiContext);
  const [usersList, setusersList] = useState([]);
  const [userisLoading, setuserisLoading] = useState(true);

  const [company, setcompany] = useState([]);
  const Router = useRouter();
  const [currentid, setcurrentid] = useState("");
  const [forEdit, setforEdit] = useState([]);
  const [toggleEdit, settoggleEdit] = useState(false);

  const [forDelete, setforDelete] = useState([]);
  const [toggleDelete, settoggleDelete] = useState(false);

  const [toggleAdd, settoggleAdd] = useState(false);

  const { name, age, happyBirthday } = useContext(ApiContext);

  let body = {};
  useEffect(() => {
    (async () => {
      if (Activecompany) {
        body = {
          companyId: Activecompany.id,
        };
      }

      // alert(JSON.stringify(body));

      const { resultStatus, result, errorStatus, errorMessage } =
        await RequestToResponse(await employeeService.getAllEmployees(body));
      console.warn("if", resultStatus, result, errorStatus, errorMessage);

      if (result !== null && resultStatus === "OK") {
        setusersList(result), setuserisLoading(false);
      }
    })();
  },[Activecompany]);
  function modalForEdit(employee) {
    setforEdit([employee]);
    settoggleEdit(true);
  }

  function modalForDelete(employee) {
    setforDelete([employee]);
    settoggleDelete(true);
  }

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
                    onClick={() => settoggleAdd(true)}
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i>Add
                    Employee
                  </button>
                </div>
              </div>
              <div>
                {" "}
                {name} {age}{" "}
                <button onClick={() => happyBirthday()}>btn incrr</button>
              </div>
            </div>
          </div>
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <table
                    id="dtable"
                    className="table table-hover table-striped align-middle mb-0"
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
                    <tbody  style={{ width: "100%" }}>
                      {userisLoading ? (
                        <tr className="bg-danger w-100 mx-auto">
                          <td colSpan="8" className="d-flex justify-content-center">
                            <Loader />
                          </td>
                        </tr>
                      ) : (
                        usersList.map((employee, index) => (
                          <tr key={index}>
                            <td>
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
                                <span className="badge bg-danger">
                                  Inactive
                                </span>
                              )}
                            </td>
                            <td>
                              <div
                                className="btn-group small"
                                role="group"
                                aria-label="Basic outlined example"
                              >
                                <button
                                  role="button"
                                  id={`${index}btned`}
                                  type="button"
                                  className="btn btn-sm btn-outline-light border-dark"
                                  // data-bs-toggle="modal"
                                  onClick={() => modalForEdit(employee)}
                                >
                                  <i className="bi bi-pen text-success"></i>
                                </button>
                                <button
                                  role="button"
                                  id={`${index}btndel`}
                                  type="button"
                                  className="btn btn-sm btn-outline-dark deleterow"
                                  onClick={() => modalForDelete(employee)}
                                >
                                  <i className="bi bi-trash text-danger"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  {/* {isLoading ? <Loader /> : ""} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Addemployee toggleAdd={toggleAdd} settoggleAdd={settoggleAdd} />
      <Editemployee
        toggleEdit={toggleEdit}
        settoggleEdit={settoggleEdit}
        forEdit={forEdit}
      />
      <Deleteemployee
        toggleDelete={toggleDelete}
        settoggleDelete={settoggleDelete}
        forEdit={forDelete}
      />
    </Layout>
  );
}

export default Employee;
