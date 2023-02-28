import { ApiContext } from "@/src/controller/apiContext";
import { ProjectService } from "@/src/services/Projects/projects_service";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";

function Invitetoproject({thisData, setthisData}) {
  const Router = useRouter()
  const { showToastMessage } = useContext(ApiContext);

  const onSubmit = async (data) => {
    alert(JSON.stringify(data))
    let body = {
      email: data.email,
      projectId: thisData[0]
    };

    if (data && body && thisData) {
        // alert(JSON.stringify(data))
        console.log('invite to project',body);
        console.log('invite to project',data);
      ProjectService.inviteUsertoProject(body)
      .then((res) => {
        console.log(">-+-++++> data");
        console.log(res);
        // alert("Utilisateur ajouté avec success");
        
          showToastMessage("Invited with Success", "success")
          // alert(isLoading)
        
        // setactionmessage(["Modification Effectuée", 'yes', res.statusText, res.status])
        // settoggleAdd(false)
        Router.push("/projects")
 
      })
      .catch((error) => {
        // setactionmessage(["Echec de l'Ajout" , "no", error.response, error.status])
        if(error.response) console.error(error.response.data.message);
        if(error.response) showToastMessage(error.response.data.message, "error")
        // return error.message;
      });
      // alert('fin')
    } else {
      alert("There is an error");
    }
 
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <div
      className="modal fade"
      id="addUser"
      tabIndex={-1}
      aria-labelledby="addUserLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold" id="addUserLabel">
              Invitation {thisData[1]}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}  className="inviteby_email">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  id="exampleInputEmail1"
                  aria-describedby="exampleInputEmail1"
                  {...register("email", require)}
                />
                <button
                  className="btn btn-dark"
                  type="submit"
                  id="button-addon2"
                >
                  Sent
                </button>
              </div>
            </form>
            <div className="members_list">
              <h6 className="fw-bold ">Person </h6>
              <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                {/* <li className="list-group-item py-3 text-center text-md-start">
                  <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                    <div className="no-thumbnail mb-2 mb-md-0">
                      <img
                        className="avatar lg rounded-circle"
                        src="assets/images/xs/avatar2.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                      <span className="text-muted">rachel.carr@gmail.com</span>
                    </div>
                    <div className="members-action">
                      <span className="members-role ">Admin</span>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-transparent dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-sliders  fs-6"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" href="/">
                              <i className="bi bi-incognito fs-6 me-2"></i>
                              ResetPassword
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/">
                              <i className="bi bi-chart fs-6 me-2"></i>
                              ActivityReport
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 text-center text-md-start">
                  <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                    <div className="no-thumbnail mb-2 mb-md-0">
                      <img
                        className="avatar lg rounded-circle"
                        src="assets/images/xs/avatar3.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="mb-0  fw-bold">
                        Lucas Baker
                        <Link href="/" className="link-secondary ms-2">
                          (Resend invitation)
                        </Link>
                      </h6>
                      <span className="text-muted">lucas.baker@gmail.com</span>
                    </div>
                    <div className="members-action">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-transparent dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Members
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" href="/">
                              <i className="bi bi-check-circle"></i>

                              <span>All operations permission</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/">
                              <i className="fs-6 p-2 me-1"></i>
                              <span>Only Invite & manage team</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-transparent dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-sliders  fs-6"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" href="/">
                              <i className="bi bi-trash fs-6 me-2"></i>
                              Delete Member
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li> */}
                <li className="list-group-item py-3 text-center text-md-start">
                  <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                    <div className="no-thumbnail mb-2 mb-md-0">
                      <img
                        className="avatar lg rounded-circle"
                        src="/assets/images/xs/avatar8.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="mb-0  fw-bold">Una Coleman</h6>
                      <span className="text-muted">una.coleman@gmail.com</span>
                    </div>
                    <div className="members-action">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-transparent dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Members
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" href="/">
                              <i className="bi bi-check-circle"></i>

                              <span>All operations permission</span>
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/">
                              <i className="fs-6 p-2 me-1"></i>
                              <span>Only Invite & manage team</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-sliders fs-6"></i>
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <Link className="dropdown-item" href="/">
                                <i className="bi bi-incognito fs-6 me-2"></i>
                                ResetPassword
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" href="/">
                                <i className="bi bi-task-list fs-6 me-2"></i>
                                ActivityReport
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" href="/">
                                <i className="bi bi-trash2 fs-6 me-2"></i>
                                Suspend member
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" href="/">
                                <i className="bi bi-trash fs-6 me-2"></i>
                                Delete Member
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitetoproject;
